import React, {PropTypes} from 'react'
import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'
import setPropTypes from 'recompose/setPropTypes'
import withState from 'recompose/withState'
import defaultProps from 'recompose/defaultProps'
import PromiseWorker from 'promise-worker-transferable'

import './styles.css'

import Wave from '../Wave'
import Time from '../Time'

const worker = new Worker('worker.js')
const promiseWorker = new PromiseWorker(worker)

function WebAudio (props) {
  const {peaks, currentTime, duration} = props

  return (
    <div className='WebAudio'>
      <Time className='WebAudio-currentTime' value={currentTime} unit='s' />
      <div className='WebAudio-wave'>
        <Wave
          peaks={peaks}
          currentProgress={currentTime / duration}
        />
      </div>
      <Time className='WebAudio-duration' value={duration} unit='s' />
    </div>
  )
}

WebAudio.propTypes = {
  peaks: PropTypes.arrayOf(PropTypes.number),
  currentTime: PropTypes.number,
  duration: PropTypes.number,
}

WebAudio.defaultProps = {
  peaks: [],
}

function append (buffer1, buffer2) {
  const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength)
  tmp.set(new Uint8Array(buffer1), 0)
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength)
  return tmp.buffer
}

export default compose(
  defaultProps({
    audioContext: new AudioContext(),
    barCount: 300,
  }),
  setPropTypes({
    audioContext: PropTypes.instanceOf(AudioContext).isRequired,
    src: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    barCount: PropTypes.number.isRequired,
  }),
  withState('peaks', 'setPeaks', []),
  withState('currentTime', 'setCurrentTime', 0),
  lifecycle({
    playAudioBuffer (buffer, prevAudioSrc) {
      const {audioContext: ctx} = this.props

      const audioSrc = ctx.createBufferSource()
      return ctx.decodeAudioData(buffer).then((data) => {
        let offsetSec
        if (this.startTime == null) {
          this.startTime = ctx.currentTime
          offsetSec = 0
        } else {
          offsetSec = ctx.currentTime - this.startTime
          if (prevAudioSrc != null && offsetSec > prevAudioSrc.buffer.duration) {
            this.startTime += offsetSec - prevAudioSrc.buffer.duration
            offsetSec = prevAudioSrc.buffer.duration
          }
        }

        audioSrc.buffer = data
        audioSrc.connect(ctx.destination)
        audioSrc.start(0, offsetSec)

        if (prevAudioSrc != null) {
          prevAudioSrc.stop()
          prevAudioSrc.disconnect()
        }

        return audioSrc
      })
    },
    componentWillMount () {
      this.monitor = setInterval(() => {
        const {audioContext: ctx, setCurrentTime} = this.props
        if (this.audioSrc != null && this.startTime != null) {
          setCurrentTime(ctx.currentTime - this.startTime)
        }
      }, 250)

      this.playSrc(this.props)
    },
    componentWillUnmount () {
      clearInterval(this.monitor)
      this.stopSrc()
    },
    componentWillReceiveProps (nextProps) {
      if (nextProps.src !== this.props.src) {
        this.stopSrc()
        this.playSrc(nextProps)
      }
    },
    stopSrc () {
      if (this.audioSrc != null) {
        this.audioSrc.stop()
        this.audioSrc.disconnect()
      }
    },
    playSrc (props) {
      const {src, setPeaks, barCount, duration} = props
      this.startTime = null

      let output = new Uint8Array()

      const pump = (reader) => {
        return reader.read().then((result) => {
          if (result.done) {
            return
          }

          const chunk = result.value
          output = append(output, chunk)

          return pump(reader)
        })
      }

      let lastByteLength = 0
      let lastPeaks
      const keepPlayingJimmy = (audioSrc) => {
        if (output.byteLength > lastByteLength) {
          lastByteLength = output.byteLength
          this.playAudioBuffer(output, audioSrc)
            .then((nextSrc) => {
              this.audioSrc = nextSrc

              const channelData = nextSrc.buffer.getChannelData(0)

              promiseWorker.postMessage({
                sampleRate: nextSrc.buffer.sampleRate,
                chan: channelData,
                startAt: audioSrc != null ? audioSrc.buffer.length : 0,
                length: barCount,
                duration,
                peaks: lastPeaks,
              }, [channelData.buffer]).then((res) => {
                lastPeaks = res
                setPeaks(lastPeaks)
              })

              return keepPlayingJimmy(nextSrc)
            })
            .catch((err) => console.log(err))
        } else {
          setTimeout(() => keepPlayingJimmy(audioSrc), 1000)
        }
      }

      fetch(src).then((res) => {
        if (this.props.src === src) {
          pump(res.body.getReader())
          keepPlayingJimmy()
        }
      }).catch((err) => {
        console.error(err)
      })
    },
  })
)(WebAudio)

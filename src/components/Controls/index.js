import React, {PropTypes} from 'react'

import './styles.css'

import Icon from '../Icon'
import BlurImage from '../BlurImage'
import Timeline from '../Timeline'
import SquareImage from '../SquareImage'

export default function Controls (props) {
  const {
    audio, track, paused, onPrev, onPlay, onPause, onNext, onQueue,
  } = props

  return (
    <div className='Controls'>
      <BlurImage src={track.thumb} />
      <div className='Controls-contents'>
        <div className='Controls-playback'>
          <button onClick={onPrev} className='Controls-playback-prev'>
            <Icon icon='to-start' />
          </button>
          <button
            onClick={paused ? onPlay : onPause}
            className='Controls-playback-play'
          >
            <Icon icon={paused ? 'play' : 'pause'} />
          </button>
          <button onClick={onNext} className='Controls-playback-next'>
            <Icon icon='to-end' />
          </button>
        </div>
        <div className='Controls-centerBlock'>
          <div className='Controls-trackInfo'>
            <span className='Controls-trackInfo-title'>
              {track.title}
            </span>
            <span className='Controls-trackInfo-seperator'>&mdash;</span>
            <span className='Controls-trackInfo-artist'>
              {track.originalTitle}
            </span>
          </div>
          <div className='Controls-timeline'>
            <Icon icon='shuffle' className='Controls-shuffle' />
            <Timeline
              buffered={audio.buffered}
              currentTime={audio.currentTime}
              duration={audio.duration}
            />
            <Icon icon='cw' className='Controls-repeat' />
          </div>
        </div>
        <button
          className='Controls-queue'
          onClick={onQueue}
        >
          <Icon icon='list' />
        </button>
        <SquareImage
          className='Controls-albumThumb'
          imageClassName='Controls-albumThumbImage'
          src={track.thumb}
        />
      </div>
    </div>
  )
}

Controls.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  paused: PropTypes.bool,
  audio: PropTypes.shape({
    buffered: PropTypes.number,
    currentTime: PropTypes.number,
    duration: PropTypes.number,
  }).isRequired,
  onPrev: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onNext: PropTypes.func,
  onQueue: PropTypes.func,
}

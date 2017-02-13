self.importScripts('https://unpkg.com/promise-worker-transferable/dist/promise-worker.register.js')

function getPeaks (options) {
  const {sampleRate, chan, startAt, length, duration} = options
  const {peaks = new Array(length).fill(0)} = options

  const desiredSampleCount = 10
  const sampleSize = (sampleRate * duration) / length
  const sampleStep = Math.floor(sampleSize / desiredSampleCount) || 1
  const sampleCount = Math.ceil(sampleSize / sampleStep)
  const first = Math.floor(startAt / sampleSize)

  for (let i = first; i <= length; i += 1) {
    const start = Math.floor(i * sampleSize)
    const end = Math.min(Math.floor(start + sampleSize), chan.length)

    if (start >= chan.length) {
      break
    }

    let sum = 0
    for (let j = start; j < end; j += sampleStep) {
      sum += Math.abs(chan[j])
    }

    peaks[i] = sum / sampleCount
  }

  return peaks
}

self.registerPromiseWorker((options) => {
  return getPeaks(options)
})

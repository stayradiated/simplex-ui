import React, {PropTypes} from 'react'

import TrackList from '../TrackList'
import Time from '../Time'

export default function AlbumPanelTracks (props) {
  const {tracks} = props

  const totalDuration = tracks.reduce((total, track) => {
    return track.duration + total
  }, 0)

  return (
    <div className='AlbumPanelTracks'>
      <TrackList tracks={tracks} />
      <p className='AlbumPanelTracks-info'>
        Tracks: {tracks.length}, Total Time: <Time
          value={totalDuration}
          format='h [h] m [min] ss [sec]'
        />
      </p>
    </div>
  )
}

AlbumPanelTracks.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

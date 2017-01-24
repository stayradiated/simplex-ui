import React, {PropTypes} from 'react'

import Time from '../Time'
import RatingBars from '../RatingBars'

export default function AlbumPanelTracks (props) {
  const {tracks} = props

  const totalDuration = tracks.reduce((total, track) => {
    return track.duration + total
  }, 0)

  return (
    <div className='AlbumPanelTracks'>
      <ul className='AlbumPanelTracks-list'>
        {tracks.map((track, key) => (
          <li
            key={key}
            className='AlbumPanelTracks-track'
          >
            <span className='AlbumPanelTracks-index'>{track.index}</span>
            <span className='AlbumPanelTracks-title'>{track.title}</span>
            <RatingBars
              className='AlbumPanelTracks-rating'
              value={track.userRating}
              maxValue={10}
            />
            <Time
              className='AlbumPanelTracks-duration'
              value={track.duration}
            />
          </li>
        ))}
      </ul>
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

import React, {PropTypes} from 'react'

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
            <span className='AlbumPanelTracks-duration'>{track.duration}</span>
            <span className='AlbumPanelTracks-rating'>{track.userRating}</span>
          </li>
        ))}
      </ul>
      <p>{tracks.length} tracks. Total length: {totalDuration}</p>
    </div>
  )
}

AlbumPanelTracks.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

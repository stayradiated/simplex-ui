import React, {PropTypes} from 'react'

import './Item.css'

import Time from '../Time'
import RatingBars from '../RatingBars'

export default function TrackListItem (props) {
  const {index, track, style, displayArtist} = props

  return (
    <div className='TrackListItem' style={style}>
      <span className='TrackListItem-index'>{index != null ? index : track.index}</span>
      <span className='TrackListItem-fulltitle'>
        <span className='TrackListItem-title'>{track.title}</span>
        {displayArtist &&
          <span className='TrackListItem-artist'>{track.originalTitle}</span>}
      </span>
      <RatingBars
        className='TrackListItem-rating'
        value={track.userRating}
        maxValue={10}
      />
      <Time
        className='TrackListItem-duration'
        value={track.duration}
      />
    </div>
  )
}

TrackListItem.propTypes = {
  style: PropTypes.shape({}),
  index: PropTypes.number,
  track: PropTypes.shape({
    index: PropTypes.number,
    title: PropTypes.string,
    userRating: PropTypes.nuumber,
    duration: PropTypes.nuumber,
  }).isRequired,
  displayArtist: PropTypes.bool,
}

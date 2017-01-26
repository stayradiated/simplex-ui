import React, {PropTypes} from 'react'

import Time from '../Time'
import RatingBars from '../RatingBars'

export default function TrackListItem (props) {
  const {track, style} = props

  return (
    <div className='TrackListItem-track' style={style}>
      <span className='TrackListItem-index'>{track.index}</span>
      <span className='TrackListItem-title'>{track.title}</span>
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
  track: PropTypes.shape({
    index: PropTypes.number,
    title: PropTypes.string,
    userRating: PropTypes.nuumber,
    duration: PropTypes.nuumber,
  }).isRequired,
}

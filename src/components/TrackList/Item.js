import React, {PropTypes} from 'react'

import './Item.css'

import Time from '../Time'
import RatingBars from '../RatingBars'
import SoundBars from '../SoundBars'

export default function TrackListItem (props) {
  const {
    index, track, style, currentlyPlaying, displayArtist, onSelect,
  } = props

  return (
    <button className='TrackListItem' style={style} onClick={onSelect}>
      <div className='TrackListItem-contents'>
        {currentlyPlaying
          ? <span className='TrackListItem-nowPlayingIcon'>
            <SoundBars />
          </span>
          : <span className='TrackListItem-index'>
            {index != null ? index : track.index}
          </span>}
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
    </button>
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
  currentlyPlaying: PropTypes.bool,
  displayArtist: PropTypes.bool,
  onSelect: PropTypes.func,
}

import React, {PropTypes} from 'react'

import ItemsList from '../List'
import TrackListItem from './Item'
import TrackListSummary from './Summary'

export default function TrackList (props) {
  const {tracks, preserveTrackIndex} = props

  const items = tracks.map((track, index) => {
    return (
      <TrackListItem
        track={track}
        index={preserveTrackIndex ? track.index : index + 1}
      />
    )
  })

  items.push(
    <TrackListSummary tracks={tracks} />
  )

  return (
    <ItemsList items={items} />
  )
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
  preserveTrackIndex: PropTypes.bool,
}

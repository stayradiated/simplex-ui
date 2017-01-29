import React, {PropTypes} from 'react'

import ItemsList from '../List'
import TrackListItem from './Item'
import TrackListSummary from './Summary'

export default function TrackList (props) {
  const {tracks} = props

  const items = tracks.map((track) => (
    <TrackListItem track={track} />
  ))

  items.push(
    <TrackListSummary tracks={tracks} />
  )

  return (
    <ItemsList items={items} />
  )
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

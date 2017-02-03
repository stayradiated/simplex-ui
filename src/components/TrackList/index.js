import React, {PropTypes} from 'react'

import ItemsList from '../List/withAutoSizer'
import TrackListItem from './Item'
import TrackListSummary from './Summary'

export default function TrackList (props) {
  const {
    tracks, preserveTrackIndex, onSelectTrack,
    currentlyPlayingTrackId, displayArtist,
  } = props

  const items = tracks.map((track, index) => {
    return (
      <TrackListItem
        track={track}
        index={preserveTrackIndex ? track.index : index + 1}
        currentlyPlaying={track.id === currentlyPlayingTrackId}
        onSelect={() => onSelectTrack && onSelectTrack(track)}
        displayArtist={displayArtist}
      />
    )
  })

  items.push(
    <TrackListSummary tracks={tracks} />
  )

  return (
    <ItemsList rowHeight={40} items={items} />
  )
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
  preserveTrackIndex: PropTypes.bool,
  currentlyPlayingTrackId: PropTypes.number,
  onSelectTrack: PropTypes.func,
  displayArtist: PropTypes.bool,
}

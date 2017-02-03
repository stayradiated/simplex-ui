import React, {PropTypes} from 'react'

import Panel from '../Panel'
import TrackList from '../TrackList'

export default function PlaylistPanel (props) {
  const {playlist, currentlyPlayingTrackId, onSelectTrack, ...otherProps} = props

  const details = {
    thumb: playlist.composite,
    title: playlist.title,
    subtitle: 'Playlist',
    meta: `${playlist.tracks.length} items`,
  }

  return (
    <Panel {...otherProps} details={details}>
      <TrackList
        tracks={playlist.tracks}
        currentlyPlayingTrackId={currentlyPlayingTrackId}
        onSelectTrack={onSelectTrack}
        displayArtist
      />
    </Panel>
  )
}

PlaylistPanel.propTypes = {
  playlist: PropTypes.shape({
    tracks: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  currentlyPlayingTrackId: PropTypes.number,
  onSelectTrack: PropTypes.func,
}

import React, {PropTypes} from 'react'

import Panel from '../Panel'
import TrackList from '../TrackList'

export default function AlbumPanel (props) {
  const {album, currentlyPlayingTrackId, onSelectTrack, ...otherProps} = props

  const details = {
    thumb: album.thumb,
    title: album.title,
    subtitle: album.parentTitle,
    meta: album.year.toString(),
  }

  return (
    <Panel {...otherProps} details={details}>
      <TrackList
        tracks={album.tracks}
        currentlyPlayingTrackId={currentlyPlayingTrackId}
        onSelectTrack={onSelectTrack}
        preserveTrackIndex
      />
    </Panel>
  )
}

AlbumPanel.propTypes = {
  album: PropTypes.shape({
    thumb: PropTypes.string,
    title: PropTypes.string,
    parentTitle: PropTypes.string,
    pear: PropTypes.number,
    tracks: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  currentlyPlayingTrackId: PropTypes.number,
  onSelectTrack: PropTypes.func,
}

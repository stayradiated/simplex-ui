import React, {PropTypes} from 'react'

import TrackList from '../TrackList'

export default function AlbumPanelTracks (props) {
  const {tracks} = props

  return (
    <div className='AlbumPanelTracks'>
      <TrackList tracks={tracks} />
    </div>
  )
}

AlbumPanelTracks.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

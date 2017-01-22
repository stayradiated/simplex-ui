import React, {PropTypes} from 'react'

import './styles.css'

import AlbumPanelHeader from './Header'
import AlbumPanelTracks from './Tracks'

export default function AlbumPanel (props) {
  const {album} = props

  return (
    <div className='AlbumPanel'>
      <AlbumPanelHeader album={album} />
      <AlbumPanelTracks tracks={album.tracks} />
    </div>
  )
}

AlbumPanel.propTypes = {
  album: PropTypes.shape({
    tracks: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}

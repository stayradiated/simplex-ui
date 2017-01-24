import React, {PropTypes} from 'react'
import classNames from 'classnames'

import './styles.css'

import AlbumPanelHeader from './Header'
import AlbumPanelTracks from './Tracks'

export default function AlbumPanel (props) {
  const {className, album} = props

  return (
    <div className={classNames(className, 'AlbumPanel')}>
      <AlbumPanelHeader album={album} />
      <AlbumPanelTracks tracks={album.tracks} />
    </div>
  )
}

AlbumPanel.propTypes = {
  className: PropTypes.string,
  album: PropTypes.shape({
    tracks: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}

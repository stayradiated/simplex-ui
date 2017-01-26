import React, {PropTypes} from 'react'

import Panel from '../Panel'
import PanelHeader from '../Panel/Header'
import TrackList from '../TrackList'

export default function AlbumPanel (props) {
  const {album, ...otherProps} = props

  const header = (
    <PanelHeader
      thumb={album.thumb}
      title={album.title}
      subtitle={album.parentTitle}
      meta={album.year.toString()}
    />
  )

  return (
    <Panel {...otherProps} header={header}>
      <TrackList tracks={album.tracks} />
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
}

import React, {PropTypes} from 'react'

import Panel from '../Panel'
import PanelHeader from '../Panel/Header'
import AlbumList from '../AlbumList'

export default function ArtistPanel (props) {
  const {artist, ...otherProps} = props

  const header = (
    <PanelHeader
      thumb={artist.thumb}
      title={artist.title}
      subtitle={artist.genre.join(', ')}
      meta={artist.country.join(', ')}
    />
  )

  return (
    <Panel {...otherProps} header={header}>
      <AlbumList albums={artist.albums} />
    </Panel>
  )
}

ArtistPanel.propTypes = {
  artist: PropTypes.shape({
    albums: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}

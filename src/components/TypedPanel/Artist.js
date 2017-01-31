import React, {PropTypes} from 'react'

import Panel from '../Panel'
import AlbumList from '../AlbumList'

export default function ArtistPanel (props) {
  const {artist, ...otherProps} = props

  const details = {
    thumb: artist.thumb,
    title: artist.title,
    subtitle: artist.genre.join(', '),
    meta: artist.country.join(', '),
  }

  return (
    <Panel {...otherProps} details={details}>
      <AlbumList
        albums={artist.albums}
        preserveTrackIndex
      />
    </Panel>
  )
}

ArtistPanel.propTypes = {
  artist: PropTypes.shape({
    albums: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}

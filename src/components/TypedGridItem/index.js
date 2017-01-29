import React, {PropTypes} from 'react'

import Typed from '../Typed'
import ArtistItem from './Artist'
import AlbumItem from './Album'

export default function TypedGridItem (props) {
  const {item, ...otherProps} = props

  return (
    <Typed
      item={item}
      components={{
        artist: (artist) => <ArtistItem {...otherProps} artist={artist} />,
        album: (album) => <AlbumItem {...otherProps} album={album} />,
      }}
    />
  )
}

TypedGridItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
}

import React, {PropTypes} from 'react'

import './styles.css'

import AlbumListItem from './Item'

export default function AlbumList (props) {
  const {albums} = props

  return (
    <div className='AlbumList'>
      {albums.map((album, index) => (
        <AlbumListItem key={index} album={album} />
      ))}
    </div>
  )
}

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
}

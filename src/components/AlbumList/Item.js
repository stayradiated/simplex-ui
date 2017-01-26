import React, {PropTypes} from 'react'

import './Item.css'

import BlurImage from '../BlurImage'
import TrackList from '../TrackList'

export default function AlbumListItem (props) {
  const {album} = props

  return (
    <div className='AlbumListItem'>
      <div className='AlbumListItem-header'>
        <BlurImage src={album.thumb} />
        <div className='AlbumListItem-title'>{album.title}</div>
      </div>
      <TrackList tracks={album.tracks} />
    </div>
  )
}

AlbumListItem.propTypes = {
  album: PropTypes.shape({}).isRequired,
}

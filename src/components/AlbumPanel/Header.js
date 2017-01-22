import React, {PropTypes} from 'react'

import SquareImage from '../SquareImage'

export default function AlbumPanelHeader (props) {
  const {album} = props

  return (
    <div className='AlbumPanelHeader'>
      <SquareImage
        className='AlbumPanelHeader-image'
        src={album.thumb}
        alt={album.title}
        size={200}
      />
      <div className='AlbumPanelHeader-text'>
        <div className='AlbumPanelHeader-title'>{album.title}</div>
        <div className='AlbumPanelHeader-artist'>{album.parentTitle}</div>
        <div className='AlbumPanelHeader-year'>{album.year}</div>
      </div>
    </div>
  )
}

AlbumPanelHeader.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string,
    parentTitle: PropTypes.string,
    year: PropTypes.number,
  }),
}

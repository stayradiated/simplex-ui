import React, {PropTypes} from 'react'

import BlurImage from '../BlurImage'
import SquareImage from '../SquareImage'

export default function AlbumPanelHeader (props) {
  const {album} = props

  return (
    <div className='AlbumPanelHeader'>
      <BlurImage src={album.thumb} />
      <SquareImage
        className='AlbumPanelHeader-image'
        src={album.thumb}
        alt={album.title}
        size={150}
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

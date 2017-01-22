import React, {PropTypes} from 'react'

import './styles.css'

import AlbumGrid from '../AlbumGrid'
import GridHeader from '../GridHeader'

export default function Browser (props) {
  const {albums} = props

  return (
    <div className='Browser'>
      <GridHeader
        sections={['Playlists', 'Artists', 'Albums', 'Tracks']}
        currentSection='Albums'
      />
      <div className='Browser-grid'>
        <AlbumGrid size={200} items={albums} />
      </div>
    </div>
  )
}

Browser.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
}

import React, {PropTypes} from 'react'
import withState from 'recompose/withState'

import './styles.css'

import AlbumGrid from '../AlbumGrid'
import AlbumPanel from '../AlbumPanel'
import GridHeader from '../GridHeader'

function Browser (props) {
  const {album, albums, setAlbum} = props

  return (
    <div className='Browser'>
      <div className='Browser-grid'>
        <GridHeader
          sections={['Playlists', 'Artists', 'Albums', 'Tracks']}
          currentSection='Albums'
        />
        <div className='Browser-grid-wrapper'>
          <AlbumGrid size={150} items={albums} onChange={setAlbum} />
        </div>
      </div>
      {album &&
        <AlbumPanel className='Browser-selected-panel' album={album} />}
    </div>
  )
}

Browser.propTypes = {
  album: PropTypes.shape({}),
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
  setAlbum: PropTypes.func.isRequired,
}

export default withState('album', 'setAlbum', null)(Browser)

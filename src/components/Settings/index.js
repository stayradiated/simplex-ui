import React, {PropTypes} from 'react'

import './styles.css'

import ServerList from '../ServerList'
import LibraryList from '../LibraryList'

export default function Settings (props) {
  const {
    servers, selectedServerId, onSelectServer,
    libraries, selectedLibraryId, onSelectLibrary,
  } = props

  return (
    <div className='Settings'>
      <div className='Settings-contents'>
        <h1>Settings</h1>

        <h2 className='Settings-sectionHeader'>Server</h2>
        <ServerList
          servers={servers}
          selectedId={selectedServerId}
          onChange={onSelectServer}
        />

        <h2 className='Settings-sectionHeader'>Library</h2>
        <LibraryList
          libraries={libraries}
          selectedId={selectedLibraryId}
          onChange={onSelectLibrary}
        />
      </div>
    </div>
  )
}

Settings.propTypes = {
  servers: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedServerId: PropTypes.string,
  onSelectServer: PropTypes.func,
  libraries: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedLibraryId: PropTypes.string,
  onSelectLibrary: PropTypes.func,
}

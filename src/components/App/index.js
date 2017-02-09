import React, {PropTypes} from 'react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'

import './styles.css'

import {SEARCH} from '../NavBar'
import Browser from '../Browser'
import Queue from '../Queue'
import Controls from '../Controls'

function App (props) {
  const {
    albums, artists, playlists, search,
    item, section, onChangeItem, onChangeSection,
    displayQueue, setDisplayQueue,
    track, onChangeTrack,
    queue,
  } = props

  return (
    <div className='App'>
      <div className='App-main'>
        <div className='App-browser'>
          <Browser
            item={item}
            section={section}
            sections={{
              [SEARCH]: search,
              Albums: albums,
              Artists: artists,
              Playlists: playlists,
            }}
            onChangeItem={onChangeItem}
            onChangeSection={onChangeSection}
            onChangeTrack={onChangeTrack}
          />
        </div>
        {displayQueue &&
          <div className='App-queue'>
            <Queue
              tracks={queue}
              selectedIndex={5}
            />
          </div>}
      </div>
      {track &&
        <Controls
          track={track}
          audio={{
            currentTime: 1000 * 60 * 2,
            buffered: 1000 * 60 * 3,
            duration: 1000 * 60 * 4,
          }}
          onQueue={() => setDisplayQueue(!displayQueue)}
        />}
    </div>
  )
}

App.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
  artists: PropTypes.arrayOf(PropTypes.object).isRequired,
  playlists: PropTypes.arrayOf(PropTypes.object).isRequired,
  search: PropTypes.arrayOf(PropTypes.object).isRequired,

  section: PropTypes.string,
  item: PropTypes.shape({}),
  onChangeItem: PropTypes.func,
  onChangeSection: PropTypes.func,

  track: PropTypes.shape({}),
  onChangeTrack: PropTypes.func,

  queue: PropTypes.arrayOf(PropTypes.object),
  displayQueue: PropTypes.bool,
  setDisplayQueue: PropTypes.func,
}

export default compose(
  withState('section', 'onChangeSection', 'Albums'),
  withState('item', 'onChangeItem', null),
  withState('track', 'onChangeTrack', null),
  withState('displayQueue', 'setDisplayQueue', false),
)(App)

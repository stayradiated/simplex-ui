import React, {PropTypes} from 'react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'

import './styles.css'

import Browser from '../Browser'
import Queue from '../Queue'
import Controls from '../Controls'

function App (props) {
  const {
    albums, item, section, onChangeItem, onChangeSection,
    displayQueue, setDisplayQueue,
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
              Albums: albums,
            }}
            onChangeItem={onChangeItem}
            onChangeSection={onChangeSection}
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
      <Controls
        track={queue[5]}
        audio={{
          currentTime: 1000 * 60 * 2,
          buffered: 1000 * 60 * 3,
          duration: 1000 * 60 * 4,
        }}
        onQueue={() => setDisplayQueue(!displayQueue)}
      />
    </div>
  )
}

App.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
  section: PropTypes.string,
  item: PropTypes.shape({}),
  onChangeItem: PropTypes.func,
  onChangeSection: PropTypes.func,

  queue: PropTypes.arrayOf(PropTypes.object),
  displayQueue: PropTypes.bool,
  setDisplayQueue: PropTypes.func,
}

export default compose(
  withState('section', 'onChangeSection', 'Albums'),
  withState('item', 'onChangeItem', null),
  withState('displayQueue', 'setDisplayQueue', false),
)(App)

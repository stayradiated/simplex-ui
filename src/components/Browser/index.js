import React, {PropTypes} from 'react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'

import './styles.css'

import TypedGrid from '../TypedGrid'
import TypedPanel from '../TypedPanel'
import GridHeader from '../GridHeader'

function Browser (props) {
  const {sections, item, setItem, section, setSection} = props

  const items = sections[section]

  return (
    <div className='Browser'>
      <div className='Browser-grid'>
        <GridHeader
          sections={Object.keys(sections)}
          currentSection={section}
          onChange={setSection}
        />
        <div className='Browser-grid-wrapper'>
          <TypedGrid size={150} items={items} onChange={setItem} />
        </div>
      </div>
      {item &&
        <TypedPanel
          className='Browser-selected-panel'
          item={item}
          onClose={() => setItem(null)}
        />}
    </div>
  )
}

Browser.propTypes = {
  sections: PropTypes.objectOf(PropTypes.array).isRequired,
  item: PropTypes.shape({}),
  setItem: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
  setSection: PropTypes.func.isRequired,
}

export default compose(
  withState('item', 'setItem', null),
  withState('section', 'setSection', 'Albums'),
)(Browser)

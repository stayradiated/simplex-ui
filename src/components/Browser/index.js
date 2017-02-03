import React, {PropTypes} from 'react'

import './styles.css'

import TypedGrid from '../TypedGrid'
import TypedPanel from '../TypedPanel'
import NavBar from '../NavBar'

export default function Browser (props) {
  const {
    sections,
    item, onChangeItem,
    section, onChangeSection,
  } = props

  const items = sections[section]

  return (
    <div className='Browser'>
      <div className='Browser-grid'>
        <NavBar
          sections={Object.keys(sections)}
          currentSection={section}
          onChange={onChangeSection}
        />
        <div className='Browser-grid-wrapper'>
          <TypedGrid
            size={150}
            items={items}
            onChange={onChangeItem}
          />
        </div>
      </div>
      {item &&
        <TypedPanel
          className='Browser-selected-panel'
          item={item}
          onClose={() => onChangeItem && onChangeItem(null)}
        />}
    </div>
  )
}

Browser.propTypes = {
  sections: PropTypes.objectOf(PropTypes.array).isRequired,
  item: PropTypes.shape({}),
  onChangeItem: PropTypes.func,
  section: PropTypes.string.isRequired,
  onChangeSection: PropTypes.func,
}

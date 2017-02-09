import React, {PropTypes} from 'react'
import classNames from 'classnames'
import noop from 'nop'
import compose from 'recompose/compose'
import defaultProps from 'recompose/defaultProps'
import setPropTypes from 'recompose/setPropTypes'
import withHandlers from 'recompose/withHandlers'

import './styles.css'

import TypedGrid from '../TypedGrid'
import TypedPanel from '../TypedPanel'
import NavBar, {SEARCH} from '../NavBar'
import SearchResults from '../SearchResults'

function Browser (props) {
  const {
    className, sections,
    item, handleChangeItem,
    section, onChangeSection,
    searchQuery, onChangeSearchQuery,
  } = props

  const items = sections[section]

  let contents
  switch (section) {
    case SEARCH:
      contents = (
        <SearchResults
          query={searchQuery}
          hubs={items}
          onChange={handleChangeItem}
        />
      )
      break
    default:
      contents = (
        <TypedGrid
          size={150}
          items={items}
          onChange={handleChangeItem}
        />
      )
  }

  return (
    <div className={classNames(className, 'Browser')}>
      <div className='Browser-grid'>
        <NavBar
          sections={Object.keys(sections)}
          currentSection={section}
          searchQuery={searchQuery}
          onChangeSection={onChangeSection}
          onChangeSearchQuery={onChangeSearchQuery}
        />
        <div className='Browser-grid-wrapper'>
          {contents}
        </div>
      </div>
      {item &&
        <TypedPanel
          className='Browser-selected-panel'
          item={item}
          onSelectTrack={handleChangeItem}
          onClose={() => handleChangeItem(null)}
        />}
    </div>
  )
}

Browser.propTypes = {
  className: PropTypes.string,
  sections: PropTypes.objectOf(PropTypes.array),
  item: PropTypes.shape({}),
  section: PropTypes.string.isRequired,
  searchQuery: PropTypes.string,
  onChangeSection: PropTypes.func,
  onChangeSearchQuery: PropTypes.func,
  handleChangeItem: PropTypes.func,
}

Browser.defaultProps = {
  sections: {},
  onChangeSection: noop,
  onChangeSearchQuery: noop,
}

export default compose(
  setPropTypes({
    onChangeTrack: PropTypes.func,
    onChangeItem: PropTypes.func,
  }),
  defaultProps({
    onChangeTrack: noop,
    onChangeItem: noop,
  }),
  withHandlers({
    handleChangeItem: (props) => (item) => {
      if (item != null && item._type === 'track') {
        return props.onChangeTrack(item)
      }
      return props.onChangeItem(item)
    },
  }),
)(Browser)

import React, {PropTypes} from 'react'

import QueueItem from './Item'
import SortableItemsList from '../SortableList'

export default function Queue (props) {
  const {selectedIndex, tracks, onChange, onSort} = props

  const items = tracks.map((track, index) => (
    <QueueItem
      key={index}
      index={index}
      track={track}
      isSelected={selectedIndex === index}
      onClick={() => onChange && onChange(track, index)}
    />
  ))

  return (
    <SortableItemsList
      items={items}
      itemHeight={60}
      rowHeight={60}
      onSortEnd={onSort}
      useDragHandle
      lockAxis='y'
      helperClass='QueueItem-helper'
    />
  )
}

Queue.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedIndex: PropTypes.number,
  onChange: PropTypes.func,
  onSort: PropTypes.func,
}

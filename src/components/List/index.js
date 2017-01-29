import React, {PropTypes, cloneElement} from 'react'
import {AutoSizer, List} from 'react-virtualized'

export default function ItemsList (props) {
  const {items} = props

  const renderItem = ({index, style}) => {
    const item = items[index]
    return cloneElement(item, {
      key: index,
      style,
    })
  }

  return (
    <AutoSizer>
      {({height, width}) => (
        <List
          width={width}
          height={height}
          rowCount={items.length}
          rowHeight={40}
          rowRenderer={renderItem}
          style={{
            overflowX: 'hidden',
          }}
        />
      )}
    </AutoSizer>
  )
}

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
}

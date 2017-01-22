import React, {Component, PropTypes} from 'react'
import {InfiniteLoader, List} from 'react-virtualized'
import classNames from 'classnames'

import './styles.css'

import Row from './Row'

const SCROLLBAR = 15

export default class Grid extends Component {
  static propTypes = {
    className: PropTypes.string,

    items: PropTypes.arrayOf(PropTypes.any).isRequired,
    total: PropTypes.number,

    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    itemHeight: PropTypes.number.isRequired,
    itemWidth: PropTypes.number.isRequired,

    children: PropTypes.func.isRequired,
    onLoad: PropTypes.func,
  }

  constructor () {
    super()
    this.handleLoadMoreRows = this.handleLoadMoreRows.bind(this)
  }

  calcItemsPerRow () {
    const {width, itemWidth} = this.props
    return Math.floor((width - SCROLLBAR) / itemWidth)
  }

  calcRows (itemsPerRow) {
    const {items} = this.props

    if (itemsPerRow === 0) {
      return []
    }

    return items.reduce((rows, item, index) => {
      if (index % itemsPerRow === 0) {
        rows.push([])
      }
      rows[rows.length - 1].push(item)
      return rows
    }, [])
  }

  calcRowOffset () {
    const {width, itemWidth} = this.props
    return ((width - SCROLLBAR) % itemWidth) / 2
  }

  calcTotal () {
    const {items, total} = this.props
    return total != null ? total : items.length
  }

  handleLoadMoreRows ({startIndex, stopIndex}) {
    const {onLoad} = this.props
    const itemsPerRow = this.calcItemsPerRow()
    return onLoad(startIndex * itemsPerRow, (stopIndex + 1) * itemsPerRow)
  }

  render () {
    const {
      width, height, className, itemHeight, itemWidth, children,
    } = this.props

    const total = this.calcTotal()

    const itemsPerRow = this.calcItemsPerRow()
    const rowOffset = this.calcRowOffset()
    const rows = this.calcRows(itemsPerRow)
    const rowCount = Math.ceil(total / itemsPerRow)

    const isRowLoaded = ({index}) => {
      const row = rows[index]
      if (row == null) {
        return false
      }
      return row.every((item) => item != null)
    }

    const rowRenderer = ({index, key, style}) => {
      const row = rows[index]

      if (row == null) {
        return <div key={key} style={style} />
      }

      return (
        <Row
          key={key}
          style={style}
          rowOffset={rowOffset}
          itemWidth={itemWidth}
          items={row.filter((item) => item != null)}
          renderItem={children}
        />
      )
    }

    return (
      <div className={classNames(className, 'Grid')}>
        <InfiniteLoader
          isRowLoaded={isRowLoaded}
          loadMoreRows={this.handleLoadMoreRows}
          rowCount={rowCount}
        >
          {({onRowsRendered, registerChild}) => (
            <List
              width={width}
              height={height}
              onRowsRendered={onRowsRendered}
              ref={(el) => {
                this.list = el
                registerChild(el)
              }}
              rowCount={rowCount}
              rowHeight={itemHeight}
              rowRenderer={rowRenderer}
              style={{
                overflowX: 'hidden',
              }}
            />
          )}
        </InfiniteLoader>
      </div>
    )
  }
}

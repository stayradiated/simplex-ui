import React from 'react'
import {AutoSizer} from 'react-virtualized'

import Grid from './index'

export default function AutoSizeGrid (props) {
  return (
    <AutoSizer>
      {({height, width}) => (
        <Grid
          {...props}
          height={height}
          width={width}
        />
      )}
    </AutoSizer>
  )
}

import React, {PropTypes} from 'react'

import TypedGridItem from '../TypedGridItem'
import Grid from '../Grid/AutoSize'
import withState from '../Grid/withState'
import withRouter from '../Grid/withRouter'

export default function TypedGrid (props) {
  const {size, onChange, ...otherProps} = props

  return (
    <Grid {...otherProps} itemHeight={size + 60} itemWidth={size}>
      {(item) => (
        <TypedGridItem
          size={size - 10}
          item={item}
          onSelect={() => onChange && onChange(item)}
        />
      )}
    </Grid>
  )
}

TypedGrid.propTypes = {
  size: PropTypes.number.isRequired,
  onChange: PropTypes.func,
}

TypedGrid.withState = withState(TypedGrid)
TypedGrid.withRouter = withRouter(TypedGrid)

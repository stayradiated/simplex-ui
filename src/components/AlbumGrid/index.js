import React, {PropTypes} from 'react'

import AlbumItem from '../AlbumItem'
import Grid from '../Grid/AutoSize'
import withState from '../Grid/withState'
import withRouter from '../Grid/withRouter'

export default function AlbumGrid (props) {
  const {size, ...otherProps} = props

  return (
    <Grid {...otherProps} itemHeight={size + 60} itemWidth={size}>
      {(album) => (
        <AlbumItem size={size - 10} album={album} />
      )}
    </Grid>
  )
}

AlbumGrid.propTypes = {
  size: PropTypes.number.isRequired,
}

AlbumGrid.withState = withState(AlbumGrid)
AlbumGrid.withRouter = withRouter(AlbumGrid)

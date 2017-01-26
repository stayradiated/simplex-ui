import React, {PropTypes} from 'react'

import ArtistItem from '../ArtistItem'
import Grid from '../Grid/AutoSize'
import withState from '../Grid/withState'
import withRouter from '../Grid/withRouter'

export default function ArtistGrid (props) {
  const {size, onChange, ...otherProps} = props

  return (
    <Grid {...otherProps} itemHeight={size + 60} itemWidth={size}>
      {(artist) => (
        <ArtistItem
          size={size - 10}
          artist={artist}
          onSelect={() => onChange && onChange(artist)}
        />
      )}
    </Grid>
  )
}

ArtistGrid.propTypes = {
  size: PropTypes.number.isRequired,
  onChange: PropTypes.func,
}

ArtistGrid.withState = withState(ArtistGrid)
ArtistGrid.withRouter = withRouter(ArtistGrid)

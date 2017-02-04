import React, {PropTypes} from 'react'

export default function Controls (props) {
  const {track} = props

  return (
    <div className='Controls'>
      <div className='Controls-title'>
        {track.title}
      </div>
    </div>
  )
}

Controls.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
}

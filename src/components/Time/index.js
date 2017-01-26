import React, {PropTypes} from 'react'
import moment from 'moment'
import 'moment-duration-format'

export default function Time (props) {
  const {value, format, ...otherProps} = props

  return (
    <span {...otherProps}>
      {moment.duration(value, 'ms').format(format)}
    </span>
  )
}

Time.propTypes = {
  format: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

Time.defaultProps = {
  format: 'm:ss',
}

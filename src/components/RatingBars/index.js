import React, {PropTypes} from 'react'
import classNames from 'classnames'

import './styles.css'

export default function RatingBars (props) {
  const {className, value, maxValue} = props

  const bars = []

  const width = `calc(${100 / maxValue}% - 1px)`

  for (let i = 0; i < maxValue; i += 1) {
    bars.push(
      <div
        key={i}
        style={{width}}
        className={classNames('RatingBars-bar', {
          'RatingBars-bar-active': i < value,
        })}
      />
    )
  }

  return (
    <div className={classNames(className, 'RatingBars')}>
      {bars}
    </div>
  )
}

RatingBars.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  maxValue: PropTypes.number,
}

RatingBars.defaultProps = {
  value: 0,
  maxValue: 5,
}

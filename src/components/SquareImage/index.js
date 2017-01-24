import React, {PropTypes} from 'react'
import classNames from 'classnames'

import './styles.css'

export default function SquareImage (props) {
  const {className, src} = props

  return (
    <div className={classNames(className, 'SquareImage')}>
      <div
        className='SquareImage-container'
        style={{
          backgroundImage: `url(${src})`,
        }}
      />
    </div>
  )
}

SquareImage.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number.isRequired,
  src: PropTypes.string,
}

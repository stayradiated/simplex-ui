import React, {PropTypes} from 'react'
import classNames from 'classnames'

import './styles.css'

export default function SquareImage (props) {
  const {className, src, size, alt} = props

  return (
    <div className={classNames(className, 'SquareImage')}>
      <div className='SquareImage-container'>
        <img
          alt={alt}
          className='SquareImage-image'
          src={src}
          width={size}
          height={size}
        />
      </div>
    </div>
  )
}

SquareImage.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.number.isRequired,
  src: PropTypes.string,
}

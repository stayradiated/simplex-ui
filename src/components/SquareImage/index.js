import React, {PropTypes} from 'react'
import classNames from 'classnames'

import './styles.css'

export default function SquareImage (props) {
  const {imageClassName, className, src} = props

  return (
    <div className={classNames(className, 'SquareImage')}>
      <div
        className={classNames(imageClassName, 'SquareImage-container')}
        style={{
          backgroundImage: `url(${src})`,
        }}
      />
    </div>
  )
}

SquareImage.propTypes = {
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  src: PropTypes.string,
}

import React, {PropTypes} from 'react'

// styles
import './styles.css'

export default function BlurImage (props) {
  const {src} = props

  return (
    <div className='BlurImage'>
      <div className='BlurImage-blur'>
        <div
          className='BlurImage-image'
          style={{backgroundImage: `url(${src})`}}
        />
      </div>
      <div className='BlurImage-shadow' />
    </div>
  )
}

BlurImage.propTypes = {
  src: PropTypes.string,
}

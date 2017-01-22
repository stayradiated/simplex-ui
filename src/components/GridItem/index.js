import React, {PropTypes} from 'react'

import './styles.css'

import SquareImage from '../SquareImage'

export default function GridItem (props) {
  const {id, onSelect, image, title, subtitle, size, ...otherProps} = props

  return (
    <button
      {...otherProps}
      className='GridItem'
      onClick={() => onSelect && onSelect(id)}
    >
      <SquareImage
        className='GridItem-image'
        src={image}
        alt={title}
        size={size}
      />
      <div className='GridItem-text'>
        <h2 className='GridItem-title'>{title}</h2>
        <h3 className='GridItem-subtitle'>{subtitle}</h3>
      </div>
    </button>
  )
}

GridItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  onSelect: PropTypes.func,
}

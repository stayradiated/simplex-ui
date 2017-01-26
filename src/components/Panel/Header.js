import React, {PropTypes} from 'react'

import './Header.css'

import BlurImage from '../BlurImage'
import SquareImage from '../SquareImage'

export default function PanelHeader (props) {
  const {thumb, title, subtitle, meta} = props

  return (
    <div className='PanelHeader'>
      <BlurImage src={thumb} />
      <SquareImage
        className='PanelHeader-image'
        src={thumb}
        alt={title}
        size={150}
      />
      <div className='PanelHeader-text'>
        <div className='PanelHeader-title'>{title}</div>
        <div className='PanelHeader-subtitle'>{subtitle}</div>
        <div className='PanelHeader-meta'>{meta}</div>
      </div>
    </div>
  )
}

PanelHeader.propTypes = {
  thumb: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta: PropTypes.string,
}

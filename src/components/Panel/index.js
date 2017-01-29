import React, {PropTypes} from 'react'
import classNames from 'classnames'

import './styles.css'

import PanelHeader from './Header'

export default function Panel (props) {
  const {details, children, className, onClose} = props

  return (
    <div className={classNames(className, 'Panel')}>
      <PanelHeader {...details} onClose={onClose} />
      <div className='Panel-content'>
        {children}
      </div>
    </div>
  )
}

Panel.propTypes = {
  children: PropTypes.node,
  details: PropTypes.shape({
    thumb: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    meta: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func,
}

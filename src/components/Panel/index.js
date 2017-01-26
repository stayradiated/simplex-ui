import React, {PropTypes} from 'react'
import classNames from 'classnames'

import './styles.css'

export default function Panel (props) {
  const {header, children, className} = props

  return (
    <div className={classNames(className, 'Panel')}>
      {header}
      <div className='Panel-content'>
        {children}
      </div>
    </div>
  )
}

Panel.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  className: PropTypes.string,
}

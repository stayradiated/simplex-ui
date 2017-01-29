import React, {PropTypes} from 'react'
import classNames from 'classnames'

import './styles.css'

import Icon from '../Icon'

export default function GridHeader (props) {
  const {sections, currentSection, onChange} = props

  return (
    <header className='GridHeader'>
      <nav className='GridHeader-section-list'>
        {sections.map((section, key) => (
          <button
            key={key}
            className={classNames({
              'GridHeader-section-item': true,
              'GridHeader-section-item-selected': section === currentSection,
            })}
            onClick={() => onChange && onChange(section)}
          >
            {section}
          </button>
        ))}
      </nav>
      <button className='GridHeader-dropdown-button'>
        Sort:
        <span className='GridHeader-dropdown-label'>
          Date Added
        </span>
        <Icon icon='down-dir GridHeader-dropdown-icon' />
      </button>
    </header>
  )
}

GridHeader.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSection: PropTypes.string,
  onChange: PropTypes.func,
}

import React, {PropTypes} from 'react'
import classNames from 'classnames'

import './styles.css'

import Icon from '../Icon'

export default function NavBar (props) {
  const {sections, currentSection, onChange} = props

  return (
    <header className='NavBar'>
      <nav className='NavBar-section-list'>
        <button
          Search
          className={classNames({
            'NavBar-section-item': true,
            'NavBar-section-item-selected': currentSection === 'Search',
          })}
          onClick={() => onChange && onChange('Search')}
        >
          <Icon icon='search' />
        </button>
        {sections.map((section, key) => (
          <button
            key={key}
            className={classNames({
              'NavBar-section-item': true,
              'NavBar-section-item-selected': section === currentSection,
            })}
            onClick={() => onChange && onChange(section)}
          >
            {section}
          </button>
        ))}
      </nav>
      <button className='NavBar-dropdown-button'>
        <span className='NavBar-dropdown-label'>
          Date Added
        </span>
        <Icon icon='down-dir' className='NavBar-dropdown-icon' />
      </button>
    </header>
  )
}

NavBar.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSection: PropTypes.string,
  onChange: PropTypes.func,
}

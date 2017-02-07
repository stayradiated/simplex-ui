import React, {PropTypes} from 'react'
import classNames from 'classnames'

import './styles.css'

import Icon from '../Icon'
import SearchBar from '../SearchBar'

export default function NavBar (props) {
  const {sections, currentSection, onChange} = props

  return (
    <header className='NavBar'>
      <nav className='NavBar-section-list'>
        <SearchBar
          className={classNames({
            'NavBar-section-item': true,
            'NavBar-section-item-selected': currentSection === 'Search',
          })}
          onClick={() => onChange && onChange('Search')}
        />
        {sections.map((section, key) => (
          <button
            key={key}
            className={classNames({
              'NavBar-section-item': true,
              'NavBar-section-item-selected': section === currentSection,
            })}
            onMouseDown={() => onChange && onChange(section)}
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

import React, {PropTypes} from 'react'

import './styles.css'

import LibraryListItem from './Item'

export default function LibraryList (props) {
  const {libraries, selectedId, onChange} = props

  return (
    <div className='LibraryList'>
      {libraries.map((library, index) => (
        <LibraryListItem
          key={index}
          library={library}
          selected={library.id === selectedId}
          onSelect={() => onChange && onChange(library.id)}
        />
      ))}
    </div>
  )
}

LibraryList.propTypes = {
  libraries: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedId: PropTypes.string,
  onChange: PropTypes.func,
}

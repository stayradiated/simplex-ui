import React, {PropTypes} from 'react'
import classNames from 'classnames'

import './Item.css'

import Icon from '../Icon'

const LIBRARY_ICON = {
  movie: 'video',
  artist: 'music',
  photo: 'picture',
  show: 'television',
}

export default function LibraryListItem (props) {
  const {library, selected, onSelect} = props

  const icon = LIBRARY_ICON[library.type]

  return (
    <button
      className={classNames('LibraryListItem', {
        'LibraryListItem-selected': selected,
      })}
      onClick={onSelect}
    >
      <h1 className='LibraryListItem-title'>{library.title}</h1>
      <Icon icon='ok' className='LibraryListItem-icon-ok LibraryListItem-icon' />
      <Icon icon={icon} className='LibraryListItem-icon-type LibraryListItem-icon' />
    </button>
  )
}

LibraryListItem.propTypes = {
  selected: PropTypes.bool,
  library: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func,
}

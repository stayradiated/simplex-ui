import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

import './styles.css'

import Icon from '../Icon'

export default class SearchBar extends Component {
  constructor () {
    super()

    this.state = {
      displayInput: false,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleClick (event) {
    const {onClick} = this.props
    this.setState({displayInput: true})
    this.input.focus()
    return onClick && onClick(event)
  }

  handleBlur (event) {
    event.stopPropagation()
    this.setState({displayInput: false})
    return true
  }

  render () {
    const {className} = this.props
    const {displayInput} = this.state

    return (
      <button
        className={classNames(className, 'SearchBar')}
        onClick={this.handleClick}
      >
        <Icon className='SearchBar-icon' icon='search' />
        <div
          className={classNames('SearchBar-inputWrapper', {
            'SearchBar-inputWrapper_closed': !displayInput,
          })}
        >
          <input
            ref={(el) => { this.input = el }}
            className='SearchBar-input'
            placeholder='Search...'
            onBlur={this.handleBlur}
          />
        </div>
      </button>
    )
  }
}

SearchBar.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

import React, {Component, PropTypes} from 'react'
import FloatingLabel from
'@stayradiated/react-floating-label'
// import '@stayradiated/react-floating-label/lib/styles.css'

import './styles.css'

import logo from '../../../logo.png'

export default class LoginForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func,
  }

  constructor () {
    super()

    this.state = {
      username: '',
      password: '',
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleFormSubmit (event) {
    event.preventDefault()
    const {onSubmit} = this.props
    if (onSubmit) {
      onSubmit(this.state)
    }
  }

  handleUsernameChange (event) {
    const value = event.target.value
    this.setState({username: value})
  }

  handlePasswordChange (event) {
    const value = event.target.value
    this.setState({password: value})
  }

  render () {
    return (
      <div className='LoginForm'>
        <form
          className='LoginForm-form'
          onSubmit={this.handleFormSubmit}
        >
          <img
            alt='Simplex'
            className='LoginForm-logo'
            src={logo}
          />
          <FloatingLabel
            placeholder='Username'
            type='text'
            id='LoginForm-username'
            onChange={this.handleUsernameChange}
          />
          <FloatingLabel
            placeholder='Password'
            type='password'
            id='LoginForm-password'
            onChange={this.handlePasswordChange}
          />
          <button type='submit'>Log In</button>
        </form>
      </div>
    )
  }
}

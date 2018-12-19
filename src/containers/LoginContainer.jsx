import React, { PureComponent } from 'react'
import { login, } from '../store/reducers/auth/actions'
import { Redirect, } from 'react-router-dom'
import { connect, } from 'react-redux'

class LoginContainer extends PureComponent {
  constructor() {
    try {
      super()
    } catch (error) {
      console.error(`LoginContainer ${error.message}`)
    }
  }
  doClick = credentials => {
    this.props.login({ 
      username: credentials.email, 
      password: credentials.password
    })
  }
  componentDidUpdate () {
    const { auth } = this.props
    if (auth.error) {
      alert('creds invalidas')
    }
  }
  render () {
    const { auth } = this.props

    if (auth.isLoggedIn && auth.token != null) {
      return (
        <Redirect to={'/Dashboard'}/>
      )
    }

    const wrapper = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        ...this.props,
        login: this.doClick
      })
    })
    return wrapper
  }
}
  
export default connect( ({ auth }) => {
  return { auth }
}, (dispath) => {
  return {
    login: payload => dispath(login(payload))
  }
})(LoginContainer)

 
import React, { PureComponent } from 'react'
import { connect, } from 'react-redux'
import { Redirect, } from 'react-router-dom'
import { logout } from '../store/reducers/auth/actions'

class DashboardContainer extends PureComponent {
  logout = () => {
    this.props.logout(null)
  }
  render () {
    const { token } = this.props

    if (!token) return <Redirect to={'/'}/>

    const wrapper = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        ...this.props,
        logout: this.logout,
        account: this.props.user,
      })
    })
    return wrapper
  }
}

export default connect(({ auth:{token, user} }) => {
  return { token, user }
}, dispath => {
  return {
    logout: token => dispath(logout(token))
  }
})(DashboardContainer)
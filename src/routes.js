import React from 'react'
import { Route, Switch } from 'react-router'
import Login from './pages/login'
import Dashboard from './pages/dashboard'

function Routes () {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route render={() => (<h1>not found</h1>)} />
    </Switch>
  )
}

export default Routes
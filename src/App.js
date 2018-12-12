import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import instanceStore from './store'
import Routes from './routes'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Provider store={instanceStore.store}>
          <ConnectedRouter history={instanceStore.history}>
            <Routes />
          </ConnectedRouter>
        </Provider>
      </div>
    )
  }
}

export default App

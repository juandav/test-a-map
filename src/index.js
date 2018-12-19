import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import instanceStore from './store'
import Routes from './routes'
import './styless.css'

ReactDOM.render(
  <Provider store={instanceStore.store}>
    <PersistGate loading={null} persistor={instanceStore.persistor}>
      <ConnectedRouter history={instanceStore.history}>
        <Routes />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
, document.getElementById('root'))
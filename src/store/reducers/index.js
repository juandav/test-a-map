import { combineReducers  } from 'redux'
import { combineEpics } from 'redux-observable'
import { connectRouter } from 'connected-react-router'

import { loginEpics } from './auth/epics'
import auth from './auth/reducer'

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth,
})

export const createRootEpic = () => combineEpics(
  loginEpics,
)
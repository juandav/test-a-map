import { combineReducers  } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { combineEpics } from 'redux-observable'
import { connectRouter } from 'connected-react-router'


import { authEpics } from './auth/epics'
import { racesEpics } from './races/epics'
import auth from './auth/reducer'
import races from './races/reducer'

export const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  auth,
  races,
  form: formReducer
})

export const createRootEpic = () => combineEpics(
  authEpics,
  racesEpics,
)
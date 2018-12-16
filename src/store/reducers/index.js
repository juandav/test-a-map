import { combineReducers  } from 'redux'
import { combineEpics } from 'redux-observable'
import { connectRouter } from 'connected-react-router'

import { loginEpics } from './auth/epics'
import { fetchRacesEpic } from './races/epics'
import auth from './auth/reducer'
import races from './races/reducer'

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth,
  races,
})

export const createRootEpic = () => combineEpics(
  loginEpics,
  fetchRacesEpic,
)
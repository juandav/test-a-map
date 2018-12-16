import { handleActions } from 'redux-actions'
import {
  FETCH_RACES,
  FETCH_RACES_FINISHED,
  ERROR,
} from './actionTypes'
import INITIAL_STATE from './initialState'

export default handleActions({
  [FETCH_RACES]: startFetchRaces,
  [FETCH_RACES_FINISHED]: finishFetchRaces,
  [ERROR]: errorRaces,
}, INITIAL_STATE)

function startFetchRaces (state) {
  return {
    ...state,
    loading: true,
    error: false,
  }
}

function finishFetchRaces (state, action) {
  return {
    ...state,
    races: action.payload,
    loading: false
  }
}

function errorRaces (state) {
  return {
    ...state,
    error: true,
  }
}
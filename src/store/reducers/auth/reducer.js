import { handleActions } from 'redux-actions'
import {
  LOGIN,
  LOGIN_FINISHED,
  LOGIN_ERROR
} from './actionTypes'
import INITIAL_STATE from './initialState'

export default handleActions({
  [LOGIN]: startLogin,
  [LOGIN_FINISHED]: finishLogin,
  [LOGIN_ERROR]: errorLogin,
}, INITIAL_STATE)

function startLogin (state) {
  return {
    ...state,
    loading: true,
    isLoggedIn: false,
    error: false,
  }
}

function finishLogin (state) {
  return {
    ...state,
    loading: false,
    isLoggedIn: true,
  }
}

function errorLogin (state) {
  return {
    ...state,
    loading: false,
    isLoggedIn: false,
    error: true,
  }
}
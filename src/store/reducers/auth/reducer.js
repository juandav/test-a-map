import { handleActions } from 'redux-actions'
import {
  LOGIN,
  LOGIN_FINISHED
} from './actionTypes'
import INITIAL_STATE from './initialState'

export default handleActions({
  [LOGIN]: startLogin,
  [LOGIN_FINISHED]: finishLogin,
}, INITIAL_STATE)

function startLogin (state) {
  return {
    ...state,
    loading: true,
    isLoggedIn: false,
  }
}

function finishLogin (state) {
  return {
    ...state,
    loading: false,
    isLoggedIn: true,
  }
}
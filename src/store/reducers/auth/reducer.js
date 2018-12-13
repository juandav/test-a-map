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
  }
}

function finishLogin (state, action) {
  let error = false
  if (action.error) {
    error = action.payload.data
  }
  return {
    ...state,
    error,
    loading: false,
    isLoggedIn: true,
  }
}
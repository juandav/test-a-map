import { handleActions } from 'redux-actions'
import  jwt from 'jsonwebtoken'
import {
  LOGIN,
  LOGIN_FINISHED,
  LOGIN_ERROR,
  LOGOUT,
} from './actionTypes'
import INITIAL_STATE from './initialState'

export default handleActions({
  [LOGIN]: startLogin,
  [LOGIN_FINISHED]: finishLogin,
  [LOGIN_ERROR]: errorLogin,
  [LOGOUT]: logout,
}, INITIAL_STATE)

function startLogin (state) {
  return {
    ...state,
    loading: true,
    isLoggedIn: false,
    error: false,
  }
}

function finishLogin (state, { payload }) {
  return {
    ...state,
    loading: false,
    isLoggedIn: true,
    token: jwt.sign(payload[0], 'notBrowser'),
    user: {
      name: payload[0]['name']
    }
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

function logout (state, { payload }) {
  return {
    ...state,
    token: payload,
  }
}
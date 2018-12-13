import { createAction } from 'redux-actions'
import { 
  LOGIN,
  LOGIN_FINISHED 
} from './actionTypes'

export const login = createAction(LOGIN, ({ username, password }) => ({ username, password }))
export const loginFinished = createAction(LOGIN_FINISHED)
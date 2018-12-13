import { combineEpics } from 'redux-observable'
import EpicFactory from '../../epicFactory'
import { 
  LOGIN,
  LOGIN_FINISHED 
} from './actionTypes'
import {
  loginFinished
} from '../auth/actions'
import { mergeMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

const loginEpic = EpicFactory.request(LOGIN, 'post', '/auth', loginFinished, _ => {
  return {
    type: 'ERROR',
    err: 'err.login.invalid.credentials'
  }
}, 0)

const loginFinishedEpic = action$ => action$
.pipe(
  ofType(LOGIN_FINISHED),
  mergeMap(action => {
    console.log(action.payload)
  })
)

export const loginEpics = combineEpics(loginEpic, loginFinishedEpic)
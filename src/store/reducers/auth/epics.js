import { combineEpics } from 'redux-observable'
import { 
  LOGIN,
} from './actionTypes'
import {
  loginFinished,
  loginError
} from '../auth/actions'
import { mergeMap, map, } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import { API_URL } from '../../../config'

const fetchUserEpic = action$ => action$.pipe(
  ofType(LOGIN),
  mergeMap( ({ payload }) =>
    ajax.getJSON(`${API_URL}/auth?username=${payload.username}&password=${payload.password}`).pipe(
      map(response => {
        return (response.length > 0)? loginFinished(response) : loginError()
      })
    )
  )
)

export const authEpics = combineEpics(fetchUserEpic)
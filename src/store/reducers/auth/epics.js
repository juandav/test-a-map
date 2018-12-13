import { combineEpics } from 'redux-observable'

import { 
  LOGIN,
} from './actionTypes'
import {
  loginFinished
} from '../auth/actions'
import { mergeMap, map, tap, finalize } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import { API_URL } from '../../../config'

const fetchUserEpic = action$ => action$.pipe(
  ofType(LOGIN),
  mergeMap(_ =>
    ajax.getJSON(`${API_URL}/auth`).pipe(
      map(response => {
        return loginFinished(response)
      })
    )
  )
)

export const loginEpics = combineEpics(fetchUserEpic)
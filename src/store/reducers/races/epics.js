import { combineEpics } from 'redux-observable'
import { 
  FETCH_RACES
} from './actionTypes'
import {
  fetchRacesFinished,
  error,
} from '../races/actions'
import { mergeMap, map, } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import { API_URL } from '../../../config'

const fetchRacesEpics = action$ => action$.pipe(
  ofType(FETCH_RACES),
  mergeMap( ({ payload }) =>
    ajax.getJSON(`${API_URL}/locations/${payload}/populations`).pipe(
      map(response => {
        return (response.length > 0)? fetchRacesFinished(response) : error()
      })
    )
  )
)

export const fetchRacesEpic = combineEpics(fetchRacesEpics)
import { createAction } from 'redux-actions'
import { 
  FETCH_RACES,
  FETCH_RACES_FINISHED,
  ERROR
} from './actionTypes'

export const fetchRaces = createAction(FETCH_RACES)
export const fetchRacesFinished = createAction(FETCH_RACES_FINISHED)
export const error = createAction(ERROR)
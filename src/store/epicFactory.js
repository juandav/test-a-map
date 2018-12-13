import { Observable } from 'rxjs'
import { 
  debounceTime,
  switchMap 
} from 'rxjs/operators'
import { ofType } from 'redux-observable'
import _ from 'lodash'

const API_URL =  process.env.REACT_APP_BACKEND_API || 'http://localhost:3001'

class EpicFactory {
  constructor (API_URL) {
    try {
      this.API_URL = API_URL
      this.ajax = this.ajax.bind(this)
    } catch (error) {
      console.error(`EpicFactory ${error.message}`)
    }
  }
  ajax (method, path, payload) {
    try {
      console.log(method)
      console.log(path)
      console.log(payload)
      const calls = {
        'get': (url, payload) => Observable.ajax.getJSON(`${url}${payload}`),
        'post':(url, payload) => Observable.ajax.post(`${url}`, payload),
        'put': (url, payload) => Observable.ajax.put(`${url}`, payload),
        'delete': (url) => Observable.ajax.delete(`${url}`)
      }
      return calls[method](`${this.API_URL}${path}`, payload)
    } catch (error) {
      console.error(`request ${error.message}`)
    }
  }
  request (type, method, path, success, error, time = 1500) {
    return action$ => action$
    .pipe(
      ofType(type),
      debounceTime(time),
      switchMap(({ payload }) => {
        const shouldIncludePayload = method !== 'get'
        const shouldIncludeId = method === 'put' || method === 'delete' || method === 'get'
        const url = this.API_URL + path

        const request = this.ajax(method,
          shouldIncludeId && _.has(payload, '_id') ? API_URL + path + `/${payload._id}` : url,
          shouldIncludePayload ? payload: '') // ajax call method
        .map(result => {
          
          return success((_.has(result, 'data') ? result.data : result.response || result ))
        }) // sucess
        .catch((e) => Observable.of(error(e))) // error

        return request
      })
    )
  }
}

export default new EpicFactory(API_URL)
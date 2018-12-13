import { 
  createStore, 
  applyMiddleware 
} from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createHashHistory'
import thunk from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'
import { createRootReducer, createRootEpic }  from './reducers'

const epicMiddleware = createEpicMiddleware()

function CreateStore () {
  try {
    const history = createHistory()
    const middlewares = [
      routerMiddleware(history), 
      thunk, 
      epicMiddleware
    ]

    const store = createStore(
      createRootReducer(history),
      composeWithDevTools(
        applyMiddleware(...middlewares)
      )
    )
    epicMiddleware.run(createRootEpic())

    return { store, history, }
  } catch (error) {
    console.error(`CreateStore ${error.message}`)
  }
}

export default CreateStore()
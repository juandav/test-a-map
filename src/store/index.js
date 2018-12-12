import { 
  createStore, 
  applyMiddleware 
} from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createHashHistory'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'

function CreateStore () {
  try {
    const history = createHistory()
    const middlewares = [routerMiddleware(history), thunk]
    return {
      "store": createStore(
        createRootReducer(history),
        composeWithDevTools(
          applyMiddleware(...middlewares)
        )
      ),
      "history": history,
    }
  } catch (error) {
    console.error(`CreateStore ${error.message}`)
  }
}

export default CreateStore()
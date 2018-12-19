import { 
  createStore, 
  applyMiddleware 
} from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createHashHistory'
import { createEpicMiddleware } from 'redux-observable'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createRootReducer, createRootEpic }  from './reducers'

const epicMiddleware = createEpicMiddleware()
const persistConfig = {
  key: 'root',
  storage,
}

function CreateStore () {
  try {
    const history = createHistory()
    const middlewares = [
      routerMiddleware(history),
      epicMiddleware
    ]

    const store = createStore(
      persistReducer(persistConfig, createRootReducer(history)),
      composeWithDevTools(
        applyMiddleware(...middlewares)
      )
    )
    const persistor = persistStore(store)
    epicMiddleware.run(createRootEpic())

    return { store, history, persistor, }
  } catch (error) {
    console.error(`CreateStore ${error.message}`)
  }
}

export default CreateStore()
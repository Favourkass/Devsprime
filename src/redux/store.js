import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import rootReducer from './reducers'

const middleware = applyMiddleware(thunk)

// eslint-disable-next-line
export default () => {
  const store = createStore(rootReducer, composeWithDevTools(middleware))
  const persistor = persistStore(store)
  return {store, persistor}
}

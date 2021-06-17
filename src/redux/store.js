import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'


const middleware = applyMiddleware(thunk)

const store = createStore(rootReducer, composeWithDevTools(middleware))

export default store

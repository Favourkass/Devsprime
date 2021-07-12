import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './main'
import { PersistGate } from 'redux-persist/integration/react'

import getStore from '../redux/store'

export const {store, persistor} = getStore()


const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </BrowserRouter>
  </Provider>
)

export default Root

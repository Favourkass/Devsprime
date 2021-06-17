import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './main'
import store from '../redux/store'


const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)

export default Root

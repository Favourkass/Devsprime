import { Suspense } from 'react'

import { Route, Switch } from "react-router-dom";
import MyLoader from '../../utils/loader'
import NavBar from '../../components/navbar/NavBarWraper/index'
// 
import HomePage from '../../pages/HomePage'

const App = () => (
  <Suspense fallback={ 
    <div>
      <MyLoader /> 
    </div>
  }>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/navbar' component={NavBar} />

    </Switch>
  </Suspense>
)

export default App
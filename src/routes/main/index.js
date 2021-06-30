import { Suspense } from 'react'
import { Route, Switch } from "react-router-dom";
import MyLoader from '../../utils/loader';
import HomePage from '../../pages/HomePage';
import login from '../../pages/login/login';


const App = () => (
  <Suspense fallback={
    <div>
      <MyLoader />
    </div>
  }>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component = {login}/>

    </Switch>
  </Suspense>
)

export default App

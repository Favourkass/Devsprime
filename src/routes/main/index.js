import { Suspense } from 'react'
import { Route, Switch } from "react-router-dom";
import MyLoader from '../../utils/loader';
import HomePage from '../../pages/HomePage';
import PaymentPage from '../../pages/PaymentPage';
import login from '../../pages/login/login';
import ForgotPassword from '../../pages/ForgotPassword/index';
import SignUp from '../../pages/signup';

const App = () => (
  <Suspense fallback={
    <div>
      <MyLoader />
    </div>
  }>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/payment/:course_id' component={PaymentPage} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component = {login}/>
      <Route exact path='/forgot-password' component={ForgotPassword} />
    </Switch>
  </Suspense>
)

export default App

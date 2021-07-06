import { Suspense } from 'react'
import { Route, Switch } from "react-router-dom";
import MyLoader from '../../utils/loader';
import HomePage from '../../pages/HomePage';
import PaymentPage from '../../pages/PaymentPage';
import login from '../../pages/login/login';
import ForgotPassword from '../../pages/ForgotPassword';
import SignUp from '../../pages/signup';
import VerifyOtpPage from '../../pages/VerifyOtpPage';
import ContactPage from '../../pages/contact/ContactPage'


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
      <Route exact path='/login' component={login} />
      <Route exact path='/verify' component={VerifyOtpPage} />
      <Route exact path='/contact' component = {ContactPage}/>
      <Route exact path='/forgot-password' component={ForgotPassword} />
    </Switch>
  </Suspense>
)

export default App

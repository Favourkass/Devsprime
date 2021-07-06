import { Suspense } from 'react'
import { Route, Switch } from "react-router-dom";
import MyLoader from '../../utils/loader';
import HomePage from '../../pages/HomePage';
import InstructorDashboard from '../../pages/instructor-dashboard';
import PaymentPage from '../../pages/PaymentPage';
import login from '../../pages/login/login';
import DashboardCourse from '../../pages/LeanersDashboard/myCourses';
import ForgotPassword from '../../pages/ForgotPassword';
import SignUp from '../../pages/signup';
import VerifyOtpPage from '../../pages/VerifyOtpPage';
import ContactPage from '../../pages/contact/ContactPage'
import ProtectedRoute from '../protectedRoute'


const App = () => (
  <Suspense fallback={
    <div>
      <MyLoader />
    </div>
  }>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component = {login}/>
      <ProtectedRoute exact path='/instructor-dashboard' component={InstructorDashboard} />
      <Route exact path='/payment/:course_id' component={PaymentPage} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component = {login}/>
      <ProtectedRoute exact path='/dashboard' component={DashboardCourse} />
      <Route exact path='/login' component={login} />
      <Route exact path='/verify' component={VerifyOtpPage} />
      <Route exact path='/contact' component = {ContactPage}/>
      <Route exact path='/forgot-password' component={ForgotPassword} />
    </Switch>
  </Suspense>
)

export default App

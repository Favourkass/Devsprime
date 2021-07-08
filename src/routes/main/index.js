import { Suspense } from 'react'
import { Route, Switch } from "react-router-dom";
import MyLoader from '../../utils/loader';

import LandingPage from '../../pages/LandingPage';
import InstructorDashboard from '../../pages/instructor-dashboard';
import PaymentPage from '../../pages/PaymentPage';
import login from '../../pages/login/login';
import DashboardCourse from '../../pages/LeanersDashboard/myCourses';
import ForgotPassword from '../../pages/ForgotPassword';
import CoursePage from '../../pages/CoursePage';

import SignUp from '../../pages/signup';
import SignUpInstructor from '../../pages/signupInstructor';
import VerifyOtpPage from '../../pages/VerifyOtpPage';
import ContactPage from '../../pages/contact/ContactPage'
import AboutPage from '../../pages/about/about';

import CourseOverview from '../../pages/CourseOverview'

const App = () => (
  <Suspense fallback={
    <div>
      <MyLoader />
    </div>
  }>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/login' component = {login}/>
      <Route exact path='/dashboard/instructor' component={InstructorDashboard} />
      <Route exact path='/payment/:course_id' component={PaymentPage} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/courses/:course_id' component={CourseOverview} />
      <Route exact path='/signup/instructor' component={SignUpInstructor} />
      <Route exact path='/dashboard' component={DashboardCourse} />
      <Route exact path='/verify' component={VerifyOtpPage} />
      <Route exact path='/contact' component = {ContactPage}/>
      <Route exact path='/forgot-password' component={ForgotPassword} />
      <Route exact path='/courses' component={CoursePage} />
      <Route exact path='/about' component = {AboutPage}/>
    </Switch>
  </Suspense>
)

export default App

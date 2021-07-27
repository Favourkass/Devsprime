import { Suspense } from 'react'
import { Route, Switch } from "react-router-dom";
import MyLoader from '../../utils/loader';

import LandingPage from '../../pages/LandingPage';
import InstructorDashboard from '../../pages/instructor-dashboard';
import PaymentPage from '../../pages/PaymentPage';
import Login from '../../pages/login/login';
import DashboardCourse from '../../pages/LeanersDashboard/myCourses';

import ForgotPassword from '../../pages/ForgotPassword';
import CoursePage from '../../pages/CoursePage';
import SignUp from '../../pages/signup';
import BlogList from '../../pages/blogs/BlogList'
import BlogDetail from '../../pages/blogDetail/BlogDetail';

import SignUpInstructor from '../../pages/signupInstructor';
import VerifyOtpPage from '../../pages/VerifyOtpPage';
import ProtectedRoute from '../protectedRoute';
import ReviewOrder from '../../pages/review/review';
import ContactPage from '../../pages/contact/ContactPage';
import Cart from '../../pages/Cart/index';

import AboutPage from '../../pages/about/about';
import CourseOverview from '../../pages/CourseOverview'
import ErrorPage from '../../pages/errorPage';
import DashboardOrder from '../../pages/LeanersDashboard/myOrder';

import UploadCourse from '../../pages/UploadCourse';

import AddBlog from '../../pages/addBlog';
import EditCourse from '../../pages/EditCourse';


const App = () => (
  <Suspense fallback={
    <div>
      <MyLoader />
    </div>
  }>
    <Switch>
      <ProtectedRoute exact path='/dashboard/instructor' component={InstructorDashboard} />
      <ProtectedRoute exact path='/dashboard/instructor/upload' component={UploadCourse} />
      <ProtectedRoute exact path='/courses/:courseID/edit' component={EditCourse} />
      <Route exact path='/review/:cartId' component={ReviewOrder}/>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/login' component={Login}/>
     
      <Route exact path='/payment/:course_id' component={PaymentPage} />
        
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/blogs' component={BlogList} />
      <Route exact path='/blogs/createblog' component={AddBlog}/>
      <Route exact path='/blogs/:blogId' component={BlogDetail} />
      <Route exact path='/courses/:course_id' component={CourseOverview} />
        
      <Route exact path='/signup/instructor' component={SignUpInstructor} />
      <Route exact path='/dashboard' component={DashboardCourse} />
      <Route exact path='/dashboard/order' component={DashboardOrder} />
      <Route exact path='/verify' component={VerifyOtpPage} />
      <Route exact path='/contact' component = {ContactPage}/>
      <Route exact path='/forgot-password' component={ForgotPassword} />
        
      <Route exact path='/courses' component={CoursePage} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/about' component = {AboutPage}/>
      <Route  component = {ErrorPage}/>
    </Switch>
  </Suspense>
)

export default App

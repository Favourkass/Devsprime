import { combineReducers } from "redux";

import LoginReducer from "./auth/login.reducer";
import getCourseRudcer from './courseOverview.reducer';
import paymentReducer from './payment.reducer'
import SignupReducer from './auth/signup.reducer'

import Blogreducers from "../reducers/blogReducer/index"
import userProfileReducer from "../reducers/userprofile.reducer"

import SignUpInstructorReducer from './auth/signupInstructor.reducer'
import courseReducer from "./course.reducer";
import verifyOtpReducer from './verifyotp.reducer'
import getCartReducer from "./orderReview.reducer";

import AllCoursesReducer from "./all_courses.reducer";
import cartlistReducer from "./cart.reducer"


const rootReducer = combineReducers({
signupInstructor: SignUpInstructorReducer,
login:LoginReducer,
cartList:cartlistReducer,
signup:SignupReducer,
blogs:Blogreducers,
user: userProfileReducer,
courses: courseReducer,
getCartById:getCartReducer,
verifyOtp: verifyOtpReducer,
paymentReducer, 
getCourse: getCourseRudcer,
all_courses:AllCoursesReducer
})

export default rootReducer

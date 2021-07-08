import { combineReducers } from "redux";
import paymentReducer from './payment.reducer'
import SignupReducer from './auth/signup.reducer'
import SignUpInstructorReducer from './auth/signupInstructor.reducer'
import LoginReducer from "./auth/login.reducer";
import courseReducer from "./course.reducer";
import verifyOtpReducer from './verifyotp.reducer'

const rootReducer = combineReducers({
signupInstructor: SignUpInstructorReducer,
login:LoginReducer,
signup:SignupReducer,
courses: courseReducer,
verifyOtp: verifyOtpReducer,
paymentReducer
})

export default rootReducer

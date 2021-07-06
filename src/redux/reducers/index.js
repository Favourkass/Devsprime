import { combineReducers } from "redux";
import paymentReducer from './payment.reducer'
import SignupReducer from './auth/signup.reducer'
import LoginReducer from "./auth/login.reducer";
import courseReducer from "./course.reducer";
import verifyOtpReducer from './verifyotp.reducer'

const rootReducer = combineReducers({
login:LoginReducer,
signup:SignupReducer,
courses: courseReducer,
verifyOtp: verifyOtpReducer,
paymentReducer
})

export default rootReducer

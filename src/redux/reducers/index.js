import { combineReducers } from "redux";
import paymentReducer from './payment.reducer'
import SignupReducer from './auth/signup.reducer'
import LoginReducer from "./auth/login.reducer";

const rootReducer = combineReducers({
login:LoginReducer,
signup:SignupReducer,
paymentReducer
})

export default rootReducer

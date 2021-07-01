import { combineReducers } from "redux";
import SignupReducer from './auth/signup.reducer'

import LoginReducer from "./auth/login.reducer";

const rootReducer = combineReducers({
login:LoginReducer,
signup:SignupReducer
})

export default rootReducer

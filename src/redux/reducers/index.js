import { combineReducers } from "redux";
import LoginReducer from "./auth/login.reducer";

const rootReducer = combineReducers({
login:LoginReducer
})


export default rootReducer

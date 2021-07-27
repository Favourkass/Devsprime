import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import LoginReducer from "./auth/login.reducer";
import getCourseRudcer from "./courseOverview.reducer";
import paymentReducer from "./payment.reducer";
import SignupReducer from "./auth/signup.reducer";

import Blogreducers from "../reducers/blogReducer/index";
import userProfileReducer from "../reducers/userprofile.reducer";

import SignUpInstructorReducer from "./auth/signupInstructor.reducer";
import courseReducer from "./course.reducer";
import verifyOtpReducer from "./verifyotp.reducer";
import getCartReducer from "./orderReview.reducer";

import AllCoursesReducer from "./all_courses.reducer";
import cartReducer from "./cart.reducer";
import orderReducer from "./orderDashboard.reducer";

import instructorReducer from "./instructor.reducer/index";
import instructorCoursesReducer from "./instructorCourses.reducer";
import courseCategoryReducer from "./courseCategory.reducer";
import courseTypeReducer from "./courseType.reducer";

import courseUploadReducer from "./courseUpload.reducer";
import courseVideoReducer from "./courseVideo.reducer";

const persistConfig = {
  key: "devsprime",
  storage,
  whiteList: ["user", "courses", "cart"],
};

const rootReducer = combineReducers({
  signupInstructor: SignUpInstructorReducer,
  login: LoginReducer,
  cart: cartReducer,
  signup: SignupReducer,
  blogs: Blogreducers,
  user: userProfileReducer,
  courses: courseReducer,
  getCartById: getCartReducer,
  verifyOtp: verifyOtpReducer,
  paymentReducer,
  getCourse: getCourseRudcer,
  all_courses: AllCoursesReducer,
  order_detail:orderReducer,
  instructor: instructorReducer,
  instructorCourses: instructorCoursesReducer,
  courseType: courseTypeReducer,
  courseCategory: courseCategoryReducer,
  courseUpload: courseUploadReducer,
  courseVideo: courseVideoReducer,
});

export default persistReducer(persistConfig, rootReducer)

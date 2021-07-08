import { combineReducers } from "redux";

import { showBlogsReducer} from "./blogReducer";

const Blogreducers = combineReducers({
  allBlogs: showBlogsReducer,
});
export default Blogreducers;

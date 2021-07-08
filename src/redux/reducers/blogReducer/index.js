import { combineReducers } from "redux";

import { showBlogsReducer, blogDetailReducer, blogCommentsReducer } from "./blogReducer";

const Blogreducers = combineReducers({
  allBlogs: showBlogsReducer,
  oneBlog: blogDetailReducer,
  comments: blogCommentsReducer,
});
export default Blogreducers;

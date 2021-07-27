import { combineReducers } from "redux";

import { showBlogsReducer, blogDetailReducer, blogCommentsReducer, AddBlogReducer } from "./blogReducer";

const Blogreducers = combineReducers({
  allBlogs: showBlogsReducer,
  oneBlog: blogDetailReducer,
  comments: blogCommentsReducer,
  addBlog: AddBlogReducer,
});
export default Blogreducers;

import { combineReducers } from "redux";

import { blogDetailReducer, blogCommentsReducer } from "./blogdetail.reducer";

const BlogDetailreducers = combineReducers({
  oneBlog: blogDetailReducer,
  comments: blogCommentsReducer,
});
export default BlogDetailreducers;

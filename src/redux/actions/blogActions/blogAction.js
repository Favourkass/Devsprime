import { ActionTypes } from "../../actions/blogActions/blogActionType";

export const setBlog = (blogs) => {
  return {
    type: ActionTypes.SHOW_BLOGS,
    payload: blogs,
  };
};


export const removeSelectedBlog = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_BLOG,
  };
};
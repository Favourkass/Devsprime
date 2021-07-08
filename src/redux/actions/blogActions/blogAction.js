import { ActionTypes } from "../../actions/blogActions/blogActionType";

export const setBlog = (blogs) => {
  return {
    type: ActionTypes.SHOW_BLOGS,
    payload: blogs,
  };
};

export const blogDetail = (blog) => {
  return {
    type: ActionTypes.BLOG_DETAIL,
    payload: blog,
  };
};

export const blogComments = (comments) => {
  return {
    type: ActionTypes.BLOG_COMMENTS,
    payload: comments,
  };
};


export const removeSelectedBlog = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_BLOG,
  };
};
import { ActionTypes } from "../../actions/blogActions/blogActionType";
import { retrieveErrMessage } from "../../../utils/helper";
import request, { headers } from "../../../request";
import { toast } from "react-toastify";

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

export const postBlogSuccess = (payload) => ({
  type: ActionTypes.POST_BLOG_SUCCESS,
  payload,
});

export const postBlogFailed = (payload) => ({
  type: ActionTypes.POST_BLOG_FAILED,
  payload,
});

export const addBlog = (payload) => async (dispatch) => {
  try {
      const token = localStorage.getItem('token')
      const res = await request.post("/blogs/", payload, headers(token));
      toast.success("Post added successful");
      setTimeout(()=> { window.location = "/blogs" }, 2000);
      return dispatch(postBlogSuccess(res));
  } catch (error) {
      const err = retrieveErrMessage(error);
      const e = Object.values(err.errors)[0];
      toast.error(e[0])
      return dispatch(postBlogFailed(err));
  }
};

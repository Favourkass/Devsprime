import { BLOG_DETAIL, BLOG_COMMENTS } from "../actions/types";

export const blogDetail = (blog) => {
  return {
    type: BLOG_DETAIL,
    payload: blog,
  };
};

export const blogComments = (comments) => {
  return {
    type: BLOG_COMMENTS,
    payload: comments,
  };
};
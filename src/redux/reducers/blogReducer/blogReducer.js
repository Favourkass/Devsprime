import { ActionTypes } from "../../actions/blogActions/blogActionType";

const intialState = {
  blogs: [],
};

export const showBlogsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SHOW_BLOGS:
      return { ...state, blogs: payload };
    default:
      return state;
  }
};

export const blogDetailReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.BLOG_DETAIL:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const blogCommentsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.BLOG_COMMENTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};


export const removeSelectedBlogReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.BLOG_DETAIL:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

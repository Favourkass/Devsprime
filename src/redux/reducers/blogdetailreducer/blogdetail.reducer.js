import { ActionTypes } from "../../actions/blogActions/blogActionType";

export const blogDetailReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.BLOG_DETAIL:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const blogCommentsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.BLOG_COMMENTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};


export const removeSelectedBlogReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.BLOG_DETAIL:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

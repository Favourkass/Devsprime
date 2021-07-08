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


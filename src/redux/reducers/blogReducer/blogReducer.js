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

const initialAddBlogState = {
    data: null, errors: "", loading: false, message: null
}

export const AddBlogReducer = (state = initialAddBlogState, action) => {

    const { payload, type } = action
    
    switch (type) {
        case ActionTypes.POST_BLOG_FAILED:
            return {
                ...state,
                errors: payload.errors,
                data: null,
                message: payload.message,
                loading: false,
            }
        case ActionTypes.POST_BLOG_SUCCESS:
            return {
                ...state,
                errors: null,
                data: payload.data.data,
                message:payload.data.message,
                loading: false,
            }
        default:
            return state
    }
}

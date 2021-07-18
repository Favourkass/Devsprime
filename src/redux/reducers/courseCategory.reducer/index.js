import {
  FETCH_COURSE_CATEGORY_REQUEST,
  FETCH_COURSE_CATEGORY_SUCCESS,
  FETCH_COURSE_CATEGORY_FAILURE,
} from "../../actions/types";

const initialState = {
  loading: false,
  courseCategory: [],
  error: null,
};

const courseCategoryReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_COURSE_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_COURSE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                courseCategory: payload.data,
            };
        case FETCH_COURSE_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
}

export default courseCategoryReducer;
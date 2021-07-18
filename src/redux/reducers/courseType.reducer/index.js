import {
  FETCH_COURSE_TYPE_REQUEST,
  FETCH_COURSE_TYPE_SUCCESS,
  FETCH_COURSE_TYPE_FAILURE,
} from "../../actions/types";

const initialState = {
  loading: false,
  courseType: [],
  error: null,
};

const courseTypeReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_COURSE_TYPE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_COURSE_TYPE_SUCCESS:
            return {
                ...state,
                loading: false,
                courseType: payload.data,
            };
        case FETCH_COURSE_TYPE_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
}

export default courseTypeReducer;
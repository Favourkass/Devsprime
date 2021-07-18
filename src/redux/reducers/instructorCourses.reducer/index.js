import {
  FETCH_INSTRUCTOR_COURSES_REQUEST,
  FETCH_INSTRUCTOR_COURSES_SUCCESS,
  FETCH_INSTRUCTOR_COURSES_FAILURE,
} from "../../actions/types";

const initialState = {
  loading: false,
  instructorCourses: {},
  error: null,
};

const instructorCoursesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_INSTRUCTOR_COURSES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_INSTRUCTOR_COURSES_SUCCESS:
            return {
                ...state,
                loading: false,
                instructor: payload.data,
            };
        case FETCH_INSTRUCTOR_COURSES_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
}

export default instructorCoursesReducer;
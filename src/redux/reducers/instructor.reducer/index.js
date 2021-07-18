import {
  FETCH_INSTRUCTOR_REQUEST,
  FETCH_INSTRUCTOR_SUCCESS,
  FETCH_INSTRUCTOR_FAILURE,
} from "../../../redux/actions/types";

const initialState = {
  loading: false,
  instructor: {},
  error: null,
};

const instructorReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_INSTRUCTOR_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_INSTRUCTOR_SUCCESS:
            return {
                ...state,
                loading: false,
                instructor: payload.data,
            };
        case FETCH_INSTRUCTOR_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
}

export default instructorReducer;
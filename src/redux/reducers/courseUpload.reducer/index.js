import {
UPLOAD_COURSE,
UPLOAD_COURSE_SUCCESS,
UPLOAD_COURSE_FAILURE,
} from "../../actions/types";

const initialState = {
  loading: false,
  message: "",
  data: "",
  error: null,
};

const courseUploadReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPLOAD_COURSE:
            return {
                ...state,
                loading: true,
            };
        case UPLOAD_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload.data,
            };
        case UPLOAD_COURSE_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
}

export default courseUploadReducer;
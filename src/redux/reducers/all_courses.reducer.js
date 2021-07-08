import { FETCH_COURSES_SUCCESS, FETCH_COURSES_FAILURE } from "../actions/types"; 

const initialState = {
    loading: true,
    data: [],
    error: "",
    courses:[],
};

const AllCoursesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case FETCH_COURSES_SUCCESS:
            return {
                ...state,
                loading: false,
                courses: payload.data.courses,
                error: ''
            }
        case FETCH_COURSES_FAILURE:
            return {
                ...state,
                loading: false,
                courses: [],
                error: payload.error,
            }
        default: 
            return state;
    }
}

export default AllCoursesReducer;

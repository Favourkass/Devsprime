import * as types from '../../actions/types';

const initialState = {getCourse: [], instructorData:[], allCourses:[]}

const getCourseRudcer = (state=initialState, action) => {
    const { payload } = action

    switch(action.type){
        case types.GET_ALL_COURSES:
            return{
                ...state, 
                allCourses: payload.data
            }
        case types.GET_ALL_COURSE_DETAIL:
            return{
                ...state, 
                getCourse: payload.data
            }
        case types.GET_INSTRUCTOR:
            return{
                ...state, 
                instructorData: payload.data
            }
        default:
            return state
    }
}

export default getCourseRudcer;
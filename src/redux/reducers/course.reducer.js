import { FETCH_COURSE_FAILURE,FETCH_COURSE_REQUEST,FETCH_COURSE_SUCCESSFUL } from "../actions/types";

const courseState={
    errors: "",
    loading: false,
    courses:[],
        
}

const courseReducer=(state=courseState,action)=>{
    switch(action.type){
        case FETCH_COURSE_REQUEST:
            return {
                ...state,
                type: FETCH_COURSE_REQUEST,
                loading:true
            }
        case FETCH_COURSE_SUCCESSFUL:
            return{
                ...state,
                type : FETCH_COURSE_SUCCESSFUL,
                courses : action.payload.data,
                errors : "",
                loading:false
                
            }
        
        case FETCH_COURSE_FAILURE:
            return{
                ...state,
                type : FETCH_COURSE_FAILURE,
                courses:null,
                errors: action.payload.error,
                loading:false
            }
        default: return state;
    }
}

export default courseReducer
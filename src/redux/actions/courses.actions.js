import { FETCH_COURSE_SUCCESSFUL,FETCH_COURSE_FAILURE } from "./types";
import { retrieveErrMessage } from "../../utils/helper";
import request from "../../request";
import { headers } from "../../request";




const fetchCourseSuccess=(courses)=>{
    return {
        type: FETCH_COURSE_SUCCESSFUL,
        payload: courses.data
    }
}

const fetchCourseFailure=(error)=>{
    return{
        type: FETCH_COURSE_FAILURE,
        payload:error
    }
}

// const token = localStorage.getItem("token")
export const fetchCourses=(token)=>async (dispatch)=>{
       try{
         const response=await request.get("learner/courses/", headers(token)); 
         return dispatch(fetchCourseSuccess(response));
       }catch(error){
           const err=retrieveErrMessage(error)
           return dispatch(fetchCourseFailure(err));
       }
    };


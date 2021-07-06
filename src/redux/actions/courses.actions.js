import { FETCH_COURSE_SUCCESSFUL,FETCH_COURSE_FAILURE } from "./types";
import { retrieveErrMessage } from "../../utils/helper";
import request from "../../request";



// const fetchCourseRequest=(payload)=>{
//     return{
//         type:FETCH_COURSE_REQUEST
//     }
// }
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

export const fetchCourses=()=>async (dispatch)=>{
       try{
         const response=await request.get("/courses/"); 
         console.log("from action",response)
         return dispatch(fetchCourseSuccess(response));
       }catch(error){
           const err=retrieveErrMessage(error)
           return dispatch(fetchCourseFailure(err));
       }
    };


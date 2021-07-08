import {  FETCH_COURSES_SUCCESS, FETCH_COURSES_FAILURE } from "./types";
import request from "../../request";
import { retrieveErrMessage } from "../../utils/helper";


const fetchCoursesSuccess = (courses) => {
    return {
        type: FETCH_COURSES_SUCCESS,
        payload: courses.data
    }
}

const fetchCoursesFailure = (error) => {
    return {
        type: FETCH_COURSES_FAILURE,
        payload: error
    }
}


export const fetchCourses = () => async (dispatch) => {
    try {
      const res = await request.get('/courses/');
      return dispatch(fetchCoursesSuccess(res));
    } catch (error) {
      const err = retrieveErrMessage(error);
      return dispatch(fetchCoursesFailure(err));
    }
  };

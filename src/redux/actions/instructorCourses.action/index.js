import {
  FETCH_INSTRUCTOR_COURSES_REQUEST,
  FETCH_INSTRUCTOR_COURSES_SUCCESS,
  FETCH_INSTRUCTOR_COURSES_FAILURE,
} from "../types";
import request, { headers } from "../../../request";
import { retrieveErrMessage } from "../../../utils/helper";

export const fetchInstructorCourses = (token, id) => async (dispatch) => {
  try {
    dispatch(fetchInstructorCoursesRequest());
    const res = await request.get(`/instructors/courses/${id}`, headers(token));
    const { data } = res;
    return dispatch(fetchInstructorCoursesSuccess(data));
  } catch (error) {
    const err = retrieveErrMessage(error);
    return dispatch(fetchInstructorCoursesFailure(err));
  }
};

const fetchInstructorCoursesRequest = () => ({
  type: FETCH_INSTRUCTOR_COURSES_REQUEST,
});

const fetchInstructorCoursesSuccess = (payload) => ({
  type: FETCH_INSTRUCTOR_COURSES_SUCCESS,
  payload,
});

const fetchInstructorCoursesFailure = (payload) => ({
  type: FETCH_INSTRUCTOR_COURSES_FAILURE,
  payload,
});

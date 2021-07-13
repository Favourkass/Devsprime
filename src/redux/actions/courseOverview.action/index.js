import request, { headers } from "../../../request";
import { retrieveErrMessage } from "../../../utils/helper";
import {
  GET_ALL_COURSES,
  GET_INSTRUCTOR,
  GET_ALL_COURSE_DETAIL,
  ADD_TO_CART,
} from "../types";

export const getAllCourses = () => async (dispatch) => {
  try {
    const data = await request.get("/courses/");
    return dispatch({
      type: GET_ALL_COURSES,
      payload: data.data,
    });
  } catch (error) {
    const err = retrieveErrMessage(error);
    console.log(err);
  }
};
export const getCoursesDetail = (id) => async (dispatch) => {
  try {
    const data = await request.get(`/courses/${id}/`);
    return dispatch({
      type: GET_ALL_COURSE_DETAIL,
      payload: data.data,
    });
  } catch (error) {
    const err = retrieveErrMessage(error);
    console.log(err);
  }
};

export const getInstructor = (instructor_id, token) => async (dispatch) => {
  try {
    const data = await request.get(
      `/instructors/courses/${instructor_id}/`,
      headers(token)
    );
    console.log("INSTRUCTOR ", data);
    return dispatch({
      type: GET_INSTRUCTOR,
      payload: data.data,
    });
  } catch (error) {
    const err = retrieveErrMessage(error);
    console.log(err);
  }
};

export const addToCart = (payload, token) => async (dispatch) => {
  try {
    const data = await request.post(`/cart/`, payload, headers(token));

    return dispatch({
      type: ADD_TO_CART,
      payload: data.data,
    });
  } catch (error) {
    const err = retrieveErrMessage(error);
    console.log(err);
  }
};

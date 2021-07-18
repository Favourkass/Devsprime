import {
  FETCH_COURSE_TYPE_REQUEST,
  FETCH_COURSE_TYPE_SUCCESS,
  FETCH_COURSE_TYPE_FAILURE,
} from "../types";
import request from "../../../request";
import { retrieveErrMessage } from "../../../utils/helper";

export const fetchCourseType = () => async (dispatch) => {
  try {
    dispatch(fetchCourseTypeRequest());
    const res = await request.get("coursetypes/");
    const { data } = res;
    return dispatch(fetchCourseTypeSuccess(data));
  } catch (error) {
    const err = retrieveErrMessage(error);
    return dispatch(fetchCourseTypeFailure(err));
  }
};

const fetchCourseTypeRequest = () => ({
  type: FETCH_COURSE_TYPE_REQUEST,
});

const fetchCourseTypeSuccess = (payload) => ({
  type: FETCH_COURSE_TYPE_SUCCESS,
  payload,
});

const fetchCourseTypeFailure = (payload) => ({
  type: FETCH_COURSE_TYPE_FAILURE,
  payload,
});

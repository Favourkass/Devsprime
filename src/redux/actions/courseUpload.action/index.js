import {
  UPLOAD_COURSE,
  UPLOAD_COURSE_SUCCESS,
  UPLOAD_COURSE_FAILURE,
} from "../types";
import request, { headers } from "../../../request";
import { retrieveErrMessage } from "../../../utils/helper";

export const uploadCourse = (token, payload) => async (dispatch) => {
  try {
    dispatch(uploadCourseRequest(payload));
    const res = await request.post("courses/upload/", payload, headers(token));
    const { data } = res;
    return dispatch(uploadCourseSuccess(data));
  } catch (error) {
    const err = retrieveErrMessage(error);
    return dispatch(uploadCourseFailure(err));
  }
};

const uploadCourseRequest = (payload) => ({
  type: UPLOAD_COURSE,
  payload,
});

const uploadCourseSuccess = (payload) => ({
  type: UPLOAD_COURSE_SUCCESS,
  payload,
});

const uploadCourseFailure = (payload) => ({
  type: UPLOAD_COURSE_FAILURE,
  payload,
});

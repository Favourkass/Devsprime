import request, { headers } from "../../../request";
import { retrieveErrMessage } from "../../../utils/helper";

import {
  GET_COURSE_VIDEO_FAIL,
  GET_COURSE_VIDEO_START,
  GET_COURSE_VIDEO_SUCCESS,
} from "./courseVideo.type";


export const getCourseVideo = (payload) => async (dispatch) => {
  getCourseVideoStart()
  try {
    const {course_id, token} = payload
    const res = await request.get(`/courses/${course_id}/videos/`, headers(token))
    const {data: {data}} = res
    return dispatch(getCourseVideoSuccess(data))
  } catch (error) {
    console.log(error);
    const err = retrieveErrMessage(error)
    return dispatch(getCourseVideoFail(err));
  }
};

const getCourseVideoStart = () => ({
  type: GET_COURSE_VIDEO_START,
});

const getCourseVideoSuccess = (payload) => ({
  type: GET_COURSE_VIDEO_SUCCESS,
  payload,
});

const getCourseVideoFail = (payload) => ({
  type: GET_COURSE_VIDEO_FAIL,
  payload,
});

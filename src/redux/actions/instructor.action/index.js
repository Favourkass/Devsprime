import {
  FETCH_INSTRUCTOR_REQUEST,
  FETCH_INSTRUCTOR_SUCCESS,
  FETCH_INSTRUCTOR_FAILURE,
} from "./../types";
import request, { headers } from "../../../request";
import { retrieveErrMessage } from "../../../utils/helper";

export const fetchInstructor = (token) => async (dispatch) => {
  try {
    dispatch(fetchInstructorRequest());
    const res = await request.get("/instructor/", headers(token));
    const { data } = res;
    return dispatch(fetchInstructorSuccess(data));
  } catch (error) {
    const err = retrieveErrMessage(error);
    return dispatch(fetchInstructorFailure(err));
  }
};

const fetchInstructorRequest = () => ({
  type: FETCH_INSTRUCTOR_REQUEST,
});

const fetchInstructorSuccess = (payload) => ({
  type: FETCH_INSTRUCTOR_SUCCESS,
  payload,
});

const fetchInstructorFailure = (payload) => ({
  type: FETCH_INSTRUCTOR_FAILURE,
  payload,
});

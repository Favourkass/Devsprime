import {
  FETCH_COURSE_CATEGORY_REQUEST,
  FETCH_COURSE_CATEGORY_SUCCESS,
  FETCH_COURSE_CATEGORY_FAILURE,
} from "../types";
import request from "../../../request";
import { retrieveErrMessage } from "../../../utils/helper";

export const fetchCourseCategory = () => async (dispatch) => {
  try {
    dispatch(fetchCourseCategoryRequest());
    const res = await request.get("coursecategories/");
    const { data } = res;
    return dispatch(fetchCourseCategorySuccess(data));
  } catch (error) {
    const err = retrieveErrMessage(error);
    return dispatch(fetchCourseCategoryFailure(err));
  }
};

const fetchCourseCategoryRequest = () => ({
  type: FETCH_COURSE_CATEGORY_REQUEST,
});

const fetchCourseCategorySuccess = (payload) => ({
  type: FETCH_COURSE_CATEGORY_SUCCESS,
  payload,
});

const fetchCourseCategoryFailure = (payload) => ({
  type: FETCH_COURSE_CATEGORY_FAILURE,
  payload,
});

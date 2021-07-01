import { SIGNUP_SUCCESS, SIGNUP_FAILED } from "../types";
import { retrieveErrMessage } from "../../../utils/helper";
import request from "../../../request";

const signupSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

const signupFailed = (payload) => ({
  type: SIGNUP_FAILED,
  payload,
});

const signup = (payload) => async (dispatch) => {
  try {
    const res = await request.post("/auth/register/", payload);
    return dispatch(signupSuccess(res));
  } catch (error) {
    const err = retrieveErrMessage(error);
    return dispatch(signupFailed(err));
  }
};

export default signup;

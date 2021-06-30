import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_START } from "../types";
import request from "../../../request";
import { retrieveErrMessage } from "../../../utils/helper";

// Action return a type and an optional payload

const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});
const loginStart = () => ({
  type: LOGIN_START,
});

const loginFail = (payload) => ({
  type: LOGIN_FAILED,
  payload,
});

const login = (payload) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const data = await request.post("/auth/login/", payload);
    return dispatch(loginSuccess(data));
  } catch (error) {
    const err = retrieveErrMessage(error);
    return dispatch(loginFail(err));
  }
};

export default login;

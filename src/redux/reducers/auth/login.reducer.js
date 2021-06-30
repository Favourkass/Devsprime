import { LOGIN_FAILED, LOGIN_SUCCESS, LOGIN_START } from "../../actions/types";

const loginState = {
  token: localStorage.getItem("token"),
  errors: "",
  message: "",
  loading: false,
};

const LoginReducer = (state = loginState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_FAILED:
      return {
        ...state,
        errors: payload.errors,
        message: payload.message,
        payload: payload,
        loading: false,
      };
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.data.data.token);
      return {
        ...state,
        token: payload.data.data.token,
        message: payload.data.message,
        payload: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default LoginReducer;

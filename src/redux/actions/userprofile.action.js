import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../actions/types'
import request, {headers} from "../../request"
import { retrieveErrMessage } from '../../utils/helper';

const token = localStorage.getItem('token');
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    request
      .get('/user/', headers(token))
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUser = (token) => async (dispatch) => {
  try {
    dispatch(fetchUsersRequest);
    const res = await request.get("/user/", headers(token));
    const {data} = res;
    return dispatch(fetchUsersSuccess(data));
  } catch (error) {
    const err = retrieveErrMessage(error);
    return dispatch(fetchUsersFailure(err));
  }
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}


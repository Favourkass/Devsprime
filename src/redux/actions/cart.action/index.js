import request, { headers } from "../../../request";
import { retrieveErrMessage } from "../../../utils/helper";
import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_START,
  GET_CART,
  REMOVE_CART,
} from "./cart.type";


// Get Cart
export const getCartList = (token) => async (dispatch) => {
  try {
    const res = await request.get("/cart/", headers(token));
    console.log(res);
    return dispatch({
      type: GET_CART,
      payload: res.data,
    });
  } catch (error) {
    const err = retrieveErrMessage(error);
    console.log(err);
  }
};

const addToCartSuccess = (payload) => ({
  type: ADD_TO_CART_SUCCESS,
  payload,
});

const addToCartFail = (payload) => ({
  type: ADD_TO_CART_FAIL,
  payload,
});

const addToCartStart = () => ({
  type: ADD_TO_CART_START,
});

// Add To Cart
export const addToCart = (payload) => async (dispatch) => {
  dispatch(addToCartStart);
  try {
    const { token, courseId } = payload;
    const res = await request.post(
      `/cart/`,
      { course_id: courseId },
      headers(token)
    );
    const { data } = res;
    return dispatch(addToCartSuccess(data));
  } catch (error) {
    console.log(error);
    const err = retrieveErrMessage(error);
    return dispatch(addToCartFail(err));
  }
};

// Remove from Cart
export const removeCart = (token, id) => async (dispatch) => {
  try {
    const res = await request.delete(`/cart/${id}`, headers(token));
    console.log(res);
    return dispatch({
      type: REMOVE_CART,
      payload: id,
    });
  } catch (error) {
    const err = retrieveErrMessage(error);
    console.log(err);
  }
};

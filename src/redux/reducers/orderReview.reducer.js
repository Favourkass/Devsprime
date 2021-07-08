import { GET_CART_BY_COURSE_ID } from "../actions/types";


const initialState = { cartData: {}, }

const getCartReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_CART_BY_COURSE_ID:
      return {
        ...state,
        cartData: payload.data
      }
 
    default:
      return state
  }

}

export default getCartReducer;
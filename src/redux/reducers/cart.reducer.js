import { GET_CART } from "../actions/types";


const initialState = { cartList: {} }

const cartlistReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_CART:
      return {
        ...state,
        cartList: payload.data
      }
    
    default:
      return state
  }

}

export default cartlistReducer;
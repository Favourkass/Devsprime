import { GET_CART,REMOVE_CART } from "../actions/types";


const initialState = { cartList: {},isLoading:true }

const cartlistReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_CART:
      return {
        ...state,
        cartList: payload.data,
        isLoading:false
      }

    case REMOVE_CART:
      return {
        ...state,
        isLoading:false
      }
    
    default:
      return state
  }

}
export default cartlistReducer;


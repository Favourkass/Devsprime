import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_START,
  ADD_TO_CART_SUCCESS,
  GET_CART,
  REMOVE_CART
} from "../../actions/cart.action/cart.type";

const initialState = { cart: [], isLoading: false, errors: "", cartTotal: 0 };

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cart: [...state.cart, payload.data],
        cartTotal: state.cart.length,
        loading: false,
      };
    case ADD_TO_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.data,
      };
    case GET_CART:
      return {
        ...state,
        cart: [...payload.data.Courses],
        cartTotal: state.cart.length,
        isLoading:false
      }
      case REMOVE_CART:
        
      return {
        ...state,
        cart: state.cart.filter(cart => cart.id !== payload),
        isLoading:false
      }
    default:
      return state;
  }
};
export default cartReducer;

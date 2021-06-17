import * as types from '../actions/types'

const initialState = {token: localStorage.getItem('token'), error: null, loading:false, jones: 'Jones'}

const authReducer = (state=initialState, action) => {

  const {payload} = action

  switch (action.type) {
    case types.LOGIN:
      return {
        ...state, 
        loading: true,
      }
    case types.LOGIN_SUCCESS: {
      localStorage.setItem('token', payload)
      return {
        ...state,
        error: null,
        token: payload,
        loading: false
      }
    }
    
    case types.LOGIN_FAILED:
      return {
        ...state,
        token: null,
        error: payload,
        loading: false
      }
    default:
      return state
  }
} 

export default authReducer;
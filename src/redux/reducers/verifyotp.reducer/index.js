import * as types from '../../actions/types'

const initialState = { confirmOtp: false }

const verifyOtpReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
    case types.POST_OTP:
      var checker = false;
      if (payload.message === 'success') {
        checker = true
      }
      return {
        ...state,
        confirmOtp: checker,
      }
    default:
      return state
  }
}

export default verifyOtpReducer;
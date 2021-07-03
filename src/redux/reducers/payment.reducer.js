import { FETCH_COURSE_DATA, GET_LEARNER_DATA, SEND_PAYMENT_DATA } from "../actions/types";


const initialState = { courseData: {}, learner_email: '', payment_data: {} }

const paymentReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_COURSE_DATA:
      return {
        ...state,
        courseData: payload
      }
    case GET_LEARNER_DATA:
      return {
        ...state,
        learner_email: payload.email
      }
    case SEND_PAYMENT_DATA:
      return {
        ...state,
        payment_data: payload.data
      }
    default:
      return state
  }

}

export default paymentReducer;
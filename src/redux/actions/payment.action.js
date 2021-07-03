import { FETCH_COURSE_DATA, SEND_PAYMENT_DATA, GET_LEARNER_DATA } from "./types"
import request, { headers } from '../../request'
import { retrieveErrMessage } from "../../utils/helper";



export const getCourseData = ({ course_id }) => async dispatch => {
    try {
        const res = await request.get(`/courses/${course_id}/`)
        return dispatch({
            type: FETCH_COURSE_DATA,
            payload: res.data.data.course
        })
    } catch (error) {
        const err = retrieveErrMessage(error)
        console.log(err)
    }

}
export const getLearnerData = (token) => async dispatch => {

    try {
        const res = await request.get('/pay/course/', headers(token))
        return dispatch({
            type: GET_LEARNER_DATA,
            payload: res.data.data
        })
    } catch (error) {
        const err = retrieveErrMessage(error)
        console.log(err)
    }

}

export const sendPaymentData = (paymentData, token) => async dispatch => {
    try {
        const res = await request.post('/pay/course/', paymentData, headers(token))
        return dispatch({
            type: SEND_PAYMENT_DATA,
            payload: res.data
        })
    } catch (error) {
        const err = retrieveErrMessage(error)
        console.log(err)
    }

}
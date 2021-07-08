import { GET_CART_BY_COURSE_ID } from "./types";
import request, { headers } from '../../request'
import { retrieveErrMessage } from "../../utils/helper";




export const getCardByCourseId = (token, cartId) => async dispatch => {
    console.log(token)
    try {
        const res = await request.get(`/cart/${cartId}/`,headers(token))
        return dispatch({
            type: GET_CART_BY_COURSE_ID,
            payload: res.data
        })
    } catch (error) {
        const err = retrieveErrMessage(error)
        console.log(err)
    }

}

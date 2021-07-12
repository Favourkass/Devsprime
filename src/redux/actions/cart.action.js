import {GET_CART,REMOVE_CART} from "./types"
import request, { headers } from '../../request'
import { retrieveErrMessage } from "../../utils/helper";



export const getCartList = (token) => async dispatch => {
    try {
        const res = await request.get('/cart/',headers(token))
        console.log(res)
        return dispatch({
            type: GET_CART,
            payload: res.data
        })
    } catch (error) {
        const err = retrieveErrMessage(error)
        console.log(err)
    }

}


export const removeCart = (token,id) => async dispatch => {
    try {
        const res = await request.delete(`/cart/${id}`,headers(token))
        console.log(res)
        return dispatch({
            type: REMOVE_CART,
            payload: res.data
        })
    } catch (error) {
        const err = retrieveErrMessage(error)
        console.log(err)
    }

}
import { SIGNUP_SUCCESS, SIGNUP_FAILED } from "../types";
import request from "../../../request";
import { retrieveErrMessage } from "../../../utils/helper";


const signUpSuccess = (payload) => ({
    type: SIGNUP_SUCCESS,
    payload
})

const signUpFailed = (payload) => ({
    type: SIGNUP_FAILED,
    payload
})

const signUp = (payload) => async (dispatch) => {
    try {
        const res = await request.post("/auth/register/instructor/", payload)
        console.log(res)
        return dispatch(signUpSuccess(res))
    } catch (error) {
        const err = retrieveErrMessage(error)
        return dispatch(signUpFailed(err))
    }
}

export default signUp
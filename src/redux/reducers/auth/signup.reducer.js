import * as types from '../../actions/types'


const initialState = {
    data: "", errors: "", loading: false, message: ""
}

const SignupReducer = (state = initialState, action) => {

    const { payload, type } = action

    switch (type) {
        case types.SIGNUP:
            return {
                ...state,
                loading: true
            }

        case types.SIGNUP_FAILED:
            return {
                ...state,
                errors: payload.errors,
                data: null,
                message: payload.message,
                loading: false,
            }
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                data: payload.data.data,
                loading: false,
                message:payload.data.message
            }

        default:
            return state
    }
}

export default SignupReducer

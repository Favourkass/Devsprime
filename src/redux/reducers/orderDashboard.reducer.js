// import { FETCH_COURSE_FAILURE,FETCH_COURSE_REQUEST,FETCH_COURSE_SUCCESSFUL } from "../actions/types";
import { FETCH_ORDER_SUCCESS,FETCH_ORDER_FAILURE,FETCH_ORDER_REQUEST } from "../actions/types";

const orderState={
    
    errors: "",
    loading: false,
    orders:[],
        
}

const orderReducer=(state=orderState,action)=>{
    switch(action.type){
        case FETCH_ORDER_REQUEST:
            return {
                ...state,
                type: FETCH_ORDER_REQUEST,
                loading:true
            }
        case FETCH_ORDER_SUCCESS:
            return{
                ...state,
                type : FETCH_ORDER_SUCCESS,
                orders : action.payload.data,
                errors : "",
                loading:false
                
            }
        
        case FETCH_ORDER_FAILURE:
            return{
                ...state,
                type : FETCH_ORDER_FAILURE,
                orders:null,
                errors: action.payload.error,
                loading:false
            }
        default: return state;
    }
}

export default orderReducer;
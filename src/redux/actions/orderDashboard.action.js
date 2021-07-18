import { FETCH_ORDER_SUCCESS,FETCH_ORDER_FAILURE } from "./types";
import { retrieveErrMessage } from "../../utils/helper";
import request from "../../request";
import { headers } from "../../request";



const fetchOrderSuccess=(orders)=>{
    return {
        type: FETCH_ORDER_SUCCESS,
        payload: orders.data
    }
}

const fetchOrderFailure=(error)=>{
    return{
        type: FETCH_ORDER_FAILURE,
        payload:error
    }
}

const token = localStorage.getItem("token")
export const fetchOrderDetail=()=>async (dispatch)=>{
    try{
      const response=await request.get("orders/", headers(token)); 
   
      return dispatch(fetchOrderSuccess(response));
    }catch(error){
        const err=retrieveErrMessage(error)
        return dispatch(fetchOrderFailure(err));
    }
 };

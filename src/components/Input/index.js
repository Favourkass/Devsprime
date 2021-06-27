import React from "react"
import Inputs from "./style"


const Input =(props)=>{
    return(
        <>
            <Inputs 
                className={props.className}  
                type={props.type}
                placeholder={props.placeholder}
                onChange ={props.onChange}
                name = {props.name}
                value={props.value}
                size={props.size}
            />
        </>
    )
}
export default Input;


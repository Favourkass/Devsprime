import React from "react"
import {MainWrapper} from "./style"
import DesktopTable from "./DesktopTable"
import MobileTable from "./MobileTable"
import PriceSection from "./PriceTable"


const CartCard=(props)=>{
    return(
        <div className="container">
            <MainWrapper>
                <DesktopTable 
                title={props.title}
                description={props.description}
                cover_img ={props.cover_img}
                instructor_name={props.instructor_name}
                date = {props.created_at}
                course_type={props.course_type}
                price={props.price}
                onDelete={props.onDelete}
                cartID={props.cartId}

                />
                <MobileTable 
                title={props.title}
                description={props.description}
                cover_img ={props.cover_img}
                instructor_name={props.instructor_name}
                date = {props.created_at}
                course_type={props.course_type}
                price={props.price}
                onDelete={props.onDelete}
                cartID={props.cartId}                
                />
                <PriceSection price={props.price} cartId={props.cartId}/>
            </MainWrapper>
        </div>
    )
}
export default CartCard;


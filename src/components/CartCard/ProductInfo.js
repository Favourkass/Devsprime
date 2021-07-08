import React from "react"
import {Wrapper,Paragraph,SubHeader,Img} from "./style"


const ProductInfo=(props)=>{
    return(
        <Wrapper className="cart-info">
            <Img id="img1" src={props.cover_img}/>
            <Wrapper className="info">
                <SubHeader>{props.title}</SubHeader>
                <Paragraph>Instructor:{props.instructor_name}</Paragraph>
                <Paragraph className="internal">{props.date}</Paragraph>
            </Wrapper>
        </Wrapper>
    )
}
export default ProductInfo;
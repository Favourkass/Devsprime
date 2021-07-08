import React from "react"
import {Spans,Container, ParaGraph} from "./style"
import Button from "../../components/button/index"
import {Link} from "react-router-dom"


const PriceSection=(props)=>{
    return(
        <>
            <Container white={props.white} className="container">
                <Container className="decordiv">a</Container>
                <Container white={props.white} className="mid-con">
                    <Container className="indiv">
                        <ParaGraph><Spans>Subtotal:</Spans>{props.price}</ParaGraph>
                        <ParaGraph className="para"><Spans>Total:</Spans>#{props.price}</ParaGraph>
                    </Container>
                    <ParaGraph><Link to={{pathname:`/review/${props.cartId}`}}><Button primary medium >Buy</Button></Link></ParaGraph>
                </Container>
                <Container className="decordiv-2">b</Container>
            </Container>       
        </>
    )
}
export default PriceSection;


import React from "react"
import {Wrapper,Paragraph,Span} from "./style"
import {Link} from "react-router-dom"

const Header=()=>{
    return(
        <div className="container">
            <Wrapper>
                <Paragraph>
                    <Link to={{pathname:"/courses"}}>
                    <img src="https://res.cloudinary.com/devsprime/image/upload/v1625466155/media/Back_Icon_h6i0lz.svg" alt="" />
                    </Link>
                <Span>Courses</Span></Paragraph>
            </Wrapper>
        </div>
    )
}
export default Header;
import React from "react"
import {MainWrapper, InnerWrapper, MenuWrapper} from "./style"


function DashBoardNav(props){
    return(
        <MainWrapper>
            <MenuWrapper>{props.details}</MenuWrapper>
            <InnerWrapper>
                <MenuWrapper>{props.category}</MenuWrapper>
                <MenuWrapper>{props.status}</MenuWrapper>
                <MenuWrapper>{props.instructor}</MenuWrapper>
                <MenuWrapper>{props.date}</MenuWrapper>
            </InnerWrapper>
        </MainWrapper>
    )
}
export default DashBoardNav;


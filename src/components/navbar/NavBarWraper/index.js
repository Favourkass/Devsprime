import React from 'react'
import {NavBarWrapper, Nav} from './style'
import NavElements from '../NavElements/index'


const NavBar = () =>{
    return(
        <Nav>
            <NavBarWrapper>
                <NavElements leftMargin='' rightMargin='' />
            </NavBarWrapper>
        </Nav>
    )
}

export default NavBar
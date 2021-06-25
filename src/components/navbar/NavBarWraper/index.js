import React from 'react'
import {NavBarWrapper, Nav} from './style'
import NavElements from '../NavElements/index'


const NavBar = () =>{
    return(
        <Nav>
            <NavBarWrapper>
                <NavElements leftMargin='10%' rightMargin='-12px' />
            </NavBarWrapper>
        </Nav>
    )
}

export default NavBar
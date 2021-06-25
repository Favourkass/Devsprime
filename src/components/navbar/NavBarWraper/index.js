import React from 'react'
import {NavBarWrapper, Nav} from './style'
import NavElements from '../NavElements/index'
import Logo from '../../logo/index'


const NavBar = () =>{
    return(
        <Nav>
                <Logo />
                <NavElements leftMargin='' rightMargin='' />
                

        </Nav>
    )
}

export default NavBar
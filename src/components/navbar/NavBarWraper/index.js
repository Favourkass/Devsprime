import React from 'react'
import {Nav} from './style'
import NavElements from '../NavElements/index'
import Logo from '../../logo/index'


const NavBar = () =>{
    return(
        <Nav>
            <Logo />
            <NavElements leftMargin='2.5px' rightMargin='' />
        </Nav>
    )
}

export default NavBar
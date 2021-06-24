import React from 'react'
import {NavBarWrapper, Nav} from './style'
import NavElements from '../NavElements/index'
import Logo from '../../logo/index'
import Button from '../../button/index'

const NavBar = () =>{
    return(
        <Nav>
                <Logo />
                <NavElements leftMargin='' rightMargin='' />
                <Button label="Be A Contributor" primary medium/> 
                <Button label="Log In" primary medium/> 

        </Nav>
    )
}

export default NavBar
import React from 'react'
import {Nav} from './style'
import NavElements from '../NavElements/index'
import Logo from '../../logo/index'
import { Link } from 'react-router-dom'


const NavBar = () =>{
    return(
        <Nav>
            <Link to={`/`}>
            <Logo />
            </Link>
            <NavElements leftMargin='2.5px' rightMargin='' />
        </Nav>
    )
}

export default NavBar
import React from 'react';
import {ElementWrapper} from './style'
import NavLink from '../NavLinks/index'

const NavElements= (props)=>{
    return(
    <ElementWrapper LeftMargin={props.leftMargin} RightMargin={props.rightMargin}>
         <NavLink route='/' color='#FF8A00' size='15'>Home</NavLink>
         <NavLink route='' color='#FF8A00' size='15'>courses</NavLink>
         <NavLink route='' color='#FF8A00' size='15'>blog</NavLink>
         <NavLink route='' color='#FF8A00' size='15'>about us</NavLink>
         <NavLink route='' color='#FF8A00' size='15'>contact</NavLink>
    </ElementWrapper>
    )
}

export default NavElements
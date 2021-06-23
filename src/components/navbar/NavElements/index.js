import React, {useState} from 'react';
import {ElementWrapper, NavBtn} from './style'
import {FaBars} from 'react-icons/fa'
import NavLink from '../NavLinks/index'

const NavElements= (props)=>{
    const [active, setActive] = useState(false)

    function handleActive(){
        setActive(!active)
    }

    return(
    <>
    <NavBtn onClick={handleActive}><FaBars /></NavBtn>
    <ElementWrapper active={active} LeftMargin={props.leftMargin} RightMargin={props.rightMargin}>
         <NavLink route='/' color='#FF8A00' size='15'>Home</NavLink>
         <NavLink route='' color='#FF8A00' size='15'>courses</NavLink>
         <NavLink route='' color='#FF8A00' size='15'>blog</NavLink>
         <NavLink route='' color='#FF8A00' size='15'>about us</NavLink>
         <NavLink route='' color='#FF8A00' size='15'>contact</NavLink>
    </ElementWrapper>
    </>
    )
}

export default NavElements
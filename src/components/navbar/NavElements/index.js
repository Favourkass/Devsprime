import React, {useState} from 'react';
import {ElementWrapper, NavBtn} from './style'
import {FaBars} from 'react-icons/fa'
import NavLink from '../NavLinks/index'
import Button from '../../button/index'
import CartNotification from '../../CartNotification/CartNotification'

const NavElements= (props)=>{
    const [active, setActive] = useState(false)

    function handleActive(){
        setActive(!active)
    }

    return(
    <>
    <NavBtn onClick={handleActive}><FaBars /></NavBtn>
    <ElementWrapper active={active} LeftMargin={props.leftMargin} RightMargin={props.rightMargin}>
         <NavLink route='/' color='#FF8A00' size='20px'>Home</NavLink>
         <NavLink route='/courses' color='#FF8A00' size='20px'>courses</NavLink>
         <NavLink route='/blogs' color='#FF8A00' size='20px'>blog</NavLink>
         <NavLink route='/about-us' color='#FF8A00' size='20px'>about us</NavLink>
         <NavLink route='/contact' color='#FF8A00' size='20px'>contact</NavLink>
         <CartNotification number= "12" />
         <Button label="Be A Contributor" primary medium/> 
         <Button label="Log In" primary medium/> 
    </ElementWrapper>
    </>
    )
}

export default NavElements
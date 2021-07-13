import React, {useState} from 'react';
import {ElementWrapper, NavBtn} from './style'
import {FaBars} from 'react-icons/fa'
import NavLink from '../NavLinks/index'
import Button from '../../button/index'
import CartNotification from '../../CartNotification/CartNotification'
import { Link } from 'react-router-dom';

const NavElements= (props)=>{
    const [active, setActive] = useState(false)

    function handleActive(){
        setActive(!active)
    }

    var isAuthenticated = false
    if(props.token !== undefined && props.token!==null){
        isAuthenticated=true;
    }

    
      const SignUp =   <Link to={`/signup`}><Button primary small>Sign Up</Button> </Link>
      const LogOut =   <Link to={""}><Button primary small>Log Out</Button> </Link>

      const LogIn = <Link to={`/login`}><Button primary small>Log In</Button> </Link>
     


    return(
    <>
    <NavBtn onClick={handleActive}><FaBars /></NavBtn>
    <ElementWrapper active={active} LeftMargin={props.leftMargin} RightMargin={props.rightMargin}>
         <NavLink route='/' color='#FF8A00' size='20px'>Home</NavLink>
         <NavLink route='/courses' color='#FF8A00' size='20px'>courses</NavLink>
         <NavLink route='/blogs' color='#FF8A00' size='20px'>blog</NavLink>
         <NavLink route='/about' color='#FF8A00' size='20px'>about us</NavLink>
         <NavLink route='/contact' color='#FF8A00' size='20px'>contact</NavLink>
         <CartNotification number= "12" />
         <Link to={`signup/instructor`}>
         <Button primary small>Become a Contributor</Button> 
         </Link>
        {isAuthenticated ? LogOut : LogIn}
        {SignUp} 
        
      
         
        
    </ElementWrapper>
    </>
    )
}

export default NavElements
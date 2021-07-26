import React, { useState } from "react";
import { ElementWrapper, NavBtn } from "./style";
import { FaBars } from "react-icons/fa";
import NavLink from "../NavLinks/index";
import Button from "../../button/index";
import CartNotification from "../../CartNotification/CartNotification";
import { Link } from "react-router-dom";
import UserDropDown from "../../userDropDown";

const NavElements = ({ token, cart, currentUser: { users } }, ...props) => {
  const [active, setActive] = useState(false);
  function handleActive() {
    setActive(!active);
  }
  //  if user do not sign in (Anonymous Nav)
  //  if user sign in as a Learner (Learner Nav)
  //   if user sign in and is an instructor

  const AnonymousNav = () => (
    <>
      <NavLink route="/courses" color="#FF8A00" size="20px">
        courses
      </NavLink>
      <NavLink route="/blogs" color="#FF8A00" size="20px">
        blog
      </NavLink>
      <NavLink route="/about" color="#FF8A00" size="20px">
        about us
      </NavLink>
      <NavLink route="/contact" color="#FF8A00" size="20px">
        contact Us
      </NavLink>
      <Link to={`/signup/instructor`}>
        <Button primary small>
          Become a Contributor
        </Button>
      </Link>
      <Link to={`/login`}>
        <Button primary small>
          Log In
        </Button>
      </Link>
      <Link to={`/signup`}>
        <Button primary small>
          Sign Up
        </Button>
      </Link>
    </>
  );

  const LearnerNav = () => (
    <>
      <NavLink route="/dashboard" color="#FF8A00" size="20px">
        Dashboard
      </NavLink>
      <NavLink route="/courses" color="#FF8A00" size="20px">
        courses
      </NavLink>
      <NavLink route="/blogs" color="#FF8A00" size="20px">
        blog
      </NavLink>
      <NavLink route="/about" color="#FF8A00" size="20px">
        about us
      </NavLink>
      <NavLink route="/contact" color="#FF8A00" size="20px">
        contact Us
      </NavLink>
      <NavLink route="/cart">
        <CartNotification number={cart.cart.length} />
      </NavLink>
      
      <UserDropDown imgSrc={users.data.avatar}/>
        <Button primary small handleClick={()=>{  localStorage.clear()
                window.location.href = '/login';
                }}>
          Log Out
        </Button>
     
    </>
  );

  const InstructorNav = () => (
    <>
      <NavLink route="/dashboard/instructor" color="#FF8A00" size="20px">
        Dashboard
      </NavLink>
      <NavLink route="/courses" color="#FF8A00" size="20px">
        courses
      </NavLink>
      <NavLink route="/blogs" color="#FF8A00" size="20px">
        blog
      </NavLink>
      <NavLink route="/about" color="#FF8A00" size="20px">
        about us
      </NavLink>
      <NavLink route="/contact" color="#FF8A00" size="20px">
        contact Us
      </NavLink>
        <Button primary small handleClick={()=>{  localStorage.clear()
            window.location.href = '/login';
        }}>
          Log Out
        </Button>
    </>
  );
  return (
    <>
      <NavBtn onClick={handleActive}>
        <FaBars />
      </NavBtn>

      <ElementWrapper
        active={active}
        LeftMargin={props.leftMargin}
        RightMargin={props.rightMargin}
      >
        {token && users && users.data && users.data.is_learner ? (
          <LearnerNav />
        ) : token && users && users.data && users.data.is_instructor ? (
          <InstructorNav />
        ) : (
          <AnonymousNav />
        )}
      </ElementWrapper>
    </>
  );
};

export default NavElements;


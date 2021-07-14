import React from "react";
import { Nav } from "./style";
import NavElements from "../NavElements/index";
import Logo from "../../logo/index";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = ({ token, currentUser }) => {
  return (
    <Nav>
      <div className="nav-items">
        <Link to={`/`}>
          <Logo />
        </Link>
        <NavElements
          rightMargin=""
          leftMargin="2.5px"
          token={token}
          currentUser={currentUser}
        />
      </div>
    </Nav>
  );
};

const mapStateToProps = (store) => ({
  token: store.login.token,
  currentUser: store.user,
});

export default connect(mapStateToProps, null)(NavBar);

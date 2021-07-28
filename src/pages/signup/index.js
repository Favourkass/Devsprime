import React, { useState, useEffect } from "react";
import FormWrapper from "./formWrapper";
import ImageDiv from "./imageDiv";
import { SignUpStyle, SignUpWrapper } from "./styles";
import NavBar from "../../components/navbar/NavBarWraper";
import Footer from "../../components/Footer";
import { useSelector } from 'react-redux'

import Modal from "./modal";

const SignUp = (props) => {
  
  const stateMessage = useSelector(state => state.signup.message)
  let [display,] = useState(false)

  const closeModal = () => {
    var check = document.getElementById("check");
    if (check) {
      check.style.display = "none";
    }
  }
  
  useEffect(() => {}, [props.message])

  return <div>
    <NavBar />
    <Modal display={display} stateMessage={stateMessage} onClick={closeModal} />
    <SignUpWrapper className="container">
      <SignUpStyle>
        <FormWrapper />
        <ImageDiv />
      </SignUpStyle>
    </SignUpWrapper>
    <Footer />
  </div>
};



export default SignUp;

import React, { useState } from "react";
import FormWrapper from "./formWrapper";
import ImageDiv from "./imageDiv";
import { SignUpStyle, SignUpWrapper } from "./styles";
import NavBar from "../../components/navbar/NavBarWraper";
import Footer from "../../components/Footer";
import store from "../../redux/store";


import Modal from "./modal";

const SignUpInstructor = () => {
  const [modal, setModal] = useState(false)
  const displayMsg = () => {
    const SuccessMsg = store.getState().signup.message
    if (SuccessMsg === "success") {
      setModal(true)
    }
  }
  store.subscribe(displayMsg)

  return <div>
    <NavBar />
    <Modal display={modal} onClick={()=>setModal(false)}/>
    <SignUpWrapper>
      <SignUpStyle >
        <FormWrapper />
        <ImageDiv />
      </SignUpStyle>
    </SignUpWrapper>
    <Footer />
  </div>
};

export default SignUpInstructor;

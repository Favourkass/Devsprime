import React from "react";
import FormWrapper from "./formWrapper";
import ImageDiv from "./imageDiv";
import { SignUpStyle, SignUpWrapper } from "./styles";
import NavBar from "../../components/navbar/NavBarWraper";
import Footer from "../../components/Footer";

const SignUp = () => (
  <div>
    <NavBar />
    <SignUpWrapper>
      <SignUpStyle className="container">
        <FormWrapper />
        <ImageDiv />
      </SignUpStyle>
    </SignUpWrapper>
    <Footer />
  </div>
);

export default SignUp;

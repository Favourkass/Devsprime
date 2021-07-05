import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from '../../../src/request';
import ImageDiv from "./imageDiv";
import Logo from "../../components/logo";
import Input from "../../components/Input";
import NavBar from "../../components/navbar/NavBarWraper";
import Footer from "../../components/Footer";
import { Button, MainStyle, TextField, SmallTextField, LogoPosition, FormStyle, CompressInputField, PositionButton, Container } from "./style";


const ForgotPassword = props => {
  const [email, setEmail] = useState('')
  const [submit, setSubmit] = useState('Proceed')

  const handleSubmit = async event => {
    event.preventDefault()
    setSubmit('Loading. . .')
    if (!email) {
      toast.error("Enter a valid email")
      setSubmit('Proceed')
      return
    }
    setEmail('')
    
    try {
      const response = await axios.post('/passwords/forgot/', {
        "email": email.trim(),
      });
      if (response.data.message === "success") {
        toast.success("A password reset mail has been sent to you")
        setTimeout(() =>  props.history.push("/verify/email/otp"), 5000)
        
      }
    } catch (err) {
      toast.error("User does not exist")
      setSubmit('Proceed')
    }

  }

  const handleChange = event => {
    setEmail(event.target.value)
    
  }

    return (
    <Container>
      <div className="nav-container">
        <NavBar />
      </div>
      <div className="container">
        <MainStyle>
          <FormStyle>
            <div className="form-wrapper">
              <LogoPosition>
                <Logo />
              </LogoPosition>
                <form onSubmit={handleSubmit} className="form">
                  <ToastContainer />
                  <TextField>Ok let’s fetch you ya’ login details</TextField>

                  <CompressInputField>
                    <Input
                      placeholder="Email Address"
                      type={"email"}
                      name="email"
                      value={email}
                      id="email"
                      onChange={handleChange}
                      className="input"
                    />
                  </CompressInputField>

                  <SmallTextField className="flex-end">
                    Already have an account?  <Link to="/signup" style={{color: '#FFC000', textDecoration: 'none', display: 'block', marginLeft: '4px'}}> Back to Sign Up</Link>
                  </SmallTextField>

                  <PositionButton>
                    <Button type="submit" primary large>
                      {submit}
                    </Button>
                  </PositionButton>
                </form>
            </div>
            
          </FormStyle>
          <ImageDiv />
        </MainStyle>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </Container>
  );
}

export default ForgotPassword;

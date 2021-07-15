import NavBar from "../../components/navbar/NavBarWraper/index";
import { Header, Paragraph } from "../../components/typography/index";
import {Parent, Divv, ImageDiv,ParentWrapper,TextArea, FormDiv} from './style'
import Input from "../../components/Input/index";
import Button from '../../components/button/index'
import Footer from "../../components/Footer/index"
import ErrorMsg from '../../pages/contact/errorMessage'
import validate from '../../pages/contact/validation';
import { Formik } from 'formik';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import emailjs from 'emailjs-com';



const initialValues = {Fullname:"", Country: "" , StreetAddress:"", City: "", Message:"" }
function ContactPage(contact) {
    
  return (
    <>
      <NavBar />
      <Parent className='container'>

        <Divv>
        <ToastContainer/>
          <Header
            className="small"
            children="24Hrs On Deck Customer Support "
            size="47"
          />
          <Paragraph
            children="We are at your call. We serve you always."
            size="17"
          />
        </Divv>

        <ImageDiv/>
      </Parent>
    
      <FormDiv className='container'>
      <Formik  
          initialValues = {initialValues}
          validationSchema={validate}
          
          onSubmit={ async(values, {resetForm}) => {
            try {
              const contact_form = document.getElementById('contact-form');    
              emailjs.sendForm('service_47fk6gp', 'template_3o6d1fe', contact_form,  'user_ThA0Tu3wL4iJAHSTVQTAQ')
              resetForm({})   
              toast.success("Email Sent") 
            } catch (error) {
              toast.error("An Error Occurred. Try Again")
            }
            
          }}
      >
        {({ values, errors, handleChange, handleSubmit}) =>(
          
          <form onSubmit={handleSubmit} id="contact-form">      
          <ParentWrapper className="container">    
          

              
              <Header className="small" children="Let's Talk!" size="40" weight="300"/>
              
              
              <Paragraph children="We will get back to you within 48hrs. Please leave a message." />
              
              
              <Input
                className="input"
                type="text"
                placeholder="Full Name"
                onChange={handleChange}
                name="Fullname"
                value={values.Fullname}
              />
            
              
              <ErrorMsg>{errors.Fullname}</ErrorMsg>

              
              <Input
                className="input"
                type="text"
                placeholder="Country/Region"
                onChange={handleChange}
                name="Country"
                value={values.Country}
                
              />
            
              
              <ErrorMsg>{errors.Country}</ErrorMsg>

              
              <Input
                className="input"
                type="text"
                placeholder="Street Address"
                onChange={handleChange}
                name="StreetAddress"
                value={values.StreetAddress}
              />
              
              
              <ErrorMsg>{errors.StreetAddress}</ErrorMsg>

              
              <Input
                className="input"
                type="text"
                placeholder="City"
                onChange={handleChange}
                name="City"
                value={values.City}
              />
            
              
              <ErrorMsg>{errors.City}</ErrorMsg>

             
              <TextArea
                className="input"
                rows="10"
                type="text"
                placeholder="Your Message"
                onChange={handleChange}
                name="Message"
                value={values.Message}
              />
            
              
              <ErrorMsg>{errors.Message}</ErrorMsg>
              

              <Button type="submit"primary medium width="100%">Send Message</Button>       
              
              
            </ParentWrapper>
            </form>
        )}
        </Formik>
        </FormDiv>
      <Footer/>
      
    </>
  );
}

export default ContactPage;

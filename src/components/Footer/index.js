import FooterWrapper from "./style"; 
import About from "./About";
import Contact from "./Contact";
import Quicklinks from "./Quicklinks";
import Terms from "./Terms"
import Policy from "./Policy";


const Footer = () => {
    return (          
        <FooterWrapper>  
            <About/>
            <Quicklinks/>
            <Contact/>
            <Terms/>
            <Policy/>        
        </FooterWrapper>
    );
} 
export default Footer;

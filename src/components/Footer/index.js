<<<<<<< HEAD
import FooterWrapper from "./style";
import About from "./About";
import Contact from "./Contact";
import Quicklinks from "./Quicklinks";
import Terms from "./Terms";
import Policy from "./Policy";

const Footer = () => {
  return (
    <FooterWrapper>
      <footer>
        <div>
          <About />
        </div>
        <div>
          <Quicklinks />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <Terms />
        </div>
       
      </footer>
      <div>
          <Policy />
        </div>
    </FooterWrapper>
  );
};
=======
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
>>>>>>> 679eaf0b898006da2d83b8dc46f671a81370c02e
export default Footer;

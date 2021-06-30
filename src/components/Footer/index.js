import FooterWrapper from "./style";
import About from "./About";
import Contact from "./Contact";
import Quicklinks from "./Quicklinks";
import Terms from "./Terms";
import Policy from "./Policy";

const Footer = () => {
  return (
    <FooterWrapper>
      <footer className='container'>
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
export default Footer;

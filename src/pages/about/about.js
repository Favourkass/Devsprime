import NavBar from "../../components/navbar/NavBarWraper/index";
import { Header, Paragraph } from "../../components/typography/index";
import { Link } from "react-router-dom";
import LetsTalk from "./CallToAction/index";
import IconData from "../../pages/about/icon";
import {
  Hero,
  Heading,
  MainContainer,
  ImageContainer,
  HeroImage,
  StatisticDiv,
  StaticRows,
  SectionDiv4,
  Wrapper2,
  BoxDiv,
  Box1,
  Box2,
  Box3,
  Box4,
  Box5,
  Box6,
  Box7,
  Hero2,
  Heading2,
  Hero3,
  Heading3,
  ImageContainer3,
  HeroImage3,
  Iconsmalldiv,
  Icon1
  
} from "./style";
import Footer from "../../components/Footer/index";
import Button from "../../components/button";
import StatisticCard from "../../components/statisticCard/index";
import StatisticData from "../../components/statisticCard/data";


function AboutPage() {
  return (
    <>
     <MainContainer>
      <NavBar />
      <Hero className="container">
        {/* <div className="container"> */}
          <div className="hero-cont">
            <Heading>
              <Header className="small" size="35">
              We’re DevsPrime<br/> An E-Learning Platform From Nigeria
              </Header>
              <Paragraph size="14" color="black" lineHeight="1.4">
              We are at your call. We serve you always.
              </Paragraph>
            </Heading>

            <ImageContainer3>
              <HeroImage
                src={
                  "https://res.cloudinary.com/devsprime/image/upload/v1626340616/media/About-usnkhwu8kpliplc6tgexyd-removebg-preview_dgwhaa.png"
                }
              />
            </ImageContainer3>
          </div>
          <div></div>
        {/* </div> */}
      </Hero>
      <LetsTalk />

      <Hero3>
        <div className="container">
          <div className="hero-cont">
            <Heading3>
              <Header className="small" size="35">
              Customer Insight,<br/>Professional Support
              </Header>
              <Paragraph size="14" color="black" lineHeight="1.4">
              DevsPrime is an online education platform that delivers video courses, programs and resources for Individual, Advertising & Media Specialist, Online Marketing Professionals, Freelancers and anyone looking to pursue a career in digital marketing, Accounting, Web development, Programming. Multimedia and CAD design.
              </Paragraph>
              <Iconsmalldiv>
            {IconData.map((icon, index) => {
              return <Icon1 src={icon.img} key={index}></Icon1>;
            })}
          </Iconsmalldiv>
            </Heading3>

            <ImageContainer>
              <HeroImage3
                src={
                  "https://res.cloudinary.com/devsprime/image/upload/v1626340616/media/About-usnkhwu8kpliplc6tgexyd-removebg-preview_dgwhaa.png"
                }
              />
            </ImageContainer>
          </div>
        </div>
      </Hero3>



     <StatisticDiv>
        <StaticRows className="container">
        {StatisticData && StatisticData.map((data, id) => (
          <div className="static-card">
           <StatisticCard className='statisticCard' key={id} data={data} />
          </div>
        ))}
        </StaticRows>
        </StatisticDiv> 

       <SectionDiv4>
        <div className="container">

        <Wrapper2>
          <Header className="small"
            children="Meet Our Creative Team"
            size="30">
            Meet Our Creative <br/>Team
            </Header>
          
          <Paragraph
            className="smallWrite"
            color="black"
            children="Devsprime is an online education platform that delivers video courses, programs and resources for Individual, Advertising & Media Specialist, Online Marketing Professionals, Freelancers and anyone looking to pursue a career in digital marketing, Accounting, Web development, Programming. Multimedia and CAD design."
            size="14"
            />
        </Wrapper2>
        <BoxDiv>
          <Box1>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1624388694/media/landing_page2_rarktv.jpg"
              alt="i"
              />
          </Box1>
          <Box2>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1624388658/media/instructor2_l6yq0q.jpg"
              alt="i"
              />
          </Box2>
          <Box3>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1622650322/samples/bike.jpg"
              alt="i"
              />
          </Box3>
          <Box4>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1624388694/media/landing_page2_rarktv.jpg"
              alt="i"
              />
          </Box4>
          <Box5>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1625172039/media/login_vhnhjk.jpg"
              alt="i"
            />
          </Box5>
          <Box6>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1625165467/media/sign-up_oupxcs.jpg"
              alt="i"
              />
          </Box6>
          <Box7>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1624388694/media/landing_page2_rarktv.jpg"
              alt="i"
            />
          </Box7>
        </BoxDiv>
      </div>
      </SectionDiv4> 

      <Hero2>
        <div className="container">
          <div className="hero-cont">
            <Heading2>
              <Header className="small" size="35" color="white">
           
              Let’s Build Something<br/>Great Together
              </Header>
              <Paragraph size="14" color="white" lineHeight="1.4">
              Devsprime is an online education platform that delivers video courses, programs and resources for Individual,
              </Paragraph>
              <Link to="/contact">
                <Button>Let's Talk</Button>
              </Link>
            </Heading2>
          </div>
        </div>
      </Hero2> 
    
      <Footer />
      </MainContainer>
    </>
  );
}

export default AboutPage;


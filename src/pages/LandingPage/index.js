import NavBar from "../../components/navbar/NavBarWraper/index";
import { Header, Paragraph } from "../../components/typography/index";
import { CoursesContainer } from "./CourseList";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCourses } from "../../redux/actions/all_courses.action";
import LetsTalk from "./CallToAction/index";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import {
  Hero,
  Heading,
  SectionDiv,
  WriteUpDiv,
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
  MainContainer,
  ImageContainer,
  HeroImage,
  FlexedDiv,
  Image,
} from "./style";
import Footer from "../../components/Footer/index";
import Button from "../../components/button";
import StatisticCard from "../../components/statisticCard/index";
import StatisticData from "../../components/statisticCard/data";
import IconDivs from "./IconDiv";

function LandingPage({ courseData, fetchCourses }) {
  console.log(courseData);

  useEffect(fetchCourses, [fetchCourses]);

  return (
    <MainContainer>
      {/* Header start */}
      <NavBar />
      <Hero>
        <div className="container">
          <div className="hero-cont">
            <Heading>
              <Header className="small" size="35" color="white">
                Get Access to Unlimited Educational Resources. Everywhere, Every
                time!
              </Header>
              <Paragraph size="14" color="white" lineHeight="1.4">
                Premium Access to More Than 10,000 Resources Ranging From
                Courses, Events e.t.c.
              </Paragraph>
              <Link to="/courses">
                <Button>Discover</Button>
              </Link>
            </Heading>

            <ImageContainer>
              <HeroImage
                src={
                  "https://res.cloudinary.com/devsprime/image/upload/v1624964995/media/landing_page2_rarktv-removebg-preview_nljver.png"
                }
              />
            </ImageContainer>
          </div>
        </div>
      </Hero>
      {/* Header end */}

      {/* Learn a skill starts */}
      <SectionDiv>
        <IconDivs />

        <FlexedDiv>
          <div className="img-container">
            <Image
              src="https://res.cloudinary.com/devsprime/image/upload/v1622650327/samples/imagecon-group.jpg"
              alt="our image"
            />
          </div>

          <WriteUpDiv className="container">
            <Header
              className="small"
              children="Learn A Skill."
              size="30"
              lineHeight="15px"
              weight="400"
            />
            <Header
              className="small"
              children="Build Your Porfolio"
              size="30"
              weight="400"
              lineHeight="15px"
            />
            <Header
              className="small"
              children="Get Hired"
              size="30"
              lineHeight="10px"
            />
            <Paragraph
              className="smallWrite"
              children="Devsprime is an online education platform that delivers video courses, programs and resources for Individuals, Advertising & Media Specialists, Online Marketing Professionals, Freelancers and anyone looking to pursue a career in Digital Marketing, Accounting, Web development, Programming. Multimedia and CAD Design."
              size="14"
            />
            <Link to="/courses">
              <Button
                type="button"
                small="small"
                color="white"
                primary="white"
                width="150px"
                style={{ background: "white" }}
              >
                Discover
              </Button>
            </Link>
          </WriteUpDiv>
        </FlexedDiv>
      </SectionDiv>
      {/* Learn a skill ends */}

      {/* Success Stories  */}
      <SectionDiv4>
        <div className="container">

        <Wrapper2>
          <Header
            className="small"
            children="Success Stories"
            size="30"
            color="white"
            />
          <Header
            className="small"
            children="From Our Students"
            size="30"
            color="white"
            />
          <Header
            className="small"
            children="WorldWide!"
            size="30"
            color="white"
            />
          <Paragraph
            className="smallWrite"
            color="white"
            children="Devsprime is an online education platform that delivers video courses, programs and resources for Individual, Advertising & Media Specialist, Online Marketing Professionals, Freelancers and anyone looking to pursue a career in digital marketing, Accounting, Web development, Programming. Multimedia and CAD design."
            size="14"
            />
          <Link to="/courses">
            <Button>Discover</Button>
          </Link>
        </Wrapper2>
        <BoxDiv>
          <Box1>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1624389006/media/our_team_hedvdn.jpg"
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
              src="https://res.cloudinary.com/devsprime/image/upload/v1624388846/media/our_team2_tjlrvv.jpg"
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
              src="https://res.cloudinary.com/devsprime/image/upload/v1622650322/samples/bike.jpg"
              alt="i"
            />
          </Box7>
        </BoxDiv>
      </div>
      </SectionDiv4>

      {/* Success Stories ends */}

      {/* <CoursesContainer /> */}
      <CoursesContainer courses={courseData} />

      <StatisticDiv>
        <StaticRows className="container">
        {StatisticData && StatisticData.map((data, id) => (
          <div className="static-card" key={id}>
           <StatisticCard className='statisticCard' key={id} data={data} />
          </div>
        ))}
        </StaticRows>
        </StatisticDiv>
        
      <Testimonials />

      <LetsTalk />

      <Footer />
    </MainContainer>
  );
}

const mapStateToProps = (store) => ({
  courseData: store.all_courses.courses,
});

export default connect(mapStateToProps, { fetchCourses })(LandingPage);

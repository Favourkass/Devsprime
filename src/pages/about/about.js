import NavBar from "../../components/navbar/NavBarWraper/index";
import { Header, Paragraph } from "../../components/typography/index";
import {
  Parent,
  Divv,
  ImageDiv,
  SectionDiv,
  IconDiv,
  WritrUpDiv,
  SectionDiv2,
  WritrUpDiv2,
  IconDiv2,
  SvgImage2,
  Iconsmalldiv,
  Icon1,
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
  Box8,
  Last,
  Wrapper,
  ImageTag,
} from "./style";
import IconData from "../../pages/about/icon";
import Footer from "../../components/Footer/index";
import Button from "../../components/button";
import StatisticCard from "../../components/statisticCard/index";
import StatisticData from "../../components/statisticCard/data";


function AboutPage() {
  return (
    <>
      <NavBar />

      <Parent >
        <Divv>
          <Header
            className="small"
            children="We’re DevsPrime
            An E-Learning Platform From Nigeria"
            size="47"
          />
          <Paragraph
            children="We are at your call. We serve you always."
            size="14"
          />
        </Divv>

        <ImageDiv></ImageDiv>
      </Parent>



      <SectionDiv>
        <IconDiv>
          <ImageTag src="https://res.cloudinary.com/devsprime/image/upload/v1624388681/media/about_us_fxfih5.jpg"></ImageTag>
        </IconDiv>

        <WritrUpDiv>
          <Header
            className="small"
            children="We’re a Team."
            size="30"
            weight="400"
          />
          <Header
            className="small"
            children="We’re a Family."
            size="30"
            weight="400"
          />
          <Header className="small" children="We’re DevsPrime!" size="30" />
          <Paragraph
            className="smallWrite"
            children="DevsPrime is an online education platform that delivers video courses, programs and resources for Individual, Advertising & Media Specialist, Online Marketing Professionals, Freelancers and anyone looking to pursue a career in digital marketing, Accounting, Web development, Programming. Multimedia and CAD design."
            size="14"
          />
          <Button type="button" small="small" primary="white">
            Say Hello
          </Button>
        </WritrUpDiv>
      </SectionDiv>






      <SectionDiv2 >
        <WritrUpDiv2>
          <Header
            className="small"
            children="Customer Insight,"
            size="30"
            weight="400"
          />
          <Header className="small" children="Professional Support" size="30" />
          <Paragraph
            className="smallWrite"
            children="DevsPrime is an online education platform that delivers video courses, programs and resources for Individual, Advertising & Media Specialist, Online Marketing Professionals, Freelancers and anyone looking to pursue a career in digital marketing, Accounting, Web development, Programming. Multimedia and CAD design."
            size="14"
          />
          <Iconsmalldiv>
            {IconData.map((icon, index) => {
              return <Icon1 src={icon.img} key={index}></Icon1>;
            })}
          </Iconsmalldiv>
        </WritrUpDiv2>

        <IconDiv2>
          <SvgImage2 src="https://res.cloudinary.com/devsprime/image/upload/v1625094795/Icons%20and%20Logo/Image_Placeholder_2_znn0o3.svg"></SvgImage2>
        </IconDiv2>
      </SectionDiv2>




       <StatisticDiv>
        <StaticRows >
          {StatisticData.map((data, id) => {
            return <StatisticCard key={id} data={data} />;
          })}
        </StaticRows>
      </StatisticDiv>

      <SectionDiv4>
        <Wrapper2>
          <Header className="small" children="Meet Our Creative" size="30" />
          <Header className="small" children="Team" size="30" />
          <Paragraph
            className="smallWrite"
            children="Devsprime is an online education platform that delivers video courses, programs and resources for Individual, Advertising & Media Specialist, Online Marketing Professionals, Freelancers and anyone looking to pursue a career in digital marketing, "
            size="14"
          />
        </Wrapper2>
        <BoxDiv>
          <Box1>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1624389006/media/our_team_hedvdn.jpg"
              alt="1"
            />
          </Box1>
          <Box2>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1624388846/media/our_team2_tjlrvv.jpg"
              alt="1"
            />
          </Box2>
          <Box3>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1624388681/media/about_us_fxfih5.jpg"
              alt="1"
            />
          </Box3>
          <Box4>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1624388846/media/our_team2_tjlrvv.jpg"
              alt="1"
            />
          </Box4>
          <Box5>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1624388846/media/our_team2_tjlrvv.jpg"
              alt="1"
            />
          </Box5>
          <Box6>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1624389006/media/our_team_hedvdn.jpg"
              alt="1"
            />
          </Box6>
          <Box7>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1624388846/media/our_team2_tjlrvv.jpg"
              alt="1"
            />
          </Box7>
          <Box8>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://res.cloudinary.com/devsprime/image/upload/v1624389006/media/our_team_hedvdn.jpg"
              alt="1"
            />
          </Box8>
        </BoxDiv>
      </SectionDiv4>

      <Last>
        <Wrapper>
          <Header
            className="small"
            children="Let’s Build Something"
            size="30"
            color="white"
          />
          <Header
            className="small"
            children="Great Together"
            size="30"
            color="white"
          />
          <Paragraph
            className="smallWrite"
            children="Devsprime is an online education platform that delivers video courses, programs and resources for Individual,"
            size="14"
            color="white"
          />
          <Button type="button" small="small" secondary="white">
            Lets Talk
          </Button>
        </Wrapper>
      </Last>

      <Footer />
    </>
  );
}

export default AboutPage;


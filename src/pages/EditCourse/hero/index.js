import {
  HeroPage,
  HeroContainer,
  HeroText,
  ImageContainer,
  Image,
} from "./style";

const Hero = (props) => {
  return (
    <HeroPage>
      <HeroContainer className="container">
        <HeroText>
          <h3 className="welcome">
            Supercharge the knowledge bank of learners
          </h3>
          <p>Edit Course</p>
        </HeroText>
        <ImageContainer>
          <Image src="https://res.cloudinary.com/devsprime/image/upload/v1624968193/media/blog2_oyuoqk-removebg-preview_tnorl6.png" />
        </ImageContainer>
      </HeroContainer>
    </HeroPage>
  );
};
export default Hero;

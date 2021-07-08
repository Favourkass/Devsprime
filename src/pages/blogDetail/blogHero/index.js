import { HeroPage,
  HeroContainer,
  HeroText,
  ImageContainer,
  Image } from "./style"

const Hero = (props) => {
  return(
    <HeroPage>
      <HeroContainer className='container'>
        <HeroText>
          <h3 className="welcome">{props.Header}</h3>
          <p>{props.Author}</p>
        </HeroText>
        <ImageContainer>
          <Image src={props.blogImage} alt="blog Image"/>
        </ImageContainer>
      </HeroContainer>
    </HeroPage>
  )
}
export default Hero;
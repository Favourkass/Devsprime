import Button from "../../../components/button";
import { Link } from "react-router-dom";
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
          <h3 className="welcome">Welcome to Our Forever Updated Blog Post</h3>
          <p>Be informed! Never miss a single Post</p>
          <Link to={`${props.path}/createblog`}>
            <Button primary className="button" children="Post a Blog" width="150px"/>
          </Link>
        </HeroText>
        <ImageContainer>
          <Image src='https://res.cloudinary.com/devsprime/image/upload/v1624968193/media/blog2_oyuoqk-removebg-preview_tnorl6.png' />
        </ImageContainer>
      </HeroContainer>
    </HeroPage>
  )
}
export default Hero;

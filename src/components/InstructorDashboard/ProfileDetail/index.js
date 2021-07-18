import { Container, ProfileImage, InstructorName, InstructorDescription, SocialMediaLinks} from './style';


const ProfileDetail = (props) => {
    return (
      <Container>
        <ProfileImage src={props.avatar} alt="instructor-avatar" />
        <InstructorName>{props.instructorName}</InstructorName>
        <InstructorDescription>{props.instructorDescription}</InstructorDescription>
  
        <SocialMediaLinks>
          <a href={props.facebookLink} target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/devsprime/image/upload/v1624927377/Icons%20and%20Logo/facebook-logo_vnedqz.png"
              alt="facebook"
            />
          </a>
          <a href={props.instagramLink} target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/devsprime/image/upload/v1624927377/Icons%20and%20Logo/instagram-logo_l7uhjj.png"
              alt="instagram"
            />
          </a>
          <a href={props.twitterLink} target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/devsprime/image/upload/v1624927377/Icons%20and%20Logo/twitter-logo_dcaurw.png"
              alt="twitter"
            />
          </a>
        </SocialMediaLinks>
      </Container>
    );
  };
  
  export default ProfileDetail;
  
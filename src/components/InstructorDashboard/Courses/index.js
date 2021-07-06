import { Card, Tier, Image, TitleContainer, Title } from './style';

const Courses = (props) => {
    return (
        <Card>
          <Tier>{props.tier}</Tier>
          <Image src={props.coverImage} />
          <TitleContainer>
            <Title>{props.courseTitle}</Title>
          </TitleContainer>
        </Card>
    );
  };
 
  export default Courses;
  
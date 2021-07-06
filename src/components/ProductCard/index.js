import {
  Card,
  Tier,
  Image,
  TitleContainer,
  Title,
  CardContainer,
} from "./style";
import Progress from "../ProgressBar";
const CoursesContainer = (props) => {
  return (
    <CardContainer>
      <Card>
        <Tier>{props.tier} </Tier>
        <Image src={props.image} />
        <TitleContainer>
          <Title>{props.title}</Title>

          <Progress done={20} />
        </TitleContainer>
      </Card>
    </CardContainer>
  );
};
export default CoursesContainer;

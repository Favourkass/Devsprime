import ImageComponent from "./image";
import { Paragraph } from "../typography";
import { Container } from "./style";

const DashboardDetail = (props) => {
  return (
    <>
      <Container>
        <div className="img-text">
          <div className="img">
            <ImageComponent image={props.image} alt={props.alt} />
          </div>

          <Paragraph className="text">{props.detail} </Paragraph>
        </div>
        <div className="contents">
          <Paragraph>{props.category} </Paragraph>
          <Paragraph>{props.status} </Paragraph>
          <Paragraph>{props.teacher} </Paragraph>
          <Paragraph>{props.date} </Paragraph>
        </div>
      </Container>
    </>
  );
};

export default DashboardDetail;

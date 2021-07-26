import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin: 50px auto;
`;

const FormFieldContainer = styled.div`
  width: 90%;
`;

const FieldStyle = {
  background: "#FFF",
  border: "1px solid #EFEFEF",
  borderRadius: "15px",
  width: "100%",
  outline: "none",
  padding: "15px",
  fontSize: "16px",
};

const VideoFieldStyle = {
  background: "#FFF",
  border: "1px solid #EFEFEF",
  borderRadius: "15px",
  width: "90%",
  outline: "none",
  padding: "15px",
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "30px",
};

const Label = styled.label`
  font-size: 16px;
  margin-left: 5px;
`;

const ButtonContainerStyle = { marginBottom: "-5px" };

const ButtonContainer = styled.div`
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`;

const ErrorStyle = styled.small`
  color: #ff0000;
  display: inline-block;
  margin-bottom: 20px;
  text-align: left;
  margin-left: 20px;
`;

const HeaderText = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;

const addCourseVideoStyle = {
  cursor: "pointer",
  background: "linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%)",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const VideoDeleteButton = styled.button`
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const VideoContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 90%;
`;

const VideoCardItem = styled.li`
  display: flex;
  padding: 1rem;
  min-width: 350px;
  max-width: 350px;
  @media (min-width: 40rem) {
    .cards_item {
      width: 50%;
    }
  }
  @media (min-width: 56rem) {
    .cards_item {
      width: 33.3333%;
    }
  }
`;

const VideoCard = styled.div`
  background-color: #ff8a00;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const VideoCardTitle = styled.h2`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
  padding-top: 1rem;
  padding-left: 1rem;
`;

const VideoCardText = styled.p`
  max-width: 80%;
  color: white;
  padding-left: 1rem;
`;

export {
  ErrorStyle,
  Container,
  Label,
  FormFieldContainer,
  FieldStyle,
  VideoFieldStyle,
  ButtonContainerStyle,
  ButtonContainer,
  HeaderText,
  addCourseVideoStyle,
  VideoDeleteButton,
  VideoContainer,
  VideoCardItem,
  VideoCard,
  VideoCardTitle,
  VideoCardText,
};

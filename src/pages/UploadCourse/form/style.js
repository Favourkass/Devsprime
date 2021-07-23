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
  width: "100%",
  outline: "none",
  padding: "15px",
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "30px"
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

export {
  ErrorStyle,
  Container,
  Label,
  FormFieldContainer,
  FieldStyle,
  VideoFieldStyle,
  ButtonContainerStyle,
  ButtonContainer,
};

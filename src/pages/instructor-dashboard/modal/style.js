import styled from "styled-components";

const modalStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px"
  },
};

const closeButtonStyles = {
  top: "3%",
  right: "3%",
  position: "absolute",
  background: "#FF8A00",
  color: "white",
  border: "none",
  outline: "none",
  cursor: "pointer"
};

const FormFieldContainer = styled.div`
    width: 90%;
`;

const FieldStyle = {
    background: "#FFF",
    border: "1px solid #EFEFEF",
    borderRadius: "5px", 
    width: "100%",
    outline: "none",
    padding: "7px",
    fontSize: "12px",
}

const Label = styled.label`
    font-size: 13px;
    margin-left: 5px;
`;

const ButtonContainerStyle = { marginBottom: "-5px" }

const ErrorStyle = styled.small`
  color: #ff0000;
  display: inline-block;
  margin-bottom: 20px;
  text-align: left;
  margin-left: 20px;
`;

export { ErrorStyle, modalStyles, closeButtonStyles, Label, FormFieldContainer, FieldStyle, ButtonContainerStyle};

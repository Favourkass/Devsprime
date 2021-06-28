import styled from "styled-components";


const Section = styled.div`
  box-sizing: border-box;
  background: linear-gradient(
    253.58deg,
    ${(props) =>
        props.leftGradientColor ? props.leftGradientColor : "#ffc000"}
      1.55%,
    ${(props) =>
        props.rightGradientColor ? props.rightGradientColor : "#ff8a00"}
      95.8%
  );
  padding-left: 30px;
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 20px;
  color: white;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  width: 100%;
`;

const Input = styled.input`
  width: 80%;
  color: white;
  background: linear-gradient(
    253.58deg,
    ${(props) =>
        props.leftGradientColor ? props.leftGradientColor : "#ffc000"}
      1.55%,
    ${(props) =>
        props.rightGradientColor ? props.rightGradientColor : "#ff8a00"}
      95.8%
  );
  font-size: 14px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  margin-left: 30px;
  margin-top: 5px;
  margin-bottom:5px;
  outline: none;
  background:none;
  &::placeholder {
    color: white;
    font-size: 14px;
  }
`;

const Hr = styled.hr`
  margin:0;
  padding:0;
  height: 1px;
  background-color: #ffffff;
  border: none;
`;

const Icon = styled.img`
  height:20px;
  margin-bottom:-4px;
`;

export {Section, Input, Hr, Icon}


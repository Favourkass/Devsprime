import styled from "styled-components";

const SmallWrapper = styled.div`
  padding: 20px;
  width: 90%;
  color: #5c5c5c;
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
`;

const InputStyle = styled.input`
  padding: 15px 25px;
  border-radius: 50px;
  border: solid 1px #efefef;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  @media only screen and (max-width: 560) {
    width: 90%;
  }
`;

const SignUpStyle = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 2.5rem;
`;

const ImageDivStyle = styled.div`
  flex: 1;
  background: url("https://res.cloudinary.com/devsprime/image/upload/v1625165467/media/sign-up_oupxcs.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100%;
  align-items: center;

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

const YellowBack = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  color: #fff;
  padding:40px;
  text-align: center;
  background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,0.8729692560617998) 0%, rgba(0,0,0,0) 100%);
`;
const FormStyle = styled.div`
  background: #fff7df;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  align-items: center;
  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;
const BackgroundImg = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  background: url("https://res.cloudinary.com/devsprime/image/upload/v1625131139/media/Element_02_pi5fvf.png");
  bottom: 0;
  left: 0;
  background-size: cover;
`;

const BackgroundCircle = styled.div`
  background: #ff8a00;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  top: -100px;
  left: -100px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin: 5rem 0 8rem 0;
`;

const FormContainer = styled.div`
  width: 80%;
  margin: auto;
`;

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorStyle = styled.small`
  color: #ff0000;
  display: inline-block;
  margin-bottom: 20px;
  text-align: left;
  margin-left: 20px;
`;

const Link = styled.a`
  color: #ff8a00;
`;

const SignUpWrapper = styled.div`
  padding: 80px;

  @media only screen and (max-width: 850px) {
    padding: 40px;
  }
`;

export {
  SmallWrapper,
  InputStyle,
  SignUpStyle,
  TextWrapper,
  YellowBack,
  ImageDivStyle,
  FormStyle,
  FormContainer,
  Forms,
  ErrorStyle,
  Container,
  BackgroundImg,
  BackgroundCircle,
  Link,
  SignUpWrapper,
};

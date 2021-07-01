import FormDiv from "./form";
import SmallText from "./smallText";
import Logo from "../../components/logo";

import {
  FormStyle,
  FormContainer,
  Container,
  BackgroundImg,
  BackgroundCircle,
} from "./styles";

const FormWrapper = () => (
  <FormStyle>
    <BackgroundCircle />
    <Container>
      <Logo />
      <SmallText>Create your account here</SmallText>

      <FormContainer>
        <FormDiv />
      </FormContainer>
    </Container>

    <BackgroundImg />
  </FormStyle>
);

export default FormWrapper;

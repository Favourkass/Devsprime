import styled from "styled-components";
import Button from '../../components/button';


const BackBtnAnchor = styled.a`
  color: #ffff;  
  padding:auto;

    `;

const BackArrow = styled.img`
    `;

const BackText = styled.span`
  font-size: 15px;
  color: black;
    `;

const PaymentOptionLogo = styled.img`
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  ${(props) =>
        props.checked &&
        ` 
    &:checked + ${RadioButtonLabel} {
      background: #ffff;
      border: 1px solid #FFC000;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 6px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: #FFC000;
      }
    }
  `}
`;

export const MainBody = styled.div`
  position: relative;
  margin: auto;
  margin-top: 20px;
  padding: .5em;
  background: #FFF7DF;
  background-size: contain;
 height: 100%;
 overflow-x: hidden;
    `;

export const TitleHeader = styled.h3`
padding-top: 1em;
text-align: center;
font-size: 18px;
color: rgba(92, 92, 92, 1);
;
`
export const MainWrapper = styled.div`
.cart-cont{
  margin-top: 5rem;
  margin-bottom: 7rem;
}
    `;

const ActionBtnSection = styled.div`
  position: relative;
  margin: 5em;
  right: -70%;
   @media (max-width: 768px) {
    margin: 50px 5px auto 5px;
    right: -60%; 
}
    `;

export const PaymentOptionWrapper = styled.div`
position: relative;
margin: 5em;
@media (max-width: 768px) {
    margin: 50px 5px auto 5px; 
}
  `;

export const BackBtn = ({ url, src, text }) => {
    return (
        <BackBtnAnchor href={url}>
            <BackArrow src={src} alt={text} /> &ensp;<BackText>{text}</BackText>
        </BackBtnAnchor>
    );
};

export const PaymentOption = ({ onChangeHandler, label, logo, value, select }) => {
    return (
        <Item>
            <RadioButton
                type="radio"
                name={'payment'}
                id={'payment'}
                value={value}
                checked={select === value}
                onChange={(event) => onChangeHandler(event)}
            />
            <RadioButtonLabel />
            &ensp;<div>{label}</div>
            &ensp;<PaymentOptionLogo src={logo} alt={'payment'} />
        </Item>
    );
};

export const ActionBtn = ({ onClickHandler, label }) => {
    return (
        <ActionBtnSection id="actionBtn">
            <Button primary medium handleClick={() => onClickHandler()} >{label}</Button>
        </ActionBtnSection>
    );
};

export const ContinueBtn = ({ onClickHandler, label }) => {
    return (
        <ActionBtnSection id="continueBtn" style={{ display: 'none', right: '-25%' }}>
            <Button primary medium handleClick={() => onClickHandler()} >{label}</Button>
        </ActionBtnSection>
    );
};

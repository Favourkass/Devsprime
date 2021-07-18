import styled, {css} from 'styled-components'

const ButtonWrapper = styled.button`
    color: #FFC000;
    box-sizing:border-box;
    background: "white";
    padding: 12px 30px;
    border-radius: 100px;
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
    border: none;
    margin:2.5px;
    font-weight:bold;
    cursor: pointer;
    width:${props => props.width ? props.width : 'auto'};
    ${({primary}) => primary && css`
    color: #FFFFFF;
    background:linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);
    `}
    ${({medium}) => medium && css`
    padding: 20px 65px;
    `}
    ${({large}) => large && css`
    padding: 20px 115px;
    `}
    ${({disabled}) => disabled && css`
    opacity: 0.5;
    `}
    @media (max-width:768px) {
    padding:15px 30px;
  }
`;

export default ButtonWrapper;
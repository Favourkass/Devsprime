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
    cursor: pointer;
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
    @media (max-width:768px) {
    flex-direction: column;
    transform: scale(0.8);
  }
`;

export default ButtonWrapper;
import styled, {css} from "styled-components"

export const Container = styled.div`
    width: 100%;
`

export const MainStyle = styled.div`
    display:flex;
    height: 65vh;
    background:#FFF7DF;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    margin: 5rem 0 8rem 0;
`

export const FormStyle = styled.div`
flex:1;
display: flex;
justify-content: center;

.form-wrapper{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    .form{
        width: 100%;
    }
    }
`
export const TextField = styled.div`
    color: #5C5C5C;
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    font-size: 14px;
    line-height: 17px;
`
export const SmallTextField = styled.div`
    color: #5C5C5C;
    display: flex;
    justify-content: flex-end; 
    margin-top: 15px;
    margin-bottom: 24px;
    font-size: 12px;
`

export const Text = styled.text`
    position:relative;
    font-size: 12px;
    margin-left: 150px;
    color: #5C5C5C;
`
export const LogoPosition = styled.div`
    margin-bottom: 1rem;
`

 
export const CompressInputField = styled.div`
    display: flex;
    justify-content: center;
    .input{
        height: 18px;
        width: 100%;
    }
`
export const PositionButton = styled.div`
    display: flex;
    justify-content: center;
    height: 60px;
    `
    
    export const Button = styled.button`
    color: #FFC000;
    background: "white";
    font-weight : bold;
    font-size: 14px;
    line-height: 17px;
    padding: 12px 30px;
    width: 100%;
    border-radius: 100px;
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
    border: none;
    cursor: pointer;
    ${({primary}) => primary && css`
    color: #FFFFFF;
    background:linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);
    `}
`;

export const ErrorPosition = styled.div`
    display: flex;
    color: red;
    padding: 5px 0;
    justify-content: flex-end;
`

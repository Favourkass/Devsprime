import styled, {css} from "styled-components"

export const LoginDiv = styled.div`
// background: linear-gradient(253.58deg, #FFC000 80.55%, #FF8A00 99.8%);
width: 100%;
.nav-container{
    // margin-bottom: 5rem;
}
`

export const SignUpStyle = styled.div`
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
`

export const SignUpText = styled.text`
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
        height: 0px;
        width: 100%;
    }
`
export const PositionButton = styled.div`
    display: flex;
    justify-content: center;
    `
    
    export const Button = styled.button`
    color: #FFC000;
    background: "white";
    padding: 12px 30px;
    width: 100%;
    border-radius: 100px;
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
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

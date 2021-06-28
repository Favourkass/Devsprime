import styled from "styled-components"


const Inputs = styled.input`
    background: ${({size})=>size==="small"?"#FFF7DF":"#FFFFFF"};
    border: 1px solid #EFEFEF;
    border-radius: 100px;    
    outline: none;
    width: ${({size})=>size==="small"?"335px":"423px"};
    height: 35px;
    padding: 20px;
    margin-bottom: 8px;
    font-family: Proxima Nova;
    font-size: 14px;
    line-height: 17px;
    color: #5C5C5C;
    @media (max-width:700px){
    transform:scale(0.8,0.95);}
    @media (max-width:600px){
    transform:scale(0.65,0.68);}
    @media (max-width:500px){
    transform:scale(0.49,0.6);}    
    @media (max-width:400px){
    transform:scale(0.48,0.48);}
    @media (max-width:350px){
    transform:scale(0.43,0.47);
    }
`
export default Inputs;


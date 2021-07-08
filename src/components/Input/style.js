import styled from "styled-components"


const Inputs = styled.input`
    background: ${({ size }) => size === "small" ? "#FFF7DF" : "#FFFFFF"};
    border: 1px solid #EFEFEF;
    border-radius: 100px; 
    width: 100%;   
    outline: none;
    padding: 20px;
    font-size: 14px;
    line-height: 17px;

    
`
export default Inputs;


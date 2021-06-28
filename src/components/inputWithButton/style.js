import styled from "styled-components";

const InputStyle = styled.input`
    background:#fff;
    color:#5c5c5c;
    padding:15px 20px;
    border-radius:50px;
    box-shadow: 0px 0px 12px rgba(160, 121, 0, 0.2);
    border: solid 1px #EFEFEF;
    width:100%;
    box-sizing:border-box;
    outline:none;
`

const FormWrapper = styled.div`
    box-sizing:border-box;
    width:500px;
    position:relative;
    @media (max-width: 768px) {
    width:80%;
    margin:auto;
  }`


const ButtonStyle = styled.button`
    background-image: linear-gradient(120deg, #FF8F00 0%, #FFB900 100%);
    height:100%;
    cursor:pointer;
    color:#fff;
    padding:15px 40px;
    box-shadow: 0px 0px 12px rgba(160, 121, 0, 0.2);
    border-radius:50px;
    border:none;
    position:absolute;
    right:0;
    top:0;
    transition: all 300ms ease-in;

    @media (max-width: 768px) {
    width:60%;
    padding:15px 20px;
    }

    &:hover{
    background-image: linear-gradient(120deg, #FF8F00 100%, #FFB900 0%);
    }

    &:focus {
    background-image: linear-gradient(120deg, #FFB900 100%,  #FF8F00 0%);
    outline: none;
}
`


export {InputStyle, FormWrapper, ButtonStyle}
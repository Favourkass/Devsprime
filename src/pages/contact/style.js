import Styled from "styled-components";


export const Parent = Styled.div`
display:flex;
`;

export const Divv = Styled.div`
margin-top:100px;
background: linear-gradient(70deg, #fff, white);
`;

export const ImageDiv = Styled.div`
padding:200px 200px;
background-image: url("https://res.cloudinary.com/devsprime/image/upload/v1626340616/media/About-usnkhwu8kpliplc6tgexyd-removebg-preview_dgwhaa.png");
background-size: cover;
box-shadow: 0 0 10px 8px white inset;
background-blend-mode: lighten;

@media (max-width: 740px){
    display:none;
      width: 100%;
      margin-left: 0;
      margin: auto;
    }
@media (max-width: 653px){
        display:none;
          width: 100%;
          margin-left: 50px;
          margin: auto;
        }
`;

export const ParentWrapper = Styled.div`
padding: auto;
margin:auto;
width: 100%;
padding: 15vh 0;

@media (max-width: 740px){
  width: 50%;
  margin-left: 0;
  margin: auto;
  padding: 5vh 0;
}
`;


export const ErrorStyle = Styled.small`
  color: #ff0000;
  display:inline-block;
  display: flex;
  justify-content: center;
  margin-bottom:10px;
  margin-top:10px;
 
`;

export const TextArea = Styled.textarea`
    background: ${({ size }) => size === "small" ? "#FFF7DF" : "#FFFFFF"};
    border: 1px solid #EFEFEF;
    border-radius: 50px; 
    width: 100%;   
    outline: none;
    padding-top: 38px;
    padding-left: 45px;
    font-size: 14px;
    line-height: 17px;

`
export const FormDiv = Styled.div`
  display: flex;
  justify-content: center;
`
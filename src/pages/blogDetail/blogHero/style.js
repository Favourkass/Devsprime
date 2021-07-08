import styled from "styled-components";

export const HeroPage = styled.div`
    background: linear-gradient(90deg, #ffffff 0%, #D8D8D8 100%);
    background-size: cover;
    background-repeat: no-repeat;
    padding: 3rem 0;
`;

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
}
  
`;
export const HeroText = styled.div`
h3{
  font-size: 44px;
  background: -webkit-linear-gradient(#FFC000, #FF8A00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
p{
  font-size: 18px;
}
@media only screen and (max-width: 1000px) {
    h3{
  font-size: 30px;
  background: -webkit-linear-gradient(#FFC000, #FF8A00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
p{
  font-size: 16px;
}
@media only screen and (max-width: 800px) {
    margin-left: 50px;
    h3{
  font-size: 30px;
  background: -webkit-linear-gradient(#FFC000, #FF8A00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
p{
  font-size: 16px;
}
}`;

export const ImageContainer = styled.div`
=@media only screen and (max-width: 800px) {
    display: none;
    
    
}
`;

export const Image = styled.img`
width: 100%;
`;

//08146358562'
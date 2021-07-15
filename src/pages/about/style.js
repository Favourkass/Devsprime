import Styled from "styled-components";

export const MainContainer = Styled.div`
`;

export const Hero = Styled.section`
width: 100%;
padding-bottom: 3rem ;
.hero-cont{
  display:flex;
  justify-content: space-between;
  
}

`;

export const Heading = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 500px;
`;

export const ImageContainer = Styled.div`
  max-width: 500px;
  height: 100%;
  @media only screen and (max-width: 800px) {
    display: none;
  }`;

export const HeroImage = Styled.img`
  width: 100%;
  height: 100%;
`;


export const StatisticDiv = Styled.div`
margin-top:2rem;
padding: 3rem 0;
background: linear-gradient(333deg,#FF8A00 1.55%,#FFC000 95.8%);
`;

export const StaticRows = Styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 0;
align-items:top;
@media (max-width: 767px) {
  flex-flow: column wrap;
}
.static-card{
  margin: 1rem 0;
  max-width: 15rem;
  display: flex;
  flex-direction: column;
  align-self: center;
}
`;


export const SectionDiv4 = Styled.div`
  box-sizing: border-box;
  max-width:100%;
  padding: 5rem;
  background-color:#FFF7DF;
  @media (max-width: 768px) {
    flex-flow: column wrap;
    
  }
  .container{
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
  `;
  
  export const Wrapper2 = Styled.div`
  .smallWrite{
    width:70%;
    text-align:left;
    line-height:1.6;
  }
  @media (max-width: 768px) {
    width: 100%;
    .smallWrite{
    width:100%;
    text-align: justify;
  }
}
`;

export const BoxDiv = Styled.div`
  max-width: 60%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 5vw);
  grid-gap: 10px;
 
  @media (max-width: 768px) {
    display: none;
  }

`;

export const Box1 = Styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / span 4;
  border-radius: 5px;
`;

export const Box2 = Styled.div`
  grid-column: 2 / span 2;
  grid-row: 2 / span 2;
  border-radius: 5px;
`;

export const Box3 = Styled.div`
  border-radius: 5px;
  grid-column: 2 / span 1;
  grid-row: 4 / span 2;
`;

export const Box4 = Styled.div`
  border-radius: 5px;
  grid-column: 3 / span 2;
  grid-row: 4 / span 3;
`;

export const Box5 = Styled.div`
  border-radius: 5px;
  grid-column: 4 / span 1;
  grid-row: 3 / span 1;
`;

export const Box6 = Styled.div`
  border-radius: 5px;
  grid-column: 4 / span 2;
  grid-row: 1 / span 2;
`;

export const Box7 = Styled.div`
  border-radius: 5px;
  grid-column: 5 / span 1;
  grid-row: 3 / span 2;
`;



export const Hero2 = Styled.section`
background: linear-gradient(255deg, rgba(255,192,0,1) 2%, rgba(255,138,0,1) 100%);
padding-bottom: 3rem ;
.hero-cont{
  display:flex;
  justify-content: space-between;
}
`;

export const Heading2 = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 500px;
`;



export const Hero3 = Styled.section`
padding-bottom: 3rem ;
.hero-cont{
  display:flex;
  justify-content: space-between;
}

`;

export const Heading3 = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 500px;
`;

export const ImageContainer3 = Styled.div`
  max-width: 500px;
  height: 100%;
  @media only screen and (max-width: 800px) {
    display: none;
  }`;

  export const HeroImage3 = Styled.img`
  width: 100%;
  height: 100%;
  border-radius:30% 70% 70% 30% / 30% 30% 70% 70%;
`;


export const Iconsmalldiv = Styled.div`

`;

export const Icon1 = Styled.img`
width:25%;
height:25%;
margin-left:-55px;
padding:0px 10px;
@media only screen and (max-width: 800px) {
width:7%;
height:7%;
margin-left:-30px;
padding:0px 30px;}

@media only screen and (min-width: 1000px)and (max-width: 1320px){
  width:12%;
  height:12%;
  margin-left:-30px;
  padding:0px 30px;}


`




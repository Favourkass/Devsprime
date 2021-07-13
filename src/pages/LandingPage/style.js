import Styled from "styled-components";

export const MainContainer = Styled.div`
`;

export const Hero = Styled.section`
background: linear-gradient(255deg, rgba(255,192,0,1) 2%, rgba(255,138,0,1) 100%);
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


export const FlexedDiv = Styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 60px;
  margin-top: 5rem;
   @media (max-width: 768px) {
    flex-flow: column wrap;
  }

  .img-container{
    margin-right: 5rem;
    max-width: 50%;
    max-height: 40rem;

  }
 
`;

export const WriteUpDiv = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  text-justify: inter-word;
  
  .smallWrite{
    max-width:65%;
    line-height:1.6;
  }
 @media (max-width: 768px) {
   width: 80%;
   align-self: center;
    .smallWrite {
      width: 100%;
    }
 
 }

`;


export const Image = Styled.img`
width: 100%;
height: 100%;
  border-radius: 0% 100% 59% 41% / 100% 45% 55% 0%;
   @media (max-width: 768px) {
    display: none;
  }
`;

export const TestimonialTitle = Styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center
`;

export const Testimonials = Styled.section`
background: #FFFFFF;
padding-top: 120px;
padding-bottom: 150px;

`;

export const TestimonialFlex = Styled.div`
display: flex;
flex-wrap wrap;
`;



export const SectionDiv = Styled.div`
background:  #FFF7DF;
padding-top: 60px;     
`;

export const IconDiv = Styled.div`
width:50%;
@media (max-width:768px){
  display:none;
  }


`;


export const SvgImage = Styled.img`
@media (max-width: 740px){
    display:none;
    }

`;

// Section2 Styles
export const SectionDiv2 = Styled.div`
margin-top:-25px;
margin-bottom:30px;
width:100%;
display:flex;
@media (max-width: 375px){
      width: 100%;
      margin-top:-20px;  
    }
`;

export const WriteUpDiv2 = Styled.div`
padding-top:50px;
padding-left:150px;
width:40%;
  .smallWrite{
    width:65%;
    text-align:left;
    line-height:1.6;
  }  
  @media (min-width: 768px){
    margin-top:50px;
    margin-left:-200px;
    width:80%;
    .small{
      font-size:24px;
    }
    .smallWrite{
    font-size:16px;
    line-height:1.6;
    text-align:left;
    }
`;

export const IconDiv2 = Styled.div`
width:60%;
@media (max-width:768px){
  width:100%;
  display:none;
  }
`;

export const SvgImage2 = Styled.img`
width:50%;
padding-top:40px;
`;

export const Icon1 = Styled.img`
width:6%;
height:6%;
padding-right:50px;

`;



export const StatisticDiv = Styled.div`
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
  background: linear-gradient(255deg, rgba(255,192,0,1) 2%, rgba(255,138,0,1) 100%);
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
    width: 100%;
  }
  @media (max-width: 425px) {
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

export const Last = Styled.div`
  width:100%;
  background: #FFF7DF;

`;

export const Wrapper = Styled.div`
 display: flex;
 flex-direction: column;
 margin-left: auto;
 padding-top: 35px;
 padding-bottom: 40px;
 
    width: 300px;

  .smallWrite{
    width:60%;
    text-align:left;
    line-height:1.6;
  }
`;

import styled from "styled-components";


const Wrapper = styled.div`
margin-top: 20px;
`;

const Card = styled.div`
background: #ffffff;
border: 1px solid #efefef;
max-width: 270px;
height: 325px;
margin: 0 10px;
padding: 30px 10px;
box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
border-radius: 5px;
`;

const CardBody = styled.div`
display: flex;
flex-flow: column;
padding-left: 16px;
padding-right: 16px;
`;

const ImageTop = styled.div`
display: flex;
align-items: flex-end;
margin-top: 20px;
justify-content: flex-start;
`;

const CardImageTop = styled.img`
max-width: 100px;
border-radius: 50%;
margin-right: 10px;
box-shadow: 0 8px 20px -4px #95abbb;
width: 60px;
height: 60px;
`;

const Quote = styled.img`
height: 28px;
width: 35px;
`;

const SpanDiv = styled.div`
margin-bottom: 10px;
text-align: start;
`;

const SpanH5 = styled.span`
color: #5c5c5c;
font-size: 16px;
line-height: 1.3;
font-weight: 900;
text-align: start;
margin-top: 30px;
line-height: 105.47%;
`;

const CardP = styled.p`
font-family: Proxima Nova;
font-size: 16px;
text-align: justify;
color: #5c5c5c;
line-height: 175.78%;
`;

const SpanH6 = styled.span`
color: #5c5c5c;
opacity: 0.8;
font-size: 12px;
text-align: start;
`;

export {Wrapper, Card, CardBody, ImageTop, CardImageTop, Quote, SpanDiv, SpanH5, CardP, SpanH6}


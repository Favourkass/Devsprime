import Styled from "styled-components";


export const statisticWrapper = Styled.div`
margin: 0 auto;
`

const StatisticImg = Styled.img`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Counter = Styled.p`
margin: 30px 0 0 0;
width: 100%;
font-size: 50px;
text-align: center;
color: #FFFFFF;
font-weight: 900;
@media (max-width: 768px) {
    font-size: 30px;
  }
`

const StaticLabel = Styled.p`
margin: 5px;
width: 100%;
font-size: 14px;
text-align: center;
color: #FFFFFF;
`
export const StatisticContainer = ({ src, count, label }) => {
  return (

      <>
        <StatisticImg src={src} alt="statistic image"/>
        <Counter>{count}</Counter>
        <StaticLabel>{label}</StaticLabel>
      </>


  );
};







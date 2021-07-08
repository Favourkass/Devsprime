import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  width: 96%;
  justify-content: center;
  align-items: baseline;
  align-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-bottom: 100px;
  padding: 10px;
`;

const Card = styled.section`
  position: relative;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-width: 303px;
  width: 303px;
  height: 279px;
`;

const Tier = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);
  padding: 15px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-top: 0;
  color: #ffffff;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: justified;
`;

const Image = styled.img`
  width: 100%;
  height: 77%;
  object-fit: cover;
  border-radius: 10px;
`;

const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);
  width: 100%;
  height: 70px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Title = styled.h3`
  color: white;
  width: 70%;
  margin-left: 35px;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: justified;
`;

export { CardContainer, Card, Tier, Image, TitleContainer, Title };

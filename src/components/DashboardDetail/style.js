import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #5c5c5c;
  background: #fff7df;
  font-size: 1em;
  font-family: Proxima Nova;
  border: 1px solid #efefef;
  .img-text {
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    
    .img {
      max-width: 100px;
    }
    .text{
      margin: 0;
      text-align: justify !important;
    }
  }

  @media (max-width: 700px) {
    transform: scale(0.92);
    font-size: 0.92em;
    .img-text {
      flex-direction: column;
      img {
        max-width: 50px;
      }
      .text {
        font-size: 0.92em;
      }
    }
  }
  @media (max-width: 620px) {
    transform: scale(0.92);
    font-size: 0.9em;
    .text {
      font-size: 0.9em;
    }
  }
  @media (max-width: 580px) {
    transform: scale(0.88, 0.78);
    font-size: 0.82em;
    .text {
      font-size: 0.82em;
      width: 60%;
    }
  }
  @media (max-width: 489px) {
    transform: scale(0.8, 0.65);
    font-size: 0.72em;
    .text {
      font-size: 0.72em;
      width: 60%;
    }
  }
  @media (max-width: 419px) {
    transform: scale(0.78, 0.63);
    font-size: 0.67em;
    .text {
      font-size: 0.67em;
      width: 60%;
    }
  }
  @media (max-width: 399px) {
    transform: scale(0.78, 0.63);
    font-size: 0.6em;
    .img-text {
      font-size: 0.67em;
      .text {
        font-size: 0.6em;
        width: 60%;
      }
    }
  }
  @media (max-width: 320px) {
    transform: scale(0.75, 0.58);
    font-size: 0.48em;
    .text {
      font-size: 0.48em;
      width: 60%;
    }
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 25px;
  width: 70%;
  word-break: break-all;
`;

const MenuWrapper = styled.div`
  width: 30%;
  text-align: center;

  .img-text {
    display: flex;
    align-content: flex-start;
    padding-top: 10px;

    .img {
      max-width: 100px;
    }
    .text {
      margin-left: 15px;
      text-align: center;
      width: 150px;
    }
    @media (max-width: 580px) {
      flex-direction: column;
      width: 60%;
    }
  }
`;
const Image = styled.img`
  border-radius: 10%;
  background-color: #c4c4c4;
  width: 100%;
`;
export { MainWrapper, InnerWrapper, MenuWrapper, Image };

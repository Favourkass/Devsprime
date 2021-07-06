import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #212121;
  color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: 768px) {
    footer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    }
    .right {
      margin-left: 15px !important ;
    }
    .quicklinks,
    .contact,
    .about,
    .terms {
      margin-left: 20px;
      padding: 0px;
      font-size: 14px;
      width: 100%;
      border-bottom: 1px solid black;
    }
    .privacy {
      margin: 0;
    }
    .terms {
      margin-top: 10px;
    }
    .policy {
      font-size: 8px;
      display: flex;
      justify-content: space-between;
    }
  }
  .about {
    float: left;
  }
  .quicklinks {
    height: 100%;
    padding-top: 40px;
    float: left;
  }
  .contact {
    height: 100%;
    float: left;
    padding-top: 40px;
    line-height: 26px;
  }
  .contact div {
    padding-bottom: 20px;
  }
  p {
    padding-bottom: 20px;
  }
  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    padding: 5px;
  }
  .terms {
    height: 20%;
    float: left;
    margin-top: 90px;
  }
  .logo {
    width: 50%;
    height: 100%;
    padding-top: 35px;
    margin: 100px, 0;
  }
  .summary {
    margin-top: 35px;
    padding-bottom: 10px;
    width: 265px;
    line-height: 17.05px;
  }
  .icons {
    display: flex;
    width: 80%;
  }
  .facebook {
    background-color: #272eae;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  .instagram {
    background-color: #f53e6a;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  .twitter {
    background-color: #1590d8;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  .youtube {
    background-color: #f53e6a;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  .policy {
    display: flex;
    justify-content: space-between;
    background-color: #000000;
    height: 39px;
  }
  .privacy {
    display: flex;
    justify-content: space-around;
  }
  .site {
    margin-left: 10px;
  }
  .credits {
    color: #ffc000;
    text-decoration: underline;
  }
`;
export default FooterWrapper;
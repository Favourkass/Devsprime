import Styled from "styled-components";

const HomeWrapper = Styled.div`
  text-align: center;
  .container{
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`

export default HomeWrapper;
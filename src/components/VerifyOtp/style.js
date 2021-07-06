import Styled from "styled-components";


export const VWrapper = Styled.section`
margin: 0;
padding: 0;
`


export const Overlay = Styled.div`
  display: none;
  background:linear-gradient(253.58deg, #FFC000 99.55%, #FF8A00 99.8%);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9998;
  align-items: center;
  justify-content: center;
}
`
export const ParentDiv = Styled.div`    
`
export const ChildVid = Styled.div`  
padding-top: 15%;  
`
export const Content = Styled.div` 
/* background: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%); */
  width: 500px;
  height: 350px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px #FF8A00, -5px -5px 30px 7px  #FF8A00;
  cursor: pointer;
  transition: 0.4s;
  @media (max-width: 768px) {
    width: 300px;
  height: 300px;
  }
`

export const Checking = Styled.div`
 margin: 15% auto 40% auto;
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  color: #eee;
  @media (max-width: 768px) {
    margin: 5% .5px 0 .5px;
    font-weight: 500;
    font-size: 28px;
  }
`

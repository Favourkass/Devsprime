import Styled from "styled-components"

export const Image= Styled.img`
border-radius:10%;
background-color:#C4C4C4;
width: 100%;
height: auto;
`
export const Container= Styled.div`
display:flex;
flex-wrap:wrap;

.img-text{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 300px;
    flex: 2;
    
   .img{
       max-width:200px;
   } 
   .text{
       margin:0 15px;
   }
}
.contents{
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex: 5;
}

`


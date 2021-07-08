import styled from "styled-components"


export const Wrapper = styled.div`
    background-color: #FFFFFF, 100%;
    height:116px;
    width: 100%;
    margin: 0 auto;
    display:grid;
    grid-template-rows:repeat(5, 1fr);
    @media (max-width:950px){
        height:90px;
    }
    @media (max-width:450px){
        height:70px;
    }
`
export const Paragraph = styled.p`
   grid-row:5/6 
`
export const Span = styled.span`
    margin-left:20px;
    font-family: Proxima Nova;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: justify;
    color: #5C5C5C;
    font-weight:bold;
`


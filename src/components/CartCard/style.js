import styled, {css} from "styled-components"


export const MainWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-bottom:10px;
    background-color: #FFF7DF;
`
export const Wrapper = styled.div`
    ${({className})=>className==="cart-info" && css`
        display:flex;
        flex-wrap: wrap;
        align-items: center;
    `}

    ${({className})=>className==="info" && css`
        margin-left: 10px;
    `}
    ${({className})=>className==="total-price" && css`
        display: flex;
        justify-content:flex-end;
        align-content: flex-end;
    `}
`
export const Table = styled.table`
    ${({className})=>className==="desktop-size" && css`
        width:100%;
        height: 5vh;
        @media (max-width:419px){
            display: none;
        }    
    `}
    ${({className})=>className==="mobile-size" && css`
        @media (min-width:420px){
            display: none;
        }    
    `}

    ${({className})=>className==="price-info" && css`
        align-content: flex-end;
        width: 100%;
        border-top: 1px solid #E5E5E5
    `}

`
export const ColumnHeader = styled.th`
    text-align: ${({id})=>id==="cart"?"center":"left"};
    padding: 10px;
    font-family: Proxima Nova;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0em;
    color:#5C5C5C, 100%;
    border-bottom: 1px solid #E5E5E5;
    @media (max-width:599px){
        border-bottom: none;}
    .close{
        cursor: pointer;
    }
`
export const RowCell = styled.td`
    text-align: ${({id})=>id==="price"?"left":"center"};
    font-family: Roboto;
    font-size: 0.8em;
    font-style: normal;
    line-height: 16px;
    letter-spacing: 0em;
    color: ${({id})=>id==="price"?"#5C5C5C":"#5C5C5C"};
    font-weight:bold;
`

export const Paragraph = styled.p`
    font-family: Proxima Nova;
    font-size: 14px;
    line-height: 21.33px;
    letter-spacing: 0em;
    margin: 0;
    color: #5C5C5C;
    align-self: center;
    ${({className})=>className==="internal" && css`
        @media (max-width:950px){
            display: none;
        }
    `}
`
export const SubHeader = styled(Paragraph)`
    color: black
`

export const Span = styled(RowCell)`
    color: #BCBCBC

`
export const Container = styled.div`
    line-height: 2px;
    ${({className})=>className==="container" && css`
        display:flex;
        background-color:${({white})=>white?"#FFFFFF":"#FFF7DF"} ;
        width:87%;
       
    `}      
    ${({className})=>className==="decordiv" && css`
        background-color: #FFF7DF;
        flex: 6;
        visibility: hidden;
    `}
    ${({className})=>className==="mid-con" && css`
        background-color: ${({white})=>white?"#FFFFFF":"#FFF7DF"};
        flex: 2.8;
        visibility: ${({white})=>white?"hidden":"visible"};
        
    `}
    ${({className})=>className==="decordiv-2" && css`
        background-color: #FFF7DF;
        flex: 1.2;
        visibility: hidden;
    `}
    ${({className})=>className==="indiv" && css`
        display: flex;
        justify-content: space-between;
    `}
`
export const ParaGraph = styled.p`
    text-align: end;
    font-size: 14px;
    font-style: normal;
    font-family: Proxima Nova;
    font-weight:bold;
`
export const Spans = styled.span`
    color: #BCBCBC
`
export const Img =styled.img`
    height:100px;
    border-radius: 10px;
    margin-left:5px

`

import styled from 'styled-components'


const MainWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-radius:10px;
    color:black;
    background-color:#FFFFFF;
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
    margin:0 auto;
    width:70%;
    font-weight:bold;
    line-height: 175.78%;
    padding-left:50px;
    padding-right:50px;
    font-size:1em;
    height:63px;
    font-family: Proxima Nova;
    @media (max-width:700px){
    transform:scale(0.92);
    font-size:0.92em;
    }
    @media (max-width:620px){
    transform:scale(0.92);
    font-size:0.9em;
    }
    @media (max-width:580px){
    transform:scale(0.88,0.78);
    font-size:0.82em;
    }
    @media (max-width:489px){
    transform:scale(0.8,0.65);
    font-size:0.72em;
    }
    @media (max-width:419px){
    transform:scale(0.78,0.63);
    font-size:0.67em;
    }
    @media (max-width:399px){
    transform:scale(0.78,0.63);
    font-size:0.6em;
    }
    @media (max-width:320px){
    transform:scale(0.75,0.58);
    font-size:0.48em;
    }
`

const InnerWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-left:25px;
    width:60%;
`

const MenuWrapper = styled.div`
    width:20%;
    text-align:center;
`

export {MainWrapper, InnerWrapper, MenuWrapper};


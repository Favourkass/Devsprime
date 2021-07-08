import styled from 'styled-components';
import {Link} from 'react-router-dom'
export const Wrapper = styled.div`
    display:flex;
    justify-content:top;
    align-items:center;
    flex-direction:column;
    height:70vh;
    padding-left:2%;
    padding-right:2%;
    border:1px solid #EFEFEF;
    border-radius: 10px;
    width:20%;
    
    @media screen and (max-width:960px){
    width:100%;
    
    
 } 
`

export const ImageWraper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width:127px;
    height:122.75px;
    border-radius:50%;
    background:#D8D8D8;
    
`
export const SocialMediaWraper = styled.div`
    display:flex;
    justify-content:center;
    padding:10%;
    padding-left:5%;
    align-items:center;
    width:100%;
`
export const ImageLink = styled(Link)`
    margin:2%;
`

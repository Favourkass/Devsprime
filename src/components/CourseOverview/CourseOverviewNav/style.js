import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  
   
    
    height:auto;
    background: #FFFFFF;
    border-radius: 10px;
    border:1px solid #EFEFEF;
    overflow:scroll;
    width:20%;
    display:flex;
    flex-direction:column; 
    justify-content:top;
    padding-left:2%;

    @media screen and (max-width:960px){
    width:100%;
   
    align-items:center;
    margin:0;
    
 } 
    
`


export const LessonLink = styled(Link)`
    color: ${(props) => props.COLOR};
    fill: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);
    display:flex;
  
    align-items: center;
    text-decoration: none;
    padding-bottom:1rem;
    height: auto%;
    cursor: pointer;
    text-transform: capitalize;
    
    Font-family: Roboto;
    Font-style: Regular;
    Font-size: ${(props) => props.SIZE};
    Line-height: 17.58px;
    font-weight: normal;


    &.active {
        border-bottom: 3px solid #01bf71;

    }

`;


import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  
    position:absolute;
    top:60%;
    right:10%;
    width: 250px;
    height:60vh;
    background: #FFFFFF;
    border-radius: 10px;
    overflow:scroll;
    z-index:2;  
    display:${props => props.active ? 'none' : 'flex'};
    flex-direction:column; 
`

export const ModuleWrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    height:auto;

    .video-cont{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .7rem;
        border-bottom: .5px solid grey;
        padding: .5rem;
        border-radius: 5px;
    }
    
`

export const LessonLink = styled(Link)`
    color: ${(props) => props.COLOR};
    fill: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);
    display:flex;
  
    align-items: center;
    text-decoration: none;
    padding-bottom:1rem;
    height: 100%;
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

export const NavBtn = styled.button`
    background:rgba(0, 0, 0, 0.3);
    width:30.64px;
    height:30.64px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    border-radius:50%;
    border: 2px solid #FFFFFF;
    position:absolute;
    top:52%;
    right:13%;
    cursor:pointer;
    transform: rotate(-180deg);
    font-size: 1.8rem;
   
`
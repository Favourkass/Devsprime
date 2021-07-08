import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content:top;
    flex-direction:column;
    height:auto;
    padding-left:2%;
    padding-right:2%;
    margin-left:1%;
    margin-right:1%;
    border:1px solid #EFEFEF;
    border-radius: 10px;
    width:40%;

    @media screen and (max-width:960px){
    width:100%;
    margin-left:0;
    margin-right:0;
    
 } 
`
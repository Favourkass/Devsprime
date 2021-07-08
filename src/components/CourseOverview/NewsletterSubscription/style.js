import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    align-items:center;
    ${'' /* width:80%; */}
    margin-left:15%;
    margin-right:15%;
    height:auto;
    
`

export const Text = styled.div`
    display:flex;
    flex-direction:column;
    width:40%;
    padding-top:-2px;
    padding-bottom:10%;
    .para{
        margin-top: -30px;
    }
    
    
`
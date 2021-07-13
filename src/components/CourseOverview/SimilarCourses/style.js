import styled from 'styled-components';

export const SimilarCoursesContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-left:8%;
    flex-direction:column;

`
export const Wrapper = styled.div`
    display:flex;
    margin-top:-5%;
    margin-bottom:2%;
    overflow:scroll;
    margin-bottom:2%;
    overflow:scroll;

    
    @media screen and (max-width:960px){
    display:flex;
    flex-direction:column;  
    overflow:scroll;
 } 
`
export const CourseCardWrapper = styled.div `
    display:flex;
    width:320px;
    height:auto;
    margin-top:5%;
    padding-left:1%;
    

    @media screen and (max-width:960px){
    width:90%;
    }
`


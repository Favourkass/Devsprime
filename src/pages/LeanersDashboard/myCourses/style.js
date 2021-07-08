import styled from "styled-components";


export const CourseStyle=styled.div`


` 
export const PageStyle=styled.div`
background-color: #FFF7DF;
display: flex; 
flex-direction: column;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 5rem;
margin-bottom: 5rem;
border-radius: 1rem;
padding: 2rem 0;

.course-type-cont{
    display: flex;
    justify-content: center;
}

`
export const Wrapper=styled.div`
display: flex;
flex-wrap: wrap;
grid-gap: 1.5rem;
margin: 0 1.5rem;
.button{
    display: flex;
    align-items: flex-end;
}

`
export const ParagraphWrapper=styled.div`
    padding: 1rem;
}
.course-type{
    &:active{
        color:black;
    }
    &:hover {
        color: #000;
        text-decoration-color: black;
        cursor: pointer;
        
    }
    &:focus{
        position: relative;
    }
    &:focus::after{
        content: "";
        width: 22px;
        height: 3px;
        background: #FFC000;
        position: absolute;
        bottom: -15px;
        left: 40%;
    } 
 
    @media (max-width:340px){
    display:flex;
    flex-direction: column;
    
 }
`
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 50px;
`;

const BodyContainer = styled.div`
    margin: auto;
    margin-top: 50px;
`;

const CourseBodyMainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    @media screen and (max-width: 600px){
        display: block;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

const CourseView = styled.div`
    flex-basis: 75%;
    @media screen and (max-width: 600px){
        flex-basis: 100%;
    }
`;

const CourseSort = styled.div`
    flex-basis: 20%;

    @media screen and (max-width: 600px){
        display:none;
    }
`;

export { Container, BodyContainer, CourseBodyMainContainer, CourseView, CourseSort}

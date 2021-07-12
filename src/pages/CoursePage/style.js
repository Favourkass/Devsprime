import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 50px;
`;

const BodyContainer = styled.div`
    margin: auto;
    margin-top: 50px;
`;

const CourseBodyMainContainer = styled.div`
    margin-top: 50px;
    display: grid;
    grid-gap: 30px;

    .courseview{
        grid-column: 1/5;
    }

    .coursesort{
        grid-column: 6/7;
        grid-row: 1/7;
    }
`;

const CourseView = styled.div`

`;

const CourseSort = styled.div`
    flex-basis: 20%;

    @media screen and (max-width: 600px){
        display:none;
    }
`;

export { Container, BodyContainer, CourseBodyMainContainer, CourseView, CourseSort}

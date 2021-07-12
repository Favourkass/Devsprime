import styled from "styled-components";
import { black } from "../../../../components/colour/colour"

const AllCoursesContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const CourseTypeContainer = styled.div`
    .button {
        background: none;
        padding: 25px;
        width: 40px;
        height: 40px;
        border: 1px solid ${black};
        border-color: ${black};
        color: ${black};
        border-radius: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 3%;
        cursor: pointer;
    }
`;

const Contain = styled.div`
    display: flex;
    .button{
        cursor: pointer;
    }
`;

const PriceContainer = styled.div`

`;

export { AllCoursesContainer, CourseTypeContainer, Contain, PriceContainer }

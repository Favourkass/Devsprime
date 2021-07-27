import styled from "styled-components";


const BlogContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 100px auto;

    @media only screen and (max-width: 750px) {
        margin: 80px auto;
    }

`;

const FormContainer = styled.div`
    background: #fff7df;
    border-radius: 40px;
    padding: 80px;

    @media only screen and (max-width: 750px) {
        width: 100%;
        padding: 60px 40px;
        border-radius: 30px;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export { BlogContainer, FormContainer, HeaderContainer }

import Styled from 'styled-components';

export const Section = Styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 150px;
`;

export const ReviewContainer = Styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: stretch;
    flex-flow: row wrap;
    // justify-contents: center;
    @media (max-width: 768px) {
        flex-flow: column wrap;
        align-items : center;
    }
`;
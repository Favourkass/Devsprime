import styled from 'styled-components';


export const ElementWrapper = styled.ul`
    display: flex;
    justify-content:center;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: ${(props) => props.LeftMargin};
    margin-left: ${(props) => props.LeftMargin};

    @media screen and (max-width: 768px) {
        display:none;
        
    }
`;





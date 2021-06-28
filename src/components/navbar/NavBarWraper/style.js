import styled from 'styled-components'

export const Nav = styled.nav`
    position: sticky;
    width: 100%;
    height: auto;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
    z-index: 10;


    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        display:flex;
        flex-direction:column;
    }

    @media screen and (max-width: 960px){
        display:flex;
        flex-direction:column;
    }

    
`;



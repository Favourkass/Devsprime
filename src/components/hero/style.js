import Styled from "styled-components";

const HeroPage = Styled.div`
    *,*:before,*:after{
        box-sizing: inherit;
    }
    height: 70vh;
    background: linear-gradient(255deg, rgba(255,192,0,1) 2%, rgba(255,138,0,1) 100%);
    background:  ${props => props.background ? props.background : "linear-gradient(255deg, rgba(255,192,0,1) 2%, rgba(255,138,0,1) 100%)"};
    background-size: cover;
    background-repeat: no-repeat;
    background-position:  ${props => props.backgroundPosition ? props.backgroundPosition : ""};

    @media screen and (max-width: 420px) {
        height: 100vh;
    }

`;

const HeroContainer = Styled.div`
    padding: auto;
    margin-left: 12.2%;
    padding-top: 10vh;


    @media screen and (max-width: 540px) {
        width: 90%;
        margin-left: 0;
        }
    }
    
`;
export { HeroPage, HeroContainer };

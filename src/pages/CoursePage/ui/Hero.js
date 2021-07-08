import { Header, Paragraph } from "../../../components/typography/index";
import Styled from "styled-components";


const HeroPage = Styled.div`
    padding: 8rem 0;
    background: linear-gradient(255deg, rgba(255,192,0,1) 2%, rgba(255,138,0,1) 100%);
    @media screen and (max-width: 370px) {
        height: 80vh;
        padding-top: 5vh;
        padding-bottom: 15vh;
    }

    @media screen and (min-width: 371px) and (max-width: 539px) {
        height: 70vh;
        padding: 10vh 0;
    }
    
    @media screen and (min-width: 700px) and (max-width: 800px) {
        height: 40vh;
        padding: 10vh;
    }
`;

const HeroContainer = Styled.div`
    padding: auto;
    margin-left: 12.2%;
    width: 35%;

    @media screen and (max-width: 970px) {
        width: 60%;
        margin-left: 12.2%;
        margin: auto;
    }
    @media screen and (max-width: 800px) {
        width: 90%;
        margin-left: 0;
        margin: auto;
    }
`;

const header = 'Browse Thousands of Our Video Tutorials Curated Only for you.'
const para = 'Access all tutorials and resources when you become a premium member of Semaj Africa.'

const Hero = () => (
    <HeroPage>
        <HeroContainer className='container'>
            <Header children={ header } color="white"/>
            <Paragraph children={ para } color="white"/>
        </HeroContainer>
    </HeroPage>
);

export { Hero }

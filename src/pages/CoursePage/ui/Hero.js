import { Header, Paragraph } from "../../../components/typography/index";
import styled from "styled-components";


const HeroPage = styled.div`
    padding: 3rem 0;

    background: linear-gradient(255deg, rgba(255,192,0,1) 2%, rgba(255,138,0,1) 100%);
`;

const HeroContainer = styled.div`
    display: flex;
    grid-column-gap: 50px;
    grid-template-columns: 1fr 1fr;
    align-items: center;
`;

const HeroText = styled.div`
    padding: auto;

    @media screen and (max-width: 970px) {
        margin: auto;
    }
    @media screen and (max-width: 800px) {
        margin-left: 0;
        margin: auto;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 800px) {
        display: none;
    }`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const header = 'Browse Thousands of Our Video Tutorials Curated Only for you.'
const para = 'Access all tutorials and resources when you become a premium member of Semaj Africa.'

const Hero = () => (
    <HeroPage>
        <HeroContainer className="container">
            <HeroText>
                <Header children={ header } color="white"/>
                <Paragraph children={ para } color="white"/>
            </HeroText>
            <ImageContainer>
                <Image src='https://res.cloudinary.com/devsprime/image/upload/v1626038912/media/course_page.png' />
            </ImageContainer>
        </HeroContainer>
    </HeroPage>
);

export { Hero }

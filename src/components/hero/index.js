import { HeroContainer, HeroPage } from "./style";
import TextParagraph from "../TextParagraph/index";


const Hero = (props) => {
    return ( 
        <HeroPage background={props.background} backgroundPosition={props.backgroundPosition} data-testid={'heroId'}>
            <HeroContainer>
                <TextParagraph 
                    firstTitle={props.firstTitle}
                    secondTitle={props.secondTitle}
                    thirdTitle={props.thirdTitle}
                    titleColor={props.titleColor}
                    firstTitleWeight={props.firstTitleWeight}
                    secondTitleWeight={props.secondTitleWeight}
                    thirdTitleWeight={props.thirdTitleWeight}
                    titleFontSize={props.titleFontSize}
                    text={props.text}
                    textColor={props.textColor}
                    textFontSize={props.textFontSize}
                    // {props.logoName ? props.logoName: "DEVS"}
                >{props.children}</TextParagraph>
            </HeroContainer>
        </HeroPage>
    );
}

export default Hero;

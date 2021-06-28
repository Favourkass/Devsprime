import { primary, black } from "../colour/colour";
import { HeaderComp, SubHeaderComp, ParagraphStyle } from "./style";

const Header = ({ color = primary, size = 40, weight = 900, lineHeight = '150.34%', children, className }) => (
    <HeaderComp color={color} size={size} weight={weight} lineHeight={lineHeight} className={className} data-testid='headerId'>
        {children}
    </HeaderComp>
);

const SubHeader = ({ color = primary, size = 18, weight = 'normal', lineHeight = '150.34%', children, className }) => (
    <SubHeaderComp color={color} size={size} weight={weight} lineHeight={lineHeight} className={className} data-testid='subHeaderId'>
        {children}
    </SubHeaderComp>
);

const Paragraph = ({ color = black, size = 14, weight = 'normal', lineHeight = '175.78%', children, className }) => (
    <ParagraphStyle color={color} size={size} weight={weight} lineHeight={lineHeight} className={className} data-testid='paraId'>
        {children}
    </ParagraphStyle>
);

export { Header, SubHeader, Paragraph }
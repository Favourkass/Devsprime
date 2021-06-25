import CustomHeader from "./ui/HeaderComponent";
import Paragraph from "./ui/Paragraph";
import Textgraph from "./style";
const TextParagraph = (props) => {
    return ( 
        <Textgraph>
            <div className="titleDiv">
                <CustomHeader title={props.firstTitle} color={props.titleColor} 
                fontWeight={props.firstTitleWeight} fontSize={props.titleFontSize} />
                <CustomHeader title={props.secondTitle} color={props.titleColor} 
                fontWeight={props.secondTitleWeight} fontSize={props.titleFontSize} />
                <CustomHeader title={props.thirdTitle} color={props.titleColor} 
                fontWeight={props.thirdTitleWeight} fontSize={props.titleFontSize} />
            </div>
            <div className="bodyDiv">
                <Paragraph text={props.text} color={props.textColor} fontSize={props.textFontSize} />
            </div>
            <div className="button">{props.children}</div>
        </Textgraph>
    );
}

export default TextParagraph;

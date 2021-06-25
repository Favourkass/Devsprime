import ParagraphWrapper from './ParagraphStyle'

const Paragraph = (props) => {
    
    return ( 
        <ParagraphWrapper color={props.color} fontSize={props.fontSize} data-testid='paragraphId'>
            {props.text}
        </ParagraphWrapper>
    );
}

export default Paragraph;

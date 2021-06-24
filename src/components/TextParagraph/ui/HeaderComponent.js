import HeaderWrapper from "./HeaderStyle";

const CustomHeader = (props) => {
    return(
        <HeaderWrapper color={props.color} fontWeight={props.fontWeight} 
        fontSize={props.fontSize} data-testid={'headerId'}
        >{props.title}</HeaderWrapper>
    )
}

export default CustomHeader;

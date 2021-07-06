import ButtonWrapper from "./style";


const Button = props => {
    return (
        <ButtonWrapper 
        type={props.type}
        medium={props.medium} 
        large={props.large} 
        primary={props.primary}
        onClick={props.handleClick}
        disabled={props.disabled}
        className={props.className}
        width={props.width}>
            {props.children}
        </ButtonWrapper>
    );

}

export default Button;

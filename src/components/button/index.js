import ButtonWrapper from "./style";


const Button = props => {
    return (
        <ButtonWrapper 
        medium={props.medium} 
        large={props.large} 
        primary={props.primary}
        onClick={props.handleClick}>
            {props.label}
        </ButtonWrapper>
    );

}

export default Button;

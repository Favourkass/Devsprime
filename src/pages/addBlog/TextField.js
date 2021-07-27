import React from 'react'
import styled from 'styled-components';

const Container = styled.div`

`;

const InputStyle = styled.div`

    input{    
        padding: 15px 25px;
        border-radius: 50px;
        border: solid 1px #efefef;
        background-color: white;
        outline: none;
        width: 100%;
        box-sizing: border-box;
        @media only screen and (max-width: 560) {
            width: 90%;
        }
    }
`;

const TextAreaStyle = styled.div`

    textarea{
        padding: 15px 25px;
        border-radius: 20px;
        border: solid 1px #efefef;
        outline: none;
        width: 100%;
        resize: none;
        box-sizing: border-box;
        @media only screen and (max-width: 560) {
            width: 90%;
        }
    }
`;

const ErrorStyle = styled.small`
    color: #ff0000;
    display: inline-block;
    margin-bottom: 20px;
    text-align: left;
    margin-left: 20px;
`;



const TextField = ({ placeholder, onChange, name, type, values, accept, required }) => {

    return (
        <Container>
            <InputStyle
                placeholder={placeholder}
                name={name}
                type={type}
                onChange={onChange}
                values={values}
                accept={accept}
                required={required}
            />
        </Container>
    )
}

const TextArea = ({ placeholder, onChange, name, type, rows, columns, values }) => {

    return (
        <Container>
            <TextAreaStyle
                placeholder={placeholder}
                name={name}
                type={type}
                onChange={onChange}
                values={values}
                rows={rows}
                columns={columns}
            />
        </Container>
    )
}

const ErrorMsg = ({ children }) => {
    return <ErrorStyle>
        {children}
    </ErrorStyle>
}

export { TextField, TextArea, ErrorMsg, InputStyle, TextAreaStyle }

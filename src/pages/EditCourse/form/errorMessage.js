import React from 'react'
import { ErrorStyle } from './style'


const ErrorMsg = ({ children }) => {
    return <ErrorStyle>
        {children}
    </ErrorStyle>
}

export default ErrorMsg
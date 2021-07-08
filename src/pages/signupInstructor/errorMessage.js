import React from 'react'
import { ErrorStyle } from './styles'


const ErrorMsg = ({ children }) => {
    return <ErrorStyle>
        {children}
    </ErrorStyle>
}

export default ErrorMsg
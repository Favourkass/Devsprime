import React from 'react'
import { ErrorStyle } from '../../pages/contact/style'


const ErrorMsg = ({ children }) => {
    return <ErrorStyle>
        {children}
    </ErrorStyle>
}

export default ErrorMsg
import React from 'react'
import { InputStyle } from './style'


function Input({ type, value, handleChange, placeholder }) {
    return (
        <InputStyle
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    )
}

export default Input
import React from 'react'
import { InputStyle } from './styles'



const MyInput = ({ onChange, placeholder, type, name, value }) => {
    return <InputStyle
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
    />
}


export default MyInput
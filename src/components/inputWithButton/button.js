import React from 'react'
import { ButtonStyle } from './style'


function Button({name, handleClick, type}){
    return(
        <ButtonStyle type={type} onClick={handleClick}>
            {name}
        </ButtonStyle>
    )
}

export default Button
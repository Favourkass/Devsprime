import React from 'react'

import { LinkElement } from '../style'


const CardElement = ({elementName, elementUrl})=>{
    return(
        <LinkElement href={elementUrl}>{elementName}</LinkElement>
    )
}

export default CardElement
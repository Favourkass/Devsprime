import React from 'react'
import { SmallWrapper } from './styles'



const SmallText = ({children, center})=>{
    return <SmallWrapper justify={center}>
        {children}
    </SmallWrapper>
}

export default SmallText


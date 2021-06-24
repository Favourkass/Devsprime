import React from 'react'
import { DropArrowWrapper } from '../style'


const ArrowIcon = ({ children, handleClick }) => {
    return (
        <DropArrowWrapper bottom onClick={handleClick}>
            {children}
        </DropArrowWrapper>
    )
}

export default ArrowIcon
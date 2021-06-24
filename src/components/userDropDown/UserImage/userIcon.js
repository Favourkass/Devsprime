import React from 'react'
import ArrowIcon from './arrowIcon'
import UserImage from './userImage'

import { Icon, Image } from '../style'



const UserIcon = ({handleClick, imgSrc})=>{
    return(
        <Icon>
            <UserImage 
                imgSrc={imgSrc}
                altText="User Image" ></UserImage>
            <ArrowIcon handleClick={handleClick} > <Image src="https://res.cloudinary.com/devsprime/image/upload/v1624368992/Icons%20and%20Logo/32195_hyklr8.png" /> </ArrowIcon>
        </Icon>
    )
}

export default UserIcon
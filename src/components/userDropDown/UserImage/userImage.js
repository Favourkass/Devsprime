import React from 'react'
import { UserImageWrapper } from '../style'
import { Image } from '../style'



const UserImage = ({imgSrc, altText})=>{
    return(
        <UserImageWrapper className="user-image-wrapper">
            <Image src={imgSrc} alt={altText}/>
        </UserImageWrapper>
        
    )
}

export default UserImage

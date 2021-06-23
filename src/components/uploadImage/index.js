import React, {useState} from 'react'
import {ImageWrapper, Label, Input, Span, Image, ImageText} from './style'


const UploadImage = (props) => {

    return(
        <ImageWrapper>
        <Label>
            <Input type="file" name={props.Name}/>
            <Span>
            <Image src="https://res.cloudinary.com/devsprime/image/upload/v1624452153/Icons%20and%20Logo/photo-camera-interface-symbol-for-button_ia1rse.svg"/>
            </Span> 
        </Label>
        <ImageText>Click to upload an Image</ImageText>
        </ImageWrapper>
    )
}

export default UploadImage
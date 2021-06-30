import React from 'react'
import styled from 'styled-components'


const ImageDivStyle = styled.div`
    flex:1;
    background:url('https://res.cloudinary.com/devsprime/image/upload/v1624388704/media/login_mphsij.jpg');
    background-size:cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
    padding:50px;
    box-sizing:border-box;
    border-radius: 0 20px 20px 0;
    @media only screen and (max-width:960px){
        display:none;
    }
    
    `

const YellowBack = styled.div`
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TextWrapper = styled.div`
    color:#fff;
    width:70%;
    text-align:center;
    font-weight:bold;
`

const ImageDiv = () => {

    return <ImageDivStyle >
        <YellowBack>

            <TextWrapper>
                <small>
                    Do you know you can easily choose  your mode of learning on this platform? Hover aboard to learn more
                </small>
            </TextWrapper>
        </YellowBack>
    </ImageDivStyle>
}

export default ImageDiv

import React from 'react'
import styled from 'styled-components'


const ImageDivStyle = styled.div`
    flex:1;
    background:url('https://res.cloudinary.com/devsprime/image/upload/v1624388638/media/forgot_password_em3vqg.jpg');
    background-size:cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
    padding:50px;
    box-sizing:border-box;

    @media only screen and (max-width:550px){
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
    background: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);
    border-radius: 10px;
    padding: 10px
`

const ImageDiv = () => {

    return (
        <ImageDivStyle >
            <YellowBack>
                <TextWrapper>
                    <small style={{fontWeight: 'bold'}}>
                        Do you know that DevsPrime is ranked #1 for the best e-learning platform? Come onboard to discover your next step to getting a dream life.
                    </small>
                </TextWrapper>
            </YellowBack>
        </ImageDivStyle>
    );
}

export default ImageDiv;


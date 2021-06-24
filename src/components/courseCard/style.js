import styled from 'styled-components';

const Wrapper = styled.section`
    box-sizing: border-box;
    border-radius: 10px;
`

const Tier = styled.p`
    position: absolute;
    right: 0px;
    background: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);
    padding: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    margin-top: 0;
    color: #FFFFFF;
    font-family: Proxima Nova;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: justified;
`

const Title = styled.h3`
    color: white; 
    width: 47.5%;
    margin: 0 auto;
    margin-left: 20px;
    font-family: Proxima Nova;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: justified;
`

const Container = styled.div`
    background: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);
    padding: 18px;
    margin-top: -5.5px;
    
`
const ImageContainer = styled.div`
    position: relative;
    text-align: center;
    padding: 0;
`

const Image = styled.img`
    width: 100%;
    max-width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

export { Image, ImageContainer, Tier, Title, Container, Wrapper };

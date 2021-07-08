import styled from 'styled-components'

const Container = styled.div`
    padding-bottom: 95px;
    display:flex;
    background-position:bottom-center;
    background-size:cover;
    background: url("https://res.cloudinary.com/devsprime/image/upload/v1625676657/media/Stylish_Feel_cpgywp.png");
    height:500px;
    @media only screen and (max-width:750px){
        height:auto;
    }

`

const ImageDiv = styled.div`
    flex:2;
    display:flex;
    align-items: center;
    position:relative;
    
    @media only screen and (max-width:750px){
        display:none;
    }

`
const TextDiv = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-right:100px;
    @media only screen and (max-width:750px){
        width:100%;
        padding:30px;
    }

`

const ImageContent = styled.div`
    border-radius:33% 67% 65% 35% / 50% 45% 55% 50%;
    overflow:hidden;
    width:100%;
    position:relative;
    height:100%;
    background: url("https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80");
    position:absolute;
    background-size:cover;
    background-position:left;
    background-repeat:no-repeat;
    left:-100px;
    
`
const Img = styled.img`
    width:100%
`

export {
    Container,
    ImageDiv,
    TextDiv,
    ImageContent,
    Img
}
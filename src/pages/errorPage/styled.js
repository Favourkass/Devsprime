import styled from 'styled-components'

export const Container = styled.div`
    padding:50px;
`

export const Div = styled.div`
    padding:40px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#FFF7DF;
    border-radius:40px;
`
export const ImageWrapper = styled.div`
    width:500px;
    @media only screen and (max-width:750px){
        width:100%;
    }
`

export const Img = styled.img`
    width:100%;
`
export const MyLink = styled.div`
    .link{
        border-radius: 30px;
        padding:15px 25px;
        text-decoration: none;
        display:inline-block;
        color:#fff;
        background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
        box-shadow:0px 15px 30px rgba(0,0,0,.15);
    }
`
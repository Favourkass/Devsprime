import styled from 'styled-components'

export const ImageWrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width:170px;
    height:220px;
`

export const Label = styled.label`
    display:inline-block;
    width:100px;
    height:100px;
    border-radius:50%;
    background:#dddddd;
    cursor:pointer;
    position:relative;
`

export const Input = styled.input`
    position: absolute;
    top: -1000px;
`

export const Span = styled.span`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%)
`

export const Image = styled.img`
    opacity:.5;
`

export const ImageText = styled.p`
    text-align:center;
    font-size:12px;
    margin-top: 18px;   
`

import styled from 'styled-components'


const Icon = styled.div`
    width:80px;
    height:80px;
    display:flex;
    position:relative;
    justify-content:center;
    align-items:center;
`

const Card = styled.div`
    box-sizing:border-box;
    width:120px;
    display:${props => props.active ? 'flex' : 'none'};
    justify-content:center;
    flex-direction:column;
    border-radius:10px;
    background:#fff;
    box-shadow: 0 5px 15px rgba(0,0,0,.2);
    overflow:hidden;
    position:absolute;

    /* margin-top:10px; */
`

const UserImageWrapper = styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    overflow:hidden;
`

const LinkElement = styled.a`
    box-sizing:border-box;
    padding:15px 20px;
    color:#5C5C5C;
    width:100%;
    display:inline-block;
    transition: all 300ms ease;
    text-decoration:none;

    &:hover{
        background-image: linear-gradient(120deg, #FF8F00 0%, #FFB900 100%);
        cursor:pointer;
        color:#fff;
    }
`

const DropArrowWrapper = styled.div`
    width:15px;
    height:20px;
    position:absolute;
    right:5px;
    bottom:${props => props.bottom ? 0 : ""};
    top:${props => props.top ? 0 : ""};
    color:${props => props.white ? "#fff" : "#5c5c5c"};
    cursor:pointer;
`

const Image = styled.img`
    width:90%;
    border-radius: 100%;
`

export { Icon, Card, UserImageWrapper, LinkElement, DropArrowWrapper, Image }
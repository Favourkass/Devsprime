import styled from 'styled-components';


export const ElementWrapper = styled.ul`
    display: flex;
    justify-content:center;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: ${(props) => props.LeftMargin};
    margin-left: ${(props) => props.LeftMargin};

    @media screen and (max-width: 960px) {
        display:${props => props.active ? 'flex' : 'none'};
        flex-direction:column;
        
    }
`;


export const NavBtn = styled.button`
    background-image:linear-gradient(120deg, #ff8f00 0%, #ffb900 100%);
    width:25px;
    height:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    border-radius:50%;
    border:none;
    position:absolute;
    top:0%;
    right:0%;
    cursor:pointer;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;

 @media screen and (min-width:960px){
    display:none;
 }   
`




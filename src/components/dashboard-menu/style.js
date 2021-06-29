import styled from "styled-components";


const Container = styled.div`
    box-sizing: border-box; 
    width: 100vw;
    height: 200px;
    background: #FFF7DF;
`;

const MenuTitle = styled.h2`
    color: #5C5C5C;
    margin-top: 61px;
    font-size: 18px;
    text-align: center;
`;

const SubMenuContainer = styled.div`
    display: flex;
    /* background: red; */
    margin-top: 30px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width:450px) {
    flex-direction: column;
    /* padding-bottom: 50px; */
    }
`;

const SubMenu = styled.a`
    color: #5C5C5C;
    text-decoration: none;
    font-size: 18px;
    /* margin: 30px 86px 15px 0; */
    &:hover {
        color: #000;
    }
    &:focus{
        position: relative;
    }
    &:focus::after{
        content: "";
        width: 22px;
        height: 3px;
        background: #FFC000;
        position: absolute;
        bottom: -15px;
        left: 40%;
    }
    @media (max-width:450px) {
        /* display: block; */
        /* margin-bottom: 20px; */

    }
`;

export { Container, MenuTitle, SubMenuContainer, SubMenu };

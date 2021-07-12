import styled from "styled-components";
const CardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    align-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 30px;

    .paginationBttns {
        width: 65%;
        height: 40px;
        list-style: none;
        display: flex;
        justify-content: center;
        margin: auto;
        margin-top: 40px;
    }
    .paginationBttns a {
        padding: 10px 18px; 
        margin: 8px;
        border-radius: 100px;
        border: 1px solid #E0E0E0;
        color: #070808;
        cursor: pointer;
    }
    .paginationBttns a:hover {
        color: white;
        background: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);
    }
    .paginationActive a {
        color: white;
        background: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);
    }
    .paginationDisabled a {
        color: rgb(248, 247, 245);
        background-color: grey;
    }

    @media screen and (max-width: 600px){
        justify-content: center;
        .paginationBttns {
            margin-left: 5%;
    }
}`;


const Card = styled.section`
    position: relative;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    min-width: 270px;
    width: 270px;
    height: 270px;
`;


const Tier = styled.p`
    position: absolute;
    z-index: 5;
    top: 0;
    right: 0;
    background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);
    padding: 15px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-top: 0;
    color: #ffffff;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: justified;
`;


const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;


const TitleContainer = styled.div`
    position: absolute;
    bottom: 0;
    background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);
    width: 100%;
    height: 70px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;


const Title = styled.h3`
    color: white;
    width: 70%;
    margin-left: 35px;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: justified;
`;

const Loader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export { CardContainer, Card, Tier, Image, TitleContainer, Title, Loader };

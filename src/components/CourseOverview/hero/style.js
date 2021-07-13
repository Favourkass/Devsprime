import styled from 'styled-components'

export const HeroWrapper = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    background: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);
    padding: 5rem 0;    

`
export const Text = styled.p`
    display:flex;
    justify-content:space-around;
    align-items:center;
    max-width: 750px;
    text-align:center;
    font-size: 18px;
    font-weight: light;
    line-height: 1.5rem;
    color: #FFFFFF;
    
    
`

export const ButtonWrapper = styled.div`
    display:flex;
    align-items:center;
    height:auto;
    margin-top:1rem;
    .add-cart-btn{
    color: #FFC000;
    background: "white";
    padding: 12px 30px;
    border-radius: 100px;
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
    border: none;
    margin:2.5px;
    font-weight:bold;
    cursor: pointer;
    }
`
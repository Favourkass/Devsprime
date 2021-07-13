import styled from 'styled-components'
import { useState } from 'react'
import { Paragraph } from '../../../../components/typography';

const Container = styled.div`

`;

const PriceStyle = styled.div`
    max-width: 150px;
    display: grid;
    grid-template-rows: max-content 1em;
    margin-bottom: -10px;


    input[type='range']{
        -webkit-appearance:none;
        height:4px;
        background: black;
        grid-column: 1;
        grid-row: 2;
        outline: none;
        -webkit-transition: 0.2s;
        transition: 0.2s; 
        pointer-events: none;
    }

    input[type='range']::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        background: black;
        border-radius: 100%;
        pointer-events: auto;
    }
    
    input[type='range']::-ms-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        background: black;
        border-radius: 100%;
        pointer-events: auto;
    }

    input[type='range']::-moz-range-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        background: black;
        border-radius: 100%;
        pointer-events: auto;
    }
`;

const PriceBar = ({lowest=1, highest=1000}) => {

    let [value, setValue] = useState(highest);

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return ( 
        <Container>
            <PriceStyle>
                <input type="range" id="slider1" min={1} max={1000} step={1} value={1}/>
                <input type="range" id="slider2" min={1} max={1000} step={1} value={value} onChange={handleChange}/>
            </PriceStyle>
            <Paragraph children={`Price ₦${lowest} - ₦${value}`} size="11"/>
        </Container>
    );
}

export default PriceBar;

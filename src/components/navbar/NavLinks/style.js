import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Item = styled.li`
    height: 50px;
`;

export const ItemLink= styled(Link)`
    color: ${(props) => props.color};
    fill: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);
    display:flex;
  
    align-items: center;
    text-decoration: none;
    padding:0 1rem;
    height: 100%;
    cursor: pointer;
    text-transform: capitalize;
    
    Font-family: Roboto;
    Font-style: Regular;
    Font-size: ${(props) => props.size};
    Line-height: 17.58px;
    font-weight: normal;


    &.active {
        border-bottom: 3px solid #01bf71;

    }

`;
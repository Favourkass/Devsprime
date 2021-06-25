import styled from 'styled-components';

const HeaderWrapper = styled.header`
    font-size: ${props => props.fontSize ? props.fontSize : '40px'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
    line-height: 150.34%;
    color: ${props => props.color ? props.color : "rgba(255,138,0,1)"};
`;

export default HeaderWrapper;

import styled from 'styled-components';

const ParagraphWrapper = styled.div`
    font-size:  ${props => props.fontSize ? props.fontSize : "14px"};
    color:  ${props => props.color ? props.color : "#5C5C5C"};
    line-height: 175.78%;
`;

export default ParagraphWrapper;

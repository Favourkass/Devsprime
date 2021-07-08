import styled from 'styled-components';

const HeaderComp = styled.h1`
    font-size: ${(props) => props.size}px;
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    line-height: ${(props) => props.lineHeight};
`;

const SubHeaderComp = styled.h2`
    font-size: ${(props) => props.size}px;
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    line-height: ${(props) => props.lineHeight};
`;

const ParagraphStyle = styled.p`
    font-size: ${(props) => props.size}px;
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    line-height: ${(props) => props.lineHeight};
`;

export { HeaderComp, SubHeaderComp, ParagraphStyle }
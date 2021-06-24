import React from 'react';

import { Image, ImageContainer, Tier, Title, Container, Wrapper } from './style';

const CourseCard = props => {
  return (
    <Wrapper id="CourseCard">
        <ImageContainer>
            <Tier>{props.tier}</Tier>
            <Image src={props.image} alt=""></Image>
        </ImageContainer>
        <Container>
            <Title>{props.title}</Title>
        </Container>
    </Wrapper>
  );  
};

export default CourseCard;
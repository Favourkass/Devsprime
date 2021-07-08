import React from "react";
import { Wrapper, Card, CardBody, ImageTop, CardImageTop, Quote, SpanDiv, SpanH5, CardP, SpanH6 } from './style'


function Testimonial(props) {
  return (
    <Wrapper id="Testimonial">
      <Card>
        <CardBody>
          <Quote src="https://res.cloudinary.com/devsprime/image/upload/v1624375051/Icons%20and%20Logo/quote_siz6ew.svg" alt="" />
          <CardP>{props.text}</CardP>
          <ImageTop>
            <CardImageTop src={props.avatar} alt="avatar"></CardImageTop>
            <SpanDiv>
              <SpanH5>{props.author}</SpanH5> <br />
              <SpanH6>Categories: {props.categories}</SpanH6>
            </SpanDiv>
          </ImageTop>
        </CardBody>
      </Card>
    </Wrapper>
  );
}

export default Testimonial;


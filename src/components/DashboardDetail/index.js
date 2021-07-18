import ImageComponent from "./image";
import { Paragraph } from "../typography";

import React from "react";
import { MainWrapper, InnerWrapper, MenuWrapper } from "./style";

function DashBoardDetail(props) {
  return (
    <MainWrapper>
      <MenuWrapper>
        <div className="img-text">
          <div className="img">
            <ImageComponent image={props.image} alt={props.alt} />
          </div>

          <Paragraph className="text">{props.detail} </Paragraph>
        </div>
      </MenuWrapper>

      <InnerWrapper>
        <MenuWrapper>{props.category}</MenuWrapper>
        <MenuWrapper
          style={{ color: props.status === "successful" ? "#219653" : "red" }}
        >
          {props.status}
        </MenuWrapper>
        <MenuWrapper>{props.instructor}</MenuWrapper>
        <MenuWrapper>{props.date}</MenuWrapper>
      </InnerWrapper>
    </MainWrapper>
  );
}
export default DashBoardDetail;

import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { SubHeader } from "../../typography";
import { AiFillLock } from "react-icons/ai";
import { Container, ModuleWrapper, NavBtn } from "./dropdownStyle";

const DropdownWithoutLink = ({ title, courseVideos, type }) => {
  const [active, setActive] = useState(true);

  function handleActive() {
    setActive(!active);
  }
  return (
    <>
      <NavBtn onClick={handleActive}>
        <FaList />
      </NavBtn>

      <Container active={active}>
        <ModuleWrapper className="container">
          <SubHeader>{title}</SubHeader>
          {courseVideos && courseVideos.length > 0 ? (
            courseVideos.map((video, i) => {
              return (
                <div className="video-cont">
                  <div className="video-name">{video.name}</div>
                  <div className="lock">
                    <AiFillLock />
                  </div>
                </div>
              );
            })
          ) : (
            <>No video available</>
          )}
        </ModuleWrapper>
      </Container>
    </>
  );
};

export default DropdownWithoutLink;

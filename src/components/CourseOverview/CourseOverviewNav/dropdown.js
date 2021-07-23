import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { SubHeader } from "../../typography";
import { Container, LessonLink, ModuleWrapper, NavBtn } from "./dropdownStyle";
import { Link } from "react-router-dom";

const CourseDropDown = ({ title, courseVideos, playLesson, type }) => {
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
        <ModuleWrapper>
          <SubHeader>{title}</SubHeader>
            <ul>
              {courseVideos && courseVideos.length > 0 ? (
                courseVideos.map((video, i) => {
                  return (
                    <li>
                      <Link
                        to=""
                        onClick={() => playLesson(`${video.video_url}`)}
                        key={i}
                      >
                        <LessonLink>{video.name}</LessonLink>
                      </Link>
                    </li>
                  );
                })
              ) : (
                <>No course video available</>
              )}
            </ul>
        </ModuleWrapper>
      </Container>
    </>
  );
};

export default CourseDropDown;

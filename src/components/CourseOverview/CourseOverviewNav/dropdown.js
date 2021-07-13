import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { SubHeader } from "../../typography";
import { Container, LessonLink, ModuleWrapper, NavBtn } from "./dropdownStyle";
import { Link } from "react-router-dom";

const CourseDropDown = ({ title, course_url, playLesson, type }) => {
  const [active, setActive] = useState(true);

  function handleActive() {
    setActive(!active);
  }

  const course_data = Object.keys(course_url).map((course) => ({
    course_name: course,
    course_link: course_url[course],
  }));
  return (
    <>
      <NavBtn onClick={handleActive}>
        <FaList />
      </NavBtn>

      <Container active={active}>
        <ModuleWrapper>
          <SubHeader>{title}</SubHeader>
          {type === "Free" || type === "free" ? (
            <>
              {course_data && course_data.length > 0 ? (
                course_data.map((lessons, i) => {
                  return (
                    <>
                      <Link
                        to=""
                        onClick={() => playLesson(`${lessons.course_link}`)}
                        key={i}
                      >
                        <LessonLink>{lessons.course_name}</LessonLink>
                      </Link>
                    </>
                  );
                })
              ) : (
                <>loading courses..</>
              )}
            </>
          ) : (
            <>pay for this course</>
          )}
        </ModuleWrapper>
      </Container>
    </>
  );
};

export default CourseDropDown;

import { CourseStyle } from "./style";
import CourseCard from "../../../components/ProductCard";
import React, { useEffect, useState } from "react";
import { Paragraph } from "../../../components/typography";
import { Link } from "react-router-dom";

const Courses = ({ courseData, type, path }) => {
  const [coursetype, setCoursetype] = useState(type);
  const [courser_data, setCourser_data] = useState();

  useEffect(() => {
    setCourser_data(courseData);
    setCoursetype(type);
  }, [courseData, type]);

  return (
    <>
      {courser_data && courser_data && courser_data.length > 0 ? (
        courser_data.map((item, index) => {
          if (item.course_type.toLowerCase() === coursetype.toLowerCase()) {
            return (
              <Link key={index} to={`courses/${item.id}`}>
                <CourseStyle>
                  <CourseCard
                    image={item.cover_img}
                    tier={item.course_type}
                    title={item.title}
                  />
                </CourseStyle>
              </Link>
            );
          } else {
            return "";
          }
        })
      ) : (
        <Paragraph>No Courses</Paragraph>
      )}
    </>
  );
};

export default Courses;

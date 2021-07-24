import { CourseStyle } from "./style";
import CourseCard from "../../../components/ProductCard";
import React, { useEffect, useState } from "react";
import { Paragraph } from "../../../components/typography";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Courses = ({ courseData, type }) => {
  const [coursetype, setCoursetype] = useState(type);
  useEffect(() => {
    setCoursetype(type);
  }, [courseData, type]);

  return (
    <>
      {courseData && courseData.courses.length > 0 ? (
        courseData.courses.map((item, idx) => {
          if (coursetype && item.course_type.toLowerCase() === coursetype.toLowerCase()) {
            return (
              <Link key={idx} to={`courses/${item.id}`}>
                <CourseStyle>
                  <CourseCard
                    image={item.cover_img}
                    tier={item.course_type}
                    title={item.title}
                  />
                </CourseStyle>
              </Link>
            );
          }else if (!coursetype){
            return(
              <Link key={idx} to={`courses/${item.id}`}>
              <CourseStyle>
                <CourseCard
                  image={item.cover_img}
                  tier={item.course_type}
                  title={item.title}
                />
              </CourseStyle>
            </Link>
            )
          }
          
          else {
            return "";
          }
        })
      ) : (
        <Paragraph>No Course</Paragraph>
      )}
    </>
  );
};

const mapStateToProps = (store) => ({
  courseData: store.courses.courses,
});

export default connect(mapStateToProps, null)(Courses);

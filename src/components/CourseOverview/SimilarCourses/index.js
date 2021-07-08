import React from "react";
import { Wrapper, CourseCardWrapper, SimilarCoursesContainer } from "./style";
import { SubHeader } from "../../typography/index";
import CourseCard from "../../courseCard/index";
import { Link } from "react-router-dom";

const SimilarCourses = ({ allCourses, category_id, path }) => {
  console.log(allCourses);
  return (
    <SimilarCoursesContainer>
      <SubHeader>Similar Courses</SubHeader>
      <Wrapper>
        {allCourses && allCourses.courses && allCourses.courses.length > 0 ? (
          allCourses.courses.map((course, i) => {
            if (course.category_id === category_id) {
              return (
                <CourseCardWrapper key={i}>
                  <Link to={`/courses/${course.id}`}>
                    <CourseCard
                      tier={course.type_id}
                      title={course.title}
                      image={course.cover_img}
                    />
                  </Link>
                </CourseCardWrapper>
              );
            } else {
              return "";
            }
          })
        ) : (
          <>loading Similar courses</>
        )}
      </Wrapper>
    </SimilarCoursesContainer>
  );
};

export default SimilarCourses;

// import React from 'react';
// import {Wrapper, CourseCardWrapper, SimilarCoursesContainer} from './style';
// import {SubHeader} from '../../typography/index';
// import CourseCard from '../../courseCard/index';

// const SimilarCourses = () =>{

//     return(

//         <SimilarCoursesContainer>
//             <SubHeader>Similar Courses</SubHeader>

//             <Wrapper>
// <CourseCardWrapper>
//     <CourseCard tier='Premium' title='How To Have A Good Listening Ear For Music' image='https://res.cloudinary.com/devsprime/image/upload/v1624389006/media/our_team_hedvdn.jpg'/>
// </CourseCardWrapper>

//                 <CourseCardWrapper>
//                     <CourseCard tier='Premium' title='How To Have A Good Listening Ear For Music' image='https://res.cloudinary.com/devsprime/image/upload/v1624389006/media/our_team_hedvdn.jpg'/>
//                 </CourseCardWrapper>

// <CourseCardWrapper>
//     <CourseCard tier='Premium' title='How To Have A Good Listening Ear For Music' image='https://res.cloudinary.com/devsprime/image/upload/v1624389006/media/our_team_hedvdn.jpg'/>
// </CourseCardWrapper>

//                 <CourseCardWrapper>
//                     <CourseCard tier='Premium' title='How To Have A Good Listening Ear For Music' image='https://res.cloudinary.com/devsprime/image/upload/v1624389006/media/our_team_hedvdn.jpg'/>
//                 </CourseCardWrapper>

//             </Wrapper>
//         </SimilarCoursesContainer>
//     )

// }

// export default SimilarCourses;

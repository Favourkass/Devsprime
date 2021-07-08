import React  from 'react';
import { SubHeader } from '../../typography';
import { Container, LessonLink} from './style';
import {Link} from "react-router-dom";

const CourseOverviewNav = ({title, playLesson, course_url, type}) => {
  console.log('course_url',course_url)
  var course_data =[]
  if(course_url){
    course_data = Object.keys(course_url).map(k => ({course_name: k, course_link: course_url[k]}))
  }

 
  return(
   <>
     

    <Container>
     
      <SubHeader>{title}</SubHeader>
        {type === "Free" || type === "free" ?
            <>

            {course_data && course_data.length>0 ? course_data.map((lessons, i) => {
              return(
                <>
                  <Link to="" onClick={()=> playLesson(`${lessons.course_link}`)} key={i}>                  
                <LessonLink >{lessons.course_name}</LessonLink>
                </Link>
              </>
              )
            }):<>loading courses..</>}
            
</>
:
<>pay for this course</>
}
    
    </Container>
  </>
  )
}

export default CourseOverviewNav;






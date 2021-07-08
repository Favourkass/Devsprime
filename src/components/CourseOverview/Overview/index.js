import React from 'react';
import {OverviewWrapper} from './style';
import Description from '../description/index';
import InstructorDetails from '../InstructorDetails/index';
import CourseOverviewNav from '../CourseOverviewNav/index'


const OverviewDetails = ({url, title, description, course_url, type}) => {
    
    // console.log(course_url)
    return(

        <OverviewWrapper>
            <InstructorDetails />
            <Description
               description = {description}
             />
            <CourseOverviewNav 
            url={url} title={title} course_url={course_url} type={type} />
        </OverviewWrapper>
      

      
    )
}

export default OverviewDetails;
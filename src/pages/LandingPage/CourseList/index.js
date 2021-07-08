import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { fetchCourses } from '../../../redux/actions/courses.actions'
import { Link } from "react-router-dom";
import { Courses } from './data'
import { Card, Tier, Image, TitleContainer, Title, CardContainer, CourseTitle } from "./style";
import { CenteredBtn } from "../CourseList/style"
import { Header } from "../../../components/typography";
import Button from '../../../components/button'


// export const CoursesContainer = ({ courseData, fetchCourses, path }) => {
export const CoursesContainer = ({ courseData, fetchCourses }) => {

    useEffect(fetchCourses, [fetchCourses]);
    
    // const displayCourses = courseData.courses && Object.keys(courseData.courses).length> 0 ? courseData.courses
    const displayCourses = Courses
            .slice(0, 13)
            .map((course)=>(
                // <Link key={course.id} to={`${path}/${course.id}`}>
                    <Card >
                        <Tier>{course.type_id}</Tier>
                        <Image src={course.cover_img} />
                        <TitleContainer>
                            <Title>{course.title}</Title>
                        </TitleContainer>
                    </Card>
                // </Link>
            ))
            // : <div>loading...</div>


    return (
        <>
            <CourseTitle>
                <Header>Courses</Header>
            </CourseTitle>
            
      
            <CardContainer>
                { displayCourses }
            </CardContainer>
            <CenteredBtn>
                <Link to="/courses">
                    <Button type="button" small="small" primary="white" width="150px">Discover</Button>
                </Link>
            </CenteredBtn>
           
        </>
    )
};

const mapStateToProps = (store) => ({
  courseData: store.courses.courses,
});

export default connect(mapStateToProps, { fetchCourses })(CoursesContainer);


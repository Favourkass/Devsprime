import { Link } from "react-router-dom";
// import { Courses } from './data'
import { Card, Tier, Image, TitleContainer, Title, CardContainer, CourseTitle } from "./style";
import { CenteredBtn } from "../CourseList/style"
import { Header } from "../../../components/typography";
import Button from '../../../components/button'


export const CoursesContainer = ({ courses}) => {
// export const CoursesContainer = ({ courseData, fetchCourses }) => {


    
    const displayCourses = courses && Object.keys(courses).length> 0 ? courses
    // const displayCourses = Courses
            .slice(0, 13)
            .map((course)=>(
                <Link key={course.id} to={`courses/${course.id}`}>
                    <Card >
                        <Tier>{course.type_id}</Tier>
                        <Image src={course.cover_img} />
                        <TitleContainer>
                            <Title>{course.title}</Title>
                        </TitleContainer>
                    </Card>
                </Link>
            ))
            : <div>No Course Available</div>


    return (
        <div className="container">
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
           
        </div>
    )
};



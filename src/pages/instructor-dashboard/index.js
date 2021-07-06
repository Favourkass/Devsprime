import NavBar from "../../components/navbar/NavBarWraper";
import ProfileDetail from "../../components/InstructorDashboard/ProfileDetail";
import Courses from "../../components/InstructorDashboard/Courses";
import { CardContainer } from "../../components/InstructorDashboard/Courses/style";
import { courses, instructor } from "./data";
import Footer from "../../components/Footer";
import Button from "../../components/button";
import ButtonContainer from "./style";


const InstructorDashboard = () => {
  return (
    <>
      <NavBar />
      <ProfileDetail 
        avatar={instructor.avatar}
        instructorName={instructor.fullname}
        instructorDescription={instructor.description}
        facebookLink={instructor.facebook}
        twitterLink={instructor.twitter}
        instagramLink={instructor.instagram}
      />
      <CardContainer>
        {courses.map((course) => (
          <Courses
            key={course.id}
            tier={course.type}
            coverImage={course.cover_img}
            courseTitle={course.title}
          />
        ))}
      </CardContainer>
      <ButtonContainer>
      <Button
      primary
      large
      >
        Upload a New Course
      </Button>
      </ButtonContainer>
      <Footer/>
    </>
  );
};

export default InstructorDashboard;

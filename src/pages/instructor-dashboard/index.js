import NavBar from "../../components/navbar/NavBarWraper";
import ProfileDetail from "../../components/InstructorDashboard/ProfileDetail";
import Courses from "../../components/InstructorDashboard/Courses";
import { CardContainer } from "../../components/InstructorDashboard/Courses/style";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ButtonContainer from "./style";
import Button from "../../components/button";
import { fetchInstructor } from "../../redux/actions/instructor.action";
import { fetchInstructorCourses } from "../../redux/actions/instructorCourses.action";

const InstructorDashboard = (
  { currentUser: { users }, token, fetchInstructor, fetchInstructorCourses },
  ...props
) => {
  const [instructorCourses, setInstructorCourses] = useState([]);
  const [instructorProfile, setInstructorProfile] = useState({});
  const [instructorName, setInstructorName] = useState("");
  const [instructorAvatar, setInstructorAvatar] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (users && users.data && users.data.is_learner) {
    window.location.href = "/dashboard";
  }

  useEffect(() => {
    if (!users.data.is_learner) {
      setIsAuthenticated(true);
    }
    setInstructorName(users.data.fullname);
    setInstructorAvatar(users.data.avatar);

    fetchInstructor(token).then(({ payload: { data } }) => {
      const { id: instructorID } = data;
      setInstructorProfile(data);
      fetchInstructorCourses(token, instructorID).then(
        ({ payload: { data } }) => {
          setInstructorCourses(data.courses);
        }
      );
    });
  }, [users, token, fetchInstructor, fetchInstructorCourses]);

  return (
    <>
      {isAuthenticated && (
        <>
          <NavBar />
          <ProfileDetail
            avatar={instructorAvatar}
            instructorName={instructorName}
            instructorDescription={instructorProfile.bio}
            facebookLink={instructorProfile.facebook}
            twitterLink={instructorProfile.twitter}
            instagramLink={instructorProfile.instagram}
          />
          <CardContainer>
            {instructorCourses && instructorCourses.length >= 1 ? (
              instructorCourses.map((course, index) => (
                <Link to={`/courses/${course.id}/edit`} key={index}>
                  <Courses
                    key={index}
                    tier={course.type_id}
                    coverImage={course.cover_img}
                    courseTitle={course.title}
                  />
                </Link>
              ))
            ) : (
              <>You have not created courses yet. Get started below</>
            )}
          </CardContainer>
          <ButtonContainer>
            <Link to="/dashboard/instructor/upload">
              <Button primary large>
                Upload a Course
              </Button>
            </Link>
          </ButtonContainer>
          <Footer />
        </>
      )}
    </>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.user,
  token: store.login.token,
});

export default connect(mapStateToProps, {
  fetchInstructor,
  fetchInstructorCourses,
})(InstructorDashboard);

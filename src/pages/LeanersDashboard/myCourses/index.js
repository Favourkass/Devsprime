import Button from "../../../components/button";
import NavBar from "../../../components/navbar/NavBarWraper";
import Footer from "../../../components/Footer";
import { Header, SubHeader } from "../../../components/typography";
import { black } from "../../../components/colour/colour";
import { PageStyle, Wrapper, ParagraphWrapper } from "./style";
import { Link } from "react-router-dom";
import Courses from "./courses";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchCourses } from "../../../redux/actions/courses.actions";
import { fetchUsers } from "../../../redux/actions/userprofile.action";
import { getCartList } from "../../../redux/actions/cart.action";


const courseTypeData = ["All","Free", "Paid"];

const CourseTypeList = ({ handleOnClick }) => {
  return courseTypeData.map((courseType, index) => (
    <ParagraphWrapper key={index}>
      <Header size={15} color={black}>
        <div
          onClick={handleOnClick}
          key={index}
          data-value={courseType}
          className="course-type"
        >
          {courseType}
        </div>
      </Header>
    </ParagraphWrapper>
  ));
};

const Course = ({ courseData, fetchCourses, userData, history }) => {
  const [type, setType] = useState(false);

  const handleOnClick = (e) => {
    if (e.target.getAttribute("data-value")==="All" ){
      setType(false);
    }else
    setType(e.target.getAttribute("data-value"));
  };
  const pageController = () => {
    if (userData && !userData.is_learner) {
      return (window.location = "/login");
    }
  };

  pageController();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetchCourses(token);
    getCartList(token);
  }, [fetchCourses]);

  return (
    <>
      <NavBar />
      <PageStyle className="container">
        <div className="menu-container">
          <div className="header-cont d-flex d-flex-center">
            <Header size={20} color={black}>
              My Courses
            </Header>
          </div>
          <div className="course-type-cont">
            <CourseTypeList handleOnClick={handleOnClick} />
          </div>
        </div>
        {courseData && courseData.courses ? (
          <Wrapper>
            <Courses path={history.location.pathname} type={type}></Courses>
            <div className="button">
              <Link to="/courses">
                <Button
                  className="discover-btn"
                  primary
                  medium
                >Discover Courses</Button>
              </Link>
            </div>
          </Wrapper>
        ) : (
          <SubHeader size={25} className="d-flex d-flex-center">
            You currently have no course
          </SubHeader>
        )}
      </PageStyle>
      <Footer />
    </>
  );
};

const mapStateToProps = (store) => ({
  courseData: store.courses.courses,
  userData: store.user.users.data,
});

export default connect(mapStateToProps, { fetchCourses, fetchUsers })(Course);

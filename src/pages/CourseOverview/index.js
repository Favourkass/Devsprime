import React, { useEffect } from "react";
import NavBar from "../../components/navbar/NavBarWraper";
import CourseOverviewHero from "../../components/CourseOverview/hero/index";
import VideoPlayer from "../../components/CourseOverview/VideoPlayer/index";
import CourseNav from "../../components/CourseOverview/nav/index";
import OverviewDetails from "../../components/CourseOverview/Overview/index";
import SimilarCourses from "../../components/CourseOverview/SimilarCourses/index";
import NewsLetterSubscription from "../../components/CourseOverview/NewsletterSubscription";
import Footer from "../../components/Footer/index";
import { connect } from "react-redux";
import {
  getCoursesDetail,
  getAllCourses,
} from "../../redux/actions/courseOverview.action";

const CourseOverview = ({
  getCourse,
  getCoursesDetail,
  getAllCourses,
  allCourses,
  token,
  history,
  match,
}) => {
  var course_overview = "";
  var title = "";
  var course_url = {};
  var type = "";
  var category_id = "";
  var description = "";
  var created_at = "";
  var course_id = "";

  if (Object.keys(getCourse).length > 0) {
    course_overview = getCourse.course.overview;
    title = getCourse.course.title;
    course_url = getCourse.course.course_url;
    type = getCourse.course.type_id;
    category_id = getCourse.course.category_id;
    description = getCourse.course.description;
    created_at = getCourse.course.created_at;
    course_id = getCourse.course.id;
    console.log(getCourse.course.id, token);
  }

  useEffect(() => {
    getCoursesDetail(match.params.course_id);
    getAllCourses();
  }, [getCoursesDetail, match.params.course_id, getAllCourses]);

  return (
    <>
      <NavBar />
      <CourseOverviewHero token={token} course_id={course_id} />
      <VideoPlayer
        url={course_overview}
        title={title}
        course_url={course_url}
        type={type}
      />
      <CourseNav />
      <OverviewDetails
        url={course_overview}
        title={title}
        course_url={course_url}
        type={type}
        description={description}
        created_at={created_at}
      />
      <SimilarCourses
        allCourses={allCourses}
        category_id={category_id}
        path={history.location.pathname}
      />
      <NewsLetterSubscription />
      <CourseOverviewHero />
      <Footer />
    </>
  );
};
const mapStateToProps = (store) => ({
  getCourse: store.getCourse.getCourse,
  allCourses: store.getCourse.allCourses,
  token: store.login.token,
});

export default connect(mapStateToProps, {
  getCoursesDetail,
  getAllCourses,
})(CourseOverview);

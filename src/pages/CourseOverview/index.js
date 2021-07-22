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

import { getCourseVideo } from "../../redux/actions/courseVideo.action";


const CourseOverview = ({
  getCourse: { course },
  getCoursesDetail,
  getAllCourses,
  allCourses,
  getCourseVideo,
  courseVideo,
  token,
  history,
  match,
}) => {
  useEffect(() => {
    getCoursesDetail(match.params.course_id);
    getAllCourses();
    getCourseVideo({token:token, course_id:match.params.course_id})
  }, [getCoursesDetail, match.params.course_id, getAllCourses, getCourseVideo, token]);

  return (
    <>
      <NavBar token={token} />
      {course && course.title ? (
        <>
          <CourseOverviewHero
            title={course.title}
            token={token}
            course_id={course.id}
          />
          <VideoPlayer
            url={course.overview}
            title={course.title}
            courseVideos={courseVideo.videos}
            type={course.type}
          />
          <CourseNav />
          <OverviewDetails
            url={course.overview}
            title={course.title}
            course_url={course.course_url}
            type={course.type_id}
            description={course.description}
            created_at={course.created_at}
          />
          <SimilarCourses
            allCourses={allCourses}
            category_id={course.category_id}
            path={history.location.pathname}
          />
          <NewsLetterSubscription />
          <CourseOverviewHero token={token} course_id={course.course_id} />
        </>
      ) : (
        <div className="d-flex d-flex-center">This course is not available</div>
      )}
      <Footer />
    </>
  );
};
const mapStateToProps = (store) => ({
  getCourse: store.getCourse.getCourse,
  allCourses: store.getCourse.allCourses,
  token: store.login.token,
  courseVideo: store.courseVideo,
});

export default connect(mapStateToProps, {
  getCoursesDetail,
  getAllCourses,
  getCourseVideo,
})(CourseOverview);

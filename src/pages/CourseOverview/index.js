import React, { useEffect, useState } from "react";
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
import { fetchCourses } from "../../redux/actions/courses.actions";

const CourseOverview = ({
  getCourse: { course },
  getCoursesDetail,
  getAllCourses,
  allCourses,
  getCourseVideo,
  fetchCourses,
  courseVideo,
  learnerCourses,
  token,
  history,
  match,
}) => {
  
  const courseId = match.params.course_id
  useEffect(() => {
    getCoursesDetail(courseId);
    getAllCourses();
    getCourseVideo({token, courseId})
    fetchCourses(token)
  }, [getCoursesDetail, courseId, getAllCourses, getCourseVideo, token, fetchCourses]);
  
  const hasCourse = () => {
    if (learnerCourses && learnerCourses.courses){
      const courses = learnerCourses.courses
      const hasCourse = courses.filter((course) => course.id === courseId )
      return hasCourse.length > 0
    } 
    
  }
  const [hasAccess] = useState(hasCourse)

// Create New course overview Hero for user that has the course
//  use has access to toggle it 

  return (
    <>
      <NavBar token={token} />
      {course && course.title ? (
        <>
          <CourseOverviewHero
            title={course.title}
            token={token}
            course_id={course.id}
            hasAccess={hasAccess}
          />
          <VideoPlayer
            url={course.overview}
            title={course.title}
            hasAccess={hasAccess}
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
          <CourseOverviewHero 
            token={token} 
            hasAccess={hasAccess}
            course_id={course.course_id} 
          />
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
  learnerCourses: store.courses.courses
});

export default connect(mapStateToProps, {
  getCoursesDetail,
  getAllCourses,
  getCourseVideo,
  fetchCourses,
})(CourseOverview);

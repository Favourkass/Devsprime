import React, {useEffect} from 'react';
import NavBar from '../../components/navbar/NavBarWraper';
import CourseOverviewHero from '../../components/CourseOverview/hero/index';
import VideoPlayer from '../../components/CourseOverview/VideoPlayer/index';
import CourseNav from '../../components/CourseOverview/nav/index';
import OverviewDetails from '../../components/CourseOverview/Overview/index'
import SimilarCourses from '../../components/CourseOverview/SimilarCourses/index'
import NewsLetterSubscription from '../../components/CourseOverview/NewsletterSubscription';
import Footer from '../../components/Footer/index'
import {connect} from 'react-redux'
import {getCoursesDetail, getInstructor, getAllCourses} from '../../redux/actions/courseOverview.action'


const CourseOverview = ({
    getCourse, 
    getCoursesDetail, 
    // getInstructor,
    // instructorData, 
    allCourses,
    getAllCourses,
    match}) =>{
    
    console.log(allCourses)

    var course_overview ='';
    var title = '';
    var course_url= {};
    var type = '';
    // var instructor_id = '';
    if (Object.keys(getCourse).length>0){
        course_overview=getCourse.course.overview;
        title=getCourse.course.title;
        course_url=getCourse.course.course_url;
        type=getCourse.course.type_id;
        // instructor_id= getCourse.course.instructor_id
    }
var token = "1b28caa8b55d16a31d8ba5fcfb2dddce55316ce4";
// console.log(instructor_id, token)
    useEffect(() => {
        getCoursesDetail(match.params.course_id);
        // getAllCourses();
        // if (instructor_id !== ''){
        //     getInstructor(instructor_id, token);
        // }        
    }
    ,[
        getCoursesDetail,
        // getInstructor,
        getAllCourses,
        match.params.course_id,
        getCourse,
        allCourses,
        // instructor_id,
        token
    ])

    return(
        <>
        
        <NavBar />
        <CourseOverviewHero />
        <VideoPlayer 
        url={course_overview} 
        title={title} 
        course_url={course_url}
        type={type}
        />
        <CourseNav />
        <OverviewDetails/>
        <SimilarCourses />
        <NewsLetterSubscription />
        <CourseOverviewHero />
        <Footer />

        
        

        </>
    )

}
const mapStateToProps = (store) => ({
    getCourse: store.getCourse.getCourse,
    // instructorData: store.getCourse.instructorData,
    allCourses: store.getCourse.allCourses,
})

export default connect(mapStateToProps, {
    getCoursesDetail, 
    // getInstructor,
    getAllCourses,
})(CourseOverview);
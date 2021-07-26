import NavBar from "../../components/navbar/NavBarWraper";
import CourseEditForm from "./form/index";
import Footer from "../../components/Footer";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Hero from "./hero";

const EditCourse = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [existingVideos, setExistingVideos] = useState([]);
  const [courseTitle, setCourseTitle] = useState("");

  const { courseID } = useParams();

  const { REACT_APP_BASE_URL: BASE_URL } = process.env;
  const token = localStorage.getItem("token");
  const userInformationURL = `${BASE_URL}/user/`;
  const courseVideosURL = `${BASE_URL}/courses/${courseID}/videos`;

  const getUserInformation = useCallback(async () => {
    const response = await fetch(userInformationURL, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const userInformation = await response.json();
    return userInformation;
  }, [token, userInformationURL]);

  const getCourseVideos = useCallback(async () => {
    const response = await fetch(courseVideosURL, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const courseVideos = await response.json();
    return courseVideos;
  }, [token, courseVideosURL]);

  useEffect(() => {
    getUserInformation()
      .then((userInformation) => {
        if (userInformation.data.is_instructor) {
          setIsAuthenticated(true);
          getCourseVideos().then((courseVideos) => {
            console.log(courseVideos);
            setExistingVideos(courseVideos.data.videos);
            setCourseTitle(courseVideos.data.title);
          });
        } else {
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getUserInformation, getCourseVideos]);

  return (
    <>
      {isAuthenticated && (
        <>
          <NavBar />
          <Hero />
          <CourseEditForm existingVideos={existingVideos} courseID={courseID} courseTitle={courseTitle}/>
          <Footer />
        </>
      )}
    </>
  );
};

export default EditCourse;

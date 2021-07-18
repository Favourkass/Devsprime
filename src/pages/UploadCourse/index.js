import NavBar from "../../components/navbar/NavBarWraper";
import CourseUploadForm from "./form/index";
import Footer from "../../components/Footer";
import { useState, useEffect, useCallback } from "react";
import Hero from "./hero";

const UploadCourse = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { REACT_APP_BASE_URL: BASE_URL } = process.env;
  const token = localStorage.getItem("token");
  const userInformationURL = `${BASE_URL}/user/`;

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

  useEffect(() => {
    getUserInformation()
      .then((userInformation) => {
        console.log("User Information", userInformation);
        if (userInformation.data.is_instructor) {
          setIsAuthenticated(true);
        } else {
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getUserInformation]);

  return (
    <>
      {isAuthenticated && (
        <>
          <NavBar />
          <Hero />
          <CourseUploadForm />
          <Footer />
        </>
      )}
    </>
  );
};

export default UploadCourse;

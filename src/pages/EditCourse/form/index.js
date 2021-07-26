import { useState, useEffect } from "react";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import validationSchema from "./validation";
import ErrorMsg from "./errorMessage";
import {
  Container,
  FieldStyle,
  FormFieldContainer,
  ButtonContainerStyle,
  ButtonContainer,
  VideoFieldStyle,
  HeaderText,
  addCourseVideoStyle,
  VideoDeleteButton,
  VideoContainer,
  VideoCardItem,
  VideoCard,
  VideoCardTitle,
  VideoCardText,
} from "./style";
import Button from "../../../components/button";
import { uploadCourse } from "../../../redux/actions/courseUpload.action";
import request, { headers } from "../../../request";
import ReactPlayer from "react-player";

function CourseEditForm(
  { token, courseID, courseTitle, existingVideos },
  ...prop
) {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [courseVideos, setCourseVideos] = useState([]);

  console.log("EXISTING COURSE VIDEOS", existingVideos);

  const addCourseVideos = async (courseID, payload, token) => {
    const response = await request.post(
      `courses/${courseID}/videos/`,
      payload,
      headers(token)
    );
    const { data } = response;
    return data;
  };

  useEffect(() => {}, []);

  return (
    <div>
      {existingVideos && existingVideos.length > 0 && (
        <div>
          <HeaderText>
            Existing Videos for <strong>{courseTitle}</strong>
          </HeaderText>
          <VideoContainer>
            {existingVideos.map((video, index) => (
              <VideoCardItem key={index}>
                <VideoCard>
                  <>
                    <ReactPlayer
                      url={video.video_url}
                      width="100%"
                      height="100%"
                      controls
                    />
                  </>

                  <>
                    <VideoCardTitle>{courseTitle}</VideoCardTitle>
                    <VideoCardText>{video.name}</VideoCardText>
                    <VideoDeleteButton>Delete</VideoDeleteButton>
                  </>
                </VideoCard>
              </VideoCardItem>
            ))}
          </VideoContainer>
        </div>
      )}
      <Container>
        <Formik
          initialValues={{
            video_urls: [],
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setLoading(true);
            setDisabled(true);
            console.log(values);
            let data = new FormData();
            for (let i = 0; i < courseVideos.length; i++) {
              data.append("video_urls", courseVideos[i]);
              console.log("video", courseVideos[i].name, courseVideos[i]);
            }

            addCourseVideos(courseID, data, token)
              .then((response) => {
                setLoading(false);
                console.log(response);
                if (response.message === "success") {
                  toast.success("Videos added successfully!");
                  setTimeout(() => {
                    window.location.href = `/courses/${courseID}/edit`;
                  }, 3000);
                } else {
                  toast.error(response.errors);
                  setDisabled(false);
                  setTimeout(() => {}, 2000);
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          {({ values, errors, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <ToastContainer />
              <FormFieldContainer>
                <label
                  htmlFor="courses"
                  style={{
                    ...FieldStyle,
                    ...addCourseVideoStyle,
                  }}
                >
                  Add More Videos
                  <span>{courseVideos.length} files added</span>
                  <input
                    id="courses"
                    type="file"
                    accept="video/*"
                    required
                    style={{ display: "none" }}
                    multiple
                    name="course_url"
                    onChange={(event) => {
                      let files = Array.from(event.target.files);
                      let list = [];
                      for (let i = 0; i < files.length; i++) {
                        if (!courseVideos.includes(files[i].name)) {
                          list.push(files[i]);
                        }
                      }
                      setCourseVideos([...courseVideos, ...list]);
                    }}
                  />
                </label>
                <ErrorMsg>{errors.video_urls}</ErrorMsg>
                {courseVideos.map((video, index) => (
                  <div style={VideoFieldStyle} key={index}>
                    <span key={index}>{video.name}</span>
                    <span>
                      <button
                        type="button"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          const oldVids = [...courseVideos];
                          oldVids.splice(index, 1);
                          setCourseVideos(oldVids);
                        }}
                      >
                        x
                      </button>
                    </span>
                  </div>
                ))}
              </FormFieldContainer>

              <ButtonContainer style={ButtonContainerStyle}>
                <Button primary medium type="submit" disabled={disabled}>
                  {loading ? (
                    <>
                      Adding videos...This might take a while...{" "}
                      <i className="fa fa-spinner fa-pulse" />
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </ButtonContainer>
            </form>
          )}
        </Formik>
      </Container>
    </div>
  );
}
const mapStateToProps = (store) => ({
  token: store.login.token,
});

export default connect(mapStateToProps, {
  uploadCourse,
})(CourseEditForm);

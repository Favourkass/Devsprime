import Fragment, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import validationSchema from "./validation";
import ErrorMsg from "./errorMessage";
import {
  Container,
  FieldStyle,
  Label,
  FormFieldContainer,
  ButtonContainerStyle,
  ButtonContainer,
  VideoFieldStyle,
} from "./style";
import Button from "../../../components/button";
import { fetchCourseCategory } from "../../../redux/actions/courseCategory.action";
import { fetchCourseType } from "../../../redux/actions/courseType.action";
import { uploadCourse } from "../../../redux/actions/courseUpload.action";

function CourseUploadForm(
  { token, fetchCourseCategory, fetchCourseType, uploadCourse },
  ...prop
) {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [courseTypes, setCourseTypes] = useState([]);
  const [courseCategories, setCourseCategories] = useState([]);
  const [courseVideos, setCourseVideos] = useState([]);

  useEffect(() => {
    fetchCourseCategory(token).then(({ payload: { data } }) => {
      setCourseCategories(data.course_categories);
    });
    fetchCourseType(token).then(({ payload: { data } }) => {
      setCourseTypes(data.course_types);
    });
  }, [token, fetchCourseType, fetchCourseCategory]);

  return (
    <div>
      <Container>
        <Formik
          initialValues={{
            title: "",
            description: "",
            price: "",
            type_id: "",
            category_id: "",
            cover_img: "",
            overview: "",
            course_url: [],
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setLoading(true);
            setDisabled(true);
            console.log(values);
            const imageInput = document.querySelector("#coverImage");
            const overviewInput = document.querySelector("#overview");
            let data = new FormData();
            data.append("title", values.title);
            data.append("description", values.description);
            data.append("price", values.price);
            data.append("cover_img", imageInput.files[0]);
            data.append("overview", overviewInput.files[0]);
            for (let i = 0; i < courseVideos.length; i++) {
              data.append("course_url", courseVideos[i]);
              console.log("video", courseVideos[i].name, courseVideos[i]);
            }
            data.append("category_id", values.category_id);
            data.append("type_id", values.type_id);

            uploadCourse(token, data).then(({ payload }) => {
              setLoading(false);
              if (payload.message === "success") {
                toast.success("Uploaded successfully!");
                setTimeout(() => {
                  window.location.href = "/dashboard/instructor";
                }, 3000);
              } else if (
                payload.message === "failure" &&
                payload.errors.invalid
              ) {
                toast.error(payload.errors.invalid);
                setDisabled(false);
                setTimeout(() => {}, 2000);
              } else if (
                payload.message === "failure" &&
                payload.errors.format_error
              ) {
                toast.error(payload.errors.format_error);
                setDisabled(false);
                setTimeout(() => {}, 2000);
              } else {
                setDisabled(false);
                toast.error("Invalid format for course videos! Try again");
              }
            });
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <ToastContainer />
              <FormFieldContainer>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Course Title"
                  style={FieldStyle}
                />
                <ErrorMsg>{errors.title}</ErrorMsg>
              </FormFieldContainer>
              <FormFieldContainer>
                <textarea
                  type="textarea"
                  onChange={handleChange}
                  value={values.description}
                  onBlur={handleBlur}
                  id="description"
                  name="description"
                  required
                  placeholder="Course Description"
                  style={FieldStyle}
                />
                <ErrorMsg>{errors.description}</ErrorMsg>
              </FormFieldContainer>
              <FormFieldContainer>
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                  id="price"
                  name="price"
                  required
                  placeholder="Price"
                  style={FieldStyle}
                />
                <ErrorMsg>{errors.price}</ErrorMsg>
              </FormFieldContainer>

              <FormFieldContainer>
                <Label htmlFor="coverImage">Cover Image</Label>
                <input
                  type="file"
                  onChange={(event) => {
                    setFieldValue("cover_img", event.currentTarget.files[0]);
                  }}
                  onBlur={handleBlur}
                  id="coverImage"
                  name="cover_img"
                  accept="image/png, image/jpeg, image/jpg"
                  required
                  placeholder="Cover Image"
                  style={FieldStyle}
                />
                <ErrorMsg>{errors.cover_img}</ErrorMsg>
              </FormFieldContainer>
              <FormFieldContainer>
                <Label htmlFor="overview">Course Overview</Label>
                <input
                  type="file"
                  onChange={(event) =>
                    setFieldValue("overview", event.target.files[0])
                  }
                  onBlur={handleBlur}
                  id="overview"
                  name="overview"
                  accept="video/*"
                  required
                  style={FieldStyle}
                />
                <ErrorMsg>{errors.overview}</ErrorMsg>
              </FormFieldContainer>
              <FormFieldContainer>
                <Label htmlFor="category">Course Category</Label>
                <select
                  name="category_id"
                  onChange={handleChange}
                  id="category"
                  style={FieldStyle}
                >
                  <option>{null}</option>
                  {courseCategories.map((category, idx) => (
                    <option key={idx} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <ErrorMsg>{errors.category_id}</ErrorMsg>
              </FormFieldContainer>
              <FormFieldContainer>
                <Label htmlFor="type">Course Type</Label>
                <select
                  name="type_id"
                  onChange={handleChange}
                  id="type"
                  style={FieldStyle}
                >
                  <option>{null}</option>
                  {courseTypes.map((type, idx) => (
                    <option key={idx} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
                <ErrorMsg>{errors.type_id}</ErrorMsg>
              </FormFieldContainer>

              <FormFieldContainer>
                <label
                  htmlFor="courses"
                  style={{ ...FieldStyle, cursor: "pointer" }}
                >
                  Add Video Files
                  <span style={{ marginLeft: "40px" }}>
                    {courseVideos.length} files added
                  </span>
                  <span style={{ marginLeft: "40px" }}>
                    {courseVideos.length} files
                  </span>
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
                <ErrorMsg>{errors.course_url}</ErrorMsg>
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
                      Uploading...This might take a while...{" "}
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
  fetchCourseType,
  fetchCourseCategory,
  uploadCourse,
})(CourseUploadForm);

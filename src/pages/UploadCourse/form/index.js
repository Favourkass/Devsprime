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
  Label,
  FormFieldContainer,
  ButtonContainerStyle,
  ButtonContainer,
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

            const imageInput = document.querySelector("#coverImage");
            const overviewInput = document.querySelector("#overview");
            const coursesInput = document.querySelector("#courses");

            let data = new FormData();
            data.append("title", values.title);
            data.append("description", values.description);
            data.append("price", values.price);
            data.append("cover_img", imageInput.files[0]);
            data.append("overview", overviewInput.files[0]);
            data.append("course_url", coursesInput.files[0]);
            data.append("category_id", values.category_id);
            data.append("type_id", values.type_id);

            uploadCourse(token, data).then(({ payload }) => {
              console.log(payload);
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
                <Label htmlFor="courses">Course Videos</Label>
                <input
                  type="file"
                  onChange={(event) => {
                    let files = event.target.files;
                    let list = [];
                    let length = files.length;
                    for (let len = 0; len < length; len++) {
                      list.push(files[len].name);
                    }
                    setFieldValue("course_url", list);
                  }}
                  onBlur={handleBlur}
                  id="courses"
                  name="course_url"
                  accept="video/*"
                  multiple
                  required
                  style={FieldStyle}
                />
                <ErrorMsg>{errors.course_url}</ErrorMsg>
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

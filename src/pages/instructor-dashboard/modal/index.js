import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal";
import { Formik } from "formik";
import validationSchema from "./validation";
import ErrorMsg from "./errorMessage";
import {
  modalStyles,
  closeButtonStyles,
  FieldStyle,
  Label,
  FormFieldContainer,
  ButtonContainerStyle,
} from "./style";
import ButtonContainer from "../style";
import Button from "../../../components/button";

Modal.setAppElement(document.getElementById("root"));

function FormModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [submit] = useState("Submit");
  const token = localStorage.getItem("token");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#FF8A00";
    subtitle.style.textAlign = "center";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <ButtonContainer>
        <Button primary large handleClick={openModal}>
          Upload a Course
        </Button>
      </ButtonContainer>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Upload a Course</h2>
        <button onClick={closeModal} style={closeButtonStyles}>
          x
        </button>
        <Formik
          initialValues={{
            title: "",
            description: "",
            price: "",
            type_id: "free",
            category_id: "design",
            cover_img: "",
            overview: "",
            course_url: [],
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
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

            console.log(data);

            const url = "http://localhost:18000/api/v1/courses/upload/";
            return fetch(url, {
              method: "POST",
              headers: new Headers({
                Authorization: "Token " + token,
              }),
              body: data,
            })
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((error) => console.log(error));
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
                  type="number"
                  step="0.01"
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
                    console.log(typeof event.target.files);
                    let files = event.target.files;
                    let list = [];
                    let length = files.length;
                    for (let len = 0; len < length; len++) {
                      list.push(files[len].name);
                    }
                    console.log(list);
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
                  value={values.category_id}
                  style={FieldStyle}
                >
                  <option value="design">Design</option>
                  <option value="art">Art</option>
                  <option value="music">Music</option>
                  <option value="dance">Dance</option>
                  <option value="programming">Programming</option>
                  <option value="devops">DevOps</option>
                  <option value="cybersecurity">Cyber Security</option>
                </select>
                <ErrorMsg>{errors.category_id}</ErrorMsg>
              </FormFieldContainer>

              <FormFieldContainer>
                <Label htmlFor="type">Course Type</Label>
                <select
                  name="type_id"
                  onChange={handleChange}
                  id="type"
                  value={values.type_id}
                  style={FieldStyle}
                >
                  <option value="free">Free</option>
                  <option value="premium">Premium</option>
                  <option value="paid">Paid</option>
                </select>
                <ErrorMsg>{errors.type_id}</ErrorMsg>
              </FormFieldContainer>

              <ButtonContainer style={ButtonContainerStyle}>
                <Button primary medium type="submit">
                  {submit}
                </Button>
              </ButtonContainer>
            </form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}

export default FormModal;

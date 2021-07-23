import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Please enter a course title"),
  description: Yup.string().required("Please enter a course description"),
  price: Yup.string()
    .required("Please enter a course price")
    .matches(/^[1-9]$|^[1-9][0-9]+$/, "Must be only digits")
    .min(1, "Must be more than 1 digit")
    .max(8, "Cannot be more than 8 digits"),
  type_id: Yup.string().required("Please select a course type"),
  category_id: Yup.string().required("Please select a course category"),
  course_url: Yup.mixed().required("Please select course videos"),
});

export default validationSchema;

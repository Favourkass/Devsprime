import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Please enter a course title"),
  description: Yup.string().required("Please enter a course description"),
  price: Yup.number().test(
    "is-decimal",
    "Price must be in decimal format",
    (value) => (value + "").match(/^[0-9]*\.[\d][\d]$/) && (value + "").split('.')[1].length === 2,
  ),

});

export default validationSchema;

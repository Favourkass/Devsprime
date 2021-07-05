import * as Yup from "yup";

const validate = Yup.object({
  Fullname: Yup.string()
    .min(3, "Ensure Fullname is longer than 3 characters")
    .required("Please enter your Full name"),
  Country: Yup.string().required("Please enter your Country"),
  StreetAddress: Yup.string().required("Please enter your Street Address"),
  City: Yup.string().required("Please enter your City"),
  Message: Yup.string().required("Please enter your Message"),
});

export default validate;

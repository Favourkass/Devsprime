import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  video_urls: Yup.mixed().required("Please select course videos"),
});

export default validationSchema;

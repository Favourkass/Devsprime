import { Formik } from "formik";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Forms, Link } from "./styles";

import Button from "../../components/button";

import ErrorMsg from "./errorMessage";
import validate from "./validate";
import signup from "../../redux/actions/auth/signupInstructor.action";
import { toast, ToastContainer } from "react-toastify";
import SmallText from "./smallText";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";

import MyInput from "./input";

const FormDiv = ({ signup, signupData }) => {
  const getSignUpData = (signupData, loading) => {
      
    if (loading && signupData.message === "success") {
      toast.success("Sign up successful, Check your email to verify your account");
      return;
    } else if (loading && signupData.message === "failure") {
      const err = Object.values(signupData.errors)[0];
      toast.error(err[0]);
      return;
    } else {
      return null;
    }
  };
  let [loading, setLoading] = useState(false);
  let [btnLable, setBtnLabel] = useState("Become An Instructor")
  useEffect(() => {}, [signupData]);

  return (
    <div>
      <div className="cont">
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            mobile_number: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={async (values) => {
            setLoading(true);
            setBtnLabel("")
            await signup(values);
            setLoading(false);
            setBtnLabel("Become An Instructor")
          }}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <Forms onSubmit={handleSubmit}>
              <ToastContainer style={{ zIndex: "10" }} position="bottom-right" />
              <MyInput
                type="text"
                onChange={handleChange}
                name="fullname"
                placeholder="Full Name"
                value={values.fullname}
                onBlur={handleBlur}
              />
              <ErrorMsg>{errors.fullname}</ErrorMsg>
              <MyInput
                type="email"
                onChange={handleChange}
                name="email"
                placeholder="Email Address"
              />
              <ErrorMsg>{errors.email}</ErrorMsg>
              <MyInput
                type="text"
                onChange={handleChange}
                name="mobile_number"
                placeholder="Mobile Number"
              />
              <ErrorMsg>{errors.mobile_number}</ErrorMsg>
              <MyInput
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Password"
              />
              <ErrorMsg>{errors.password}</ErrorMsg>
              <SmallText center="flex-end">
                Already have an account? &nbsp; <Link href="/login">Login</Link>{" "}
              </SmallText>
              <Button type="submit" primary large width="100%">
                {" "}
                {btnLable}
                <ClipLoader loading={loading} size={20} />
              </Button>
            </Forms>
          )}
        </Formik>
      </div>
      {getSignUpData(signupData, loading)}
    </div>
  );
};

const mapStateToProps = (store) => ({
  signupData: store.signupInstructor,
});

export default connect(mapStateToProps, { signup })(FormDiv);

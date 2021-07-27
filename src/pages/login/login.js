import { Formik } from "formik";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";

import ImageDiv from "./imageDiv";
import LoginSchema from "./validation";
import Logo from "../../components/logo";
import Input from "../../components/Input";
import login from "../../redux/actions/auth/login.action";
import { fetchUser } from "../../redux/actions/userprofile.action";
import NavBar from "../../components/navbar/NavBarWraper";
import Footer from "../../components/Footer";
import {
  ErrorPosition,
  Button,
  SignUpStyle,
  TextField,
  LogoPosition,
  FormStyle,
  CompressInputField,
  PositionButton,
  LoginDiv,
} from "./style";



const initialValues = { email: "", password: "" };

const Login = ({ loginData, login, fetchUser, currentUser, history }) => {

  const isAuthenticated = (loginRes, isLogin, currentUser) => {
    if (isLogin && loginRes.message === "success") {
      success(history, currentUser);
    } else if (isLogin && loginRes.message === "failure") {
      const err = Object.values(loginRes.errors);
      toast.error(err[0]);
    } else {
      return null;
    }
  };

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {}, [loginData, currentUser]);

  return (
    <LoginDiv>
      <div className="nav-container">
        <NavBar />
      </div>
      <div className="container">
        <SignUpStyle>
          <FormStyle>
            <div className="form-wrapper">
              <LogoPosition>
                <Logo />
              </LogoPosition>

              <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={async (values) => {
                  setIsLogin(false);
                  await login(values);
                  const token = localStorage.getItem('token')
                  await fetchUser(token)
                  setIsLogin(true);
                }}
              >
                {({ values, errors, handleChange, handleSubmit, touched }) => (
                  <form onSubmit={handleSubmit} className="form">
                    <ToastContainer />
                    <TextField>Sign in to your account to continue</TextField>

                    <CompressInputField>
                      <Input
                        placeholder="email"
                        type={"email"}
                        name="email"
                        value={values.email}
                        id="email"
                        onChange={handleChange}
                        className="input"
                      />
                    </CompressInputField>

                    <ErrorPosition>
                      { touched.email && errors.email ?(errors.email):null }
                    </ErrorPosition>

                    <CompressInputField>
                      <Input
                        placeholder="password"
                        type={"password"}
                        name="password"
                        value={values.password}
                        id="password"
                        onChange={handleChange}
                        className="input"
                      />
                    </CompressInputField>
                    <ErrorPosition>
                      { touched.password && errors.password ?(errors.password):null }
                    </ErrorPosition>

                    <TextField className="flex-end">
                      Don't Have an Account? <Link to="/signup"> Sign Up</Link>
                    </TextField>

                    <PositionButton>
                      <Button type="submit" primary large>
                        {loginData.loading ? (
                          <ClipLoader loading={loginData.loading} />
                        ) : (
                          "Login"
                        )}
                      </Button>
                    </PositionButton>
                  </form>
                )}
              </Formik>
            </div>
            {isAuthenticated(loginData, isLogin, currentUser)}
          </FormStyle>
          <ImageDiv />
        </SignUpStyle>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </LoginDiv>
  );
};


const success = (history, currentUser) => {
  const {users: {data} } = currentUser
  if(data.is_learner) {
    toast.success("Login Successful");
    setInterval(function () {
      window.location="/dashboard";
    }, 2500);
    return;
  }else if(data.is_instructor) {
    toast.success("Login Successful");
    setInterval(function () {
      window.location="/dashboard/instructor"
      return;
    }, 2500)
  }else{
    return null;
  }
};

const mapStateToProps = (store) => ({
  loginData: store.login,
  currentUser: store.user,
});

export default connect(mapStateToProps, { login, fetchUser })(Login);

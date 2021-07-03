import React, { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { connect } from "react-redux";
import {
  getLearnerData,
  getCourseData,
  sendPaymentData,
} from "../../redux/actions/payment.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import {
  MainWrapper,
  BackBtn,
  MainBody,
  TitleHeader,
  PaymentOptionWrapper,
  PaymentOption,
  ActionBtn,
  ContinueBtn,
} from "./style";
import NavBar from "../navbar/NavBarWraper";
import Footer from "../Footer";


function PaymentComponets({
  getToken,
  getLearnerData,
  learner_email,
  courseData,
  getCourseData,
  sendPaymentData,
  course_id,
  payment_data,
}) {
  const [select, setSelect] = useState("paystack");
  const [amount, setAmount] = useState(0);
  const [learnerEmail, setLearnerEmail] = useState("");
  const [clipLoaderstat, setclipLoaderstat] = useState(true);

  // handles switches on radio button
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
    console.log(value);
  };
  // paystack configurations
  const config = {
    reference: new Date().getTime(),
    email: learnerEmail,
    amount: amount * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_TEST_KEY,
  };
  // after a successful payment is made
  const onSuccess = (reference) => {
    const paymentData = {
      course_id: course_id,
      paystack_id: JSON.stringify(reference),
    };

    //send data to backend
    sendPaymentData(paymentData, getToken);
    toast.success(`payment successful`);
    document.getElementById("title-header").innerHTML = `
        <span style="color:green">Congratulations!</span>
        `;
    document.getElementById(
      "payment-section"
    ).innerHTML = `You have successfully purchased the course: <b>${courseData.title} </b> <br/>
            Your reference code is <b>${reference.reference}</b>`;
    document.getElementById("actionBtn").style.display = "none";
    document.getElementById("continueBtn").style.display = "";
  };

  const onClosePaymentModal = () => {
    toast.error(`Payment Failed`);
    const paymentData = {
      course_id: course_id,
      paystack_id: "declined",
    };
    sendPaymentData(paymentData, getToken);
    document.getElementById("title-header").innerHTML = `
        <span style="color:red">Payment Failed please try again</span>
        `;
    setInterval(() => {
      document.getElementById("title-header").innerHTML =
        "Select Your Preferred Payment Method";
    }, 5000);
  };
  // initiate payment
  const initializePayment = usePaystackPayment(config);
  const makePayment = () => {
    if (select === "paystack" && amount > 0 && learnerEmail !== "") {
      initializePayment(onSuccess, onClosePaymentModal);
    } else {
      toast.warning(`${select}, payment method is currently not available`);
    }
  };
  // After payment Action
  const continueShopping = () => {
    window.location = "/courses";
  };

  // fire function over actions on page
  useEffect(() => {
    if (Object.keys(courseData).length > 0 && learner_email !== "") {
      setAmount(parseInt(courseData.price));
      setLearnerEmail(learner_email);
      setclipLoaderstat(false);
    } else {
      getCourseData({ course_id: course_id });
      getLearnerData(getToken);
    }
  }, [
    getToken,
    courseData,
    learner_email,
    course_id,
    getCourseData,
    getLearnerData,
    learnerEmail,
    payment_data,
  ]);
  return (
    <MainWrapper>
        <NavBar/>
      <div className="container cart-cont">
        <ToastContainer />
        <BackBtn
          url={"/cart"}
          src={
            "https://res.cloudinary.com/devsprime/image/upload/v1624911697/Icons%20and%20Logo/Arrow_ns4wl2.png"
          }
          text={"Cart"}
        />

        <MainBody>
          <TitleHeader id="title-header">
            Select Your Preferred Payment Method &ensp;
            <ClipLoader color={"#FF8A00 "} loading={clipLoaderstat} size={30} />
          </TitleHeader>

          <PaymentOptionWrapper id="payment-section">
            <PaymentOption
              onChangeHandler={handleSelectChange}
              value={"paystack"}
              select={select}
              label={"Pay with Paystack"}
              logo={
                "https://res.cloudinary.com/devsprime/image/upload/v1624911697/Icons%20and%20Logo/Icon_yutlhw.png"
              }
            />
            <PaymentOption
              onChangeHandler={handleSelectChange}
              value={"Flutterwave"}
              select={select}
              label={"Pay with "}
              logo={
                "https://res.cloudinary.com/devsprime/image/upload/c_scale,w_120/v1625307884/Icons%20and%20Logo/Flutterwave_z81hfs.png"
              }
            />
          </PaymentOptionWrapper>

          <ActionBtn onClickHandler={makePayment} label={"Next"} />

          <ContinueBtn
            onClickHandler={continueShopping}
            label={"Continue shopping"}
          />
        </MainBody>
      </div>
      <Footer/>
    </MainWrapper>
  );
}
const mapStateToProps = (store) => ({
  courseData: store.paymentReducer.courseData,
  learner_email: store.paymentReducer.learner_email,
  payment_data: store.paymentReducer.payment_data,
  getToken: store.login.token,
});

export default connect(mapStateToProps, {
  getLearnerData,
  getCourseData,
  sendPaymentData,
})(PaymentComponets);

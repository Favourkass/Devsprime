import React, { useState } from "react";
import { HeroWrapper, ButtonWrapper, Text } from "./style";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/actions/cart.action";
import Modal from "react-modal";
import ModalCard from "../../modalCard";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    borderRadius: ".7rem",
  },
};

const CourseOverviewHero = ({
  token,
  course_id,
  title,
  addToCart,
  cart,
  hasAccess,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [failureModalIsOpen, setFailureModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const openSuccessModal = () => {
    setSuccessModalIsOpen(true);
  }

  const closeSuccessModal = () => {
    setSuccessModalIsOpen(false);
  }

  const handleGoToCart = () => (window.location = "/cart");
  const handleGoToCourse = () => (window.location = "/courses");

  const payload = { token: token, courseId: course_id };

  const openFailureModal = () => {
    setFailureModalIsOpen(true);
  }
  
  const closeFailureModal = () => {
    setFailureModalIsOpen(false);
  }

  const handleAddToCart = async () => {
    setIsLoading(true);
    if (!payload.token) {
      toast.warning("Please login");
      setTimeout(() => {
        window.location = "/login";
      }, 1500)
      return;
    }

    let AlreadyExist = cart.cart.some( course => course.course_id === payload.courseId )

    if(AlreadyExist){
      setIsLoading(false)
      setTimeout(()=>{
        closeModal()
        openFailureModal()
        return;
      }, 2000)
    } else{
      await addToCart(payload)
      if (cart.error) {
        setIsLoading(false)
        return;
      }else{
        setTimeout(() => {
            closeModal()
            openSuccessModal()
            return;
        }, 2000);
      }
      return;
    }
  }

  return (
    <HeroWrapper>
      <ToastContainer/>
      <Text>
        You can either enroll for this course to gain access and also to the
        materials been attached to it online only or you can add to cart for
        checkout to view online
      </Text>
      {!hasAccess ? (
        <ButtonWrapper>
          <button className="add-cart-btn" onClick={openModal}>
            Add To Cart
          </button>
        </ButtonWrapper>
      ) : null}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalCard
          title="Add To Cart"
          contentBody={`Add ${title} to your Cart`}
          leftButton={"Save"}
          rightButton={"Cancel"}
          loading={isLoading}
          handleClose={closeModal}
          handleRightButton={closeModal}
          handleLeftButton={handleAddToCart}
        />
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={successModalIsOpen}
        onRequestClose={closeSuccessModal}
        style={customStyles}
      >
        <ModalCard
          title="Success"
          contentBody={`Your item has been successfully added to Cart `}
          background={"#4A7A4A"}
          leftButton={"checkout Cart"}
          rightButton={"Go To Course"}
          handleClose={closeSuccessModal}
          handleRightButton={handleGoToCourse}
          handleLeftButton={handleGoToCart}
        />
      </Modal>

{/* Failure Modal */}
      <Modal
        isOpen={failureModalIsOpen}
        onRequestClose={closeFailureModal}
        style={customStyles}
      >
        <ModalCard 
          title='Error'
          contentBody={`Can't Add Course: You've already added this course `}
          background={'#FF0F0F'}
          leftButton={'checkout Cart'}
          rightButton={'Go To Course'}
          handleClose={closeFailureModal}
          handleRightButton={handleGoToCourse}
          handleLeftButton={handleGoToCart}
        />
      </Modal>

    </HeroWrapper>
  );
};

const mapStateToProps = (store) => ({
  cart: store.cart,
});

export default connect(mapStateToProps, { addToCart })(CourseOverviewHero);

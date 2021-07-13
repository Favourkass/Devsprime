import React, { useState } from "react";
import { HeroWrapper, ButtonWrapper, Text } from "./style";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/actions/cart.action";
import Modal from 'react-modal';
import ModalCard from "../../modalCard";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    borderRadius: '.7rem',

  },
};

const CourseOverviewHero = ({ token, course_id, title, addToCart, cart }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openSuccessModal() {
    setSuccessModalIsOpen(true);
  }
  
  function closeSuccessModal() {
    setSuccessModalIsOpen(false);
  }

  const handleGoToCart = () => (
    window.location = '/cart'
  )
  const handleGoToCourse = () => (
    window.location = '/courses'

  )

  const payload = {token: token, courseId: course_id}
  const handleAddToCart = async () => {
    setIsLoading(true)
    if (!payload.token){
      window.location = '/login'
      return;
    }
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

  return (
    <HeroWrapper>
      <Text >
        You can either enroll for this course to gain access and also to the
        materials been attached to it online only or you can add to cart for
        checkout to view online
      </Text>
      <ButtonWrapper>
        <button className='add-cart-btn' onClick={openModal}>
            Add To Cart
        </button>
      </ButtonWrapper>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalCard 
          title='Add To Cart'
          contentBody={`Add ${title} to your Cart`}
          leftButton={'Save'}
          rightButton={'Cancel'}
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
          title='Success'
          contentBody={`Your item has been successfully added to Cart `}
          background={'#4A7A4A'}
          leftButton={'checkout Cart'}
          rightButton={'Go To Course'}
          handleClose={closeSuccessModal}
          handleRightButton={handleGoToCourse}
          handleLeftButton={handleGoToCart}
        />
      </Modal>

    </HeroWrapper>
  );
};

const mapStateToProps = (store) => ({
  cart: store.cart
})

export default connect(mapStateToProps, {addToCart})(CourseOverviewHero);

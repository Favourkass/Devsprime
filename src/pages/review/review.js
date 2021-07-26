import Cart from "../../components/cart";
import React, { useEffect } from "react";
import NavBar from "../../components/navbar/NavBarWraper";
import Footer from "../../components/Footer";
import {
  EntireWrapper,
  TitleParagraph,
  BackToCart,
  // TitlePicture,
  TitleDiv,
} from "./style";
import { getCardByCourseId } from "../../redux/actions/orderReview.action";
import { connect } from "react-redux";
import moment from "moment";

function ReviewOrder({ getCardByCourseId, cartById, match }) {
  console.log(cartById, match.params.cartId, cartById.cartData.instructor_name);
  const cartId = match.params.cartId;
  const token = localStorage.getItem("token");
  useEffect(
    () => getCardByCourseId(token, cartId),
    [getCardByCourseId, cartId, token]
  );

  return (
    <div>
      <NavBar />
      <div className="container">
        <a href="/cart">
          <BackToCart src="https://res.cloudinary.com/devsprime/image/upload/v1625432126/Icons%20and%20Logo/Back_to_Cart_zxh9nr.png" />
        </a>
        <EntireWrapper>
          <TitleDiv>
            <TitleParagraph> Your Product Details</TitleParagraph>
            {/* <TitlePicture src="https://res.cloudinary.com/devsprime/image/upload/v1625432818/Icons%20and%20Logo/Progress_sgliml.png" /> */}
          </TitleDiv>
          <Cart
            image={cartById.cartData.cover_img}
            title={cartById.cartData.title}
            instructor={cartById.cartData.instructor_name}
            date={moment(cartById.cartData.created_at).format("DD MMM, YYYY")}
            price={cartById.cartData.price}
            cartById={cartById.cartData}
            type={cartById.cartData.course_type}
            cartId={cartById.cartData.course_id}
            total={cartById.cartData.price}
          />
        </EntireWrapper>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (store) => ({
  cartById: store.getCartById,
  // token: store.login.token
});

export default connect(mapStateToProps, { getCardByCourseId })(ReviewOrder);

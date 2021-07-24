import React from "react";
import NavBar from "../../components/navbar/NavBarWraper/index";
import CartCard from "../../components/CartCard/index";
import Footer from "../../components/Footer";
import Header from "./Header";
import PriceTable from "../../components/CartCard/PriceTable";
import { getCartList, removeCart } from "../../redux/actions/cart.action";
import { useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubHeader } from "../../components/typography";

const Cart = ({ getCartList, cartItems, removeCart }) => {
  const payload = localStorage.getItem("token");

  const handleDelete = (payload, id) => {
      removeCart(payload, id);
      toast.warn("Cart Item Removed");
      getCartList(payload);
  };
  useEffect(() => getCartList(payload), [getCartList, payload]);

  return (
    <>
      <NavBar />
      <Header />
      <ToastContainer />
      {cartItems && cartItems.cart && cartItems.cart.length > 0 ? (
        cartItems.cart.map((item, i) => {
          return (
            <CartCard
              key={i}
              title={item.title}
              description={item.description}
              cover_img={item.cover_img}
              instructor_name={item.instructor_name}
              price={item.price}
              created_at={moment(item.created_at).format("DD MM, YYYY")}
              course_type={item.course_type}
              cartId={item.id}
              onDelete={handleDelete}
            />
          );
        })
      ) : (
        <div style={{ margin: "auto", textAlign: "center" }}>
          <SubHeader size={25}>Your Cart is Empty</SubHeader>
        </div>
      )}

      <PriceTable white />
      <Footer />
    </>
  );
};
const mapStateToProps = (store) => ({
  cartItems: store.cart,
});

export default connect(mapStateToProps, { getCartList, removeCart })(Cart);

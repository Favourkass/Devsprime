import NavBar from "../../../components/navbar/NavBarWraper";
import DashBoardNav from "../../../components/DashboardNav";
import { PageWrapper } from "./style.js";
import { ParagraphWrapper, Wrapper } from "../myCourses/style";
import { Header } from "../../../components/typography";
import { black } from "../../../components/colour/colour";
import Footer from "../../../components/Footer";
import { useState, useEffect } from "react";
import Button from "../../../components/button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrderDetail } from "../../../redux/actions/orderDashboard.action";
import Orders from "./order";

const OrderTypeData = ["All Orders ", "Successful Orders", "Canceled Orders"];

const OrderTypeList = ({ handleOnClick }) => {
  return OrderTypeData.map((orderType, index) => (
    <ParagraphWrapper key={index}>
      <Header size={15} color={black}>
        <div
          onClick={handleOnClick}
          key={index}
          data-value={orderType}
          className="course-type"
        >
          {orderType}
        </div>
      </Header>
    </ParagraphWrapper>
  ));
};

const DashboardOrder = ({ order_detail, fetchOrderDetail }) => {
  const [orderStatus, setOrderStatus] = useState(false);

  useEffect(() => {
    fetchOrderDetail();
  }, [fetchOrderDetail]);

  const handleOnClick = (e) => {
    if (e.target.getAttribute("data-value") === "All Orders ") {
      setOrderStatus(false);
    } else if (e.target.getAttribute("data-value") === "Successful Orders") {
      setOrderStatus("successful".toLowerCase());
    } else if (e.target.getAttribute("data-value") === "Canceled Orders") {
      setOrderStatus("unsuccessful".toLowerCase());
    }
  };

  return (
    <>
      <NavBar />

      <div className=" container">
        <PageWrapper className="container">
          <div className="menu-container">
            <div className="header-cont d-flex d-flex-center">
              <Header size={20} color={black}>
                My Orders
              </Header>
            </div>
            <div className="course-type-cont">
              <OrderTypeList handleOnClick={handleOnClick} />
            </div>
          </div>

          <DashBoardNav
            details="Order Detail"
            category="Category"
            status="Status"
            instructor="Instructor"
            date="Date"
          />

          <Orders orderStatus={orderStatus} />
          <Wrapper>
            <div className="button">
              <Link to="/courses">
                <Button className="discover-btn" primary small>
                  View more
                </Button>
              </Link>
            </div>
          </Wrapper>
        </PageWrapper>
      </div>

      <Footer />
    </>
  );
};

const mapStateToProps = (store) => ({
  order_detail: store.order_detail.orders,
});

export default connect(mapStateToProps, { fetchOrderDetail })(DashboardOrder);

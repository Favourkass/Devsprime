import { useEffect, useState } from "react";
import { Header } from "../../../components/typography";
import { connect } from "react-redux";
import DashBoardDetail from "../../../components/DashboardDetail";

import moment from "moment";

const Orders = ({ order_detail, type, orderStatus }) => {
  const [orderType, setOrderType] = useState(type);

  useEffect(() => {
    setOrderType(orderStatus);
  }, [order_detail, type, orderStatus]);

  return (
    <div>
      {order_detail && order_detail.courses && order_detail.courses.length > 0 ? (
        order_detail.courses.map((order, index) => {
          if (orderType && order.status.toLowerCase() === orderType) {
            return (
              <DashBoardDetail
                key={index}
                image={order.cover_img}
                detail={order.title}
                category={order.category}
                status={order.status}
                instructor={order.instructor}
                date={moment(order.created_at).format("DD/MM/YYYY")}
              />
            );
          } else if (!orderType) {
            return (
              <DashBoardDetail
                key={index}
                image={order.cover_img}
                detail={order.title}
                category={order.category}
                status={order.status}
                instructor={order.instructor}
                date={moment(order.created_at).format("DD/MM/YYYY")}
              />
            );
          }
          return "";
        })
      ) : (
        <div style={{textAlign: 'center', margin: '4rem 0'}}>
        <Header size={24}>Ooops... Your order is empty</Header>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (store) => ({
  order_detail: store.order_detail.orders,
});

export default connect(mapStateToProps, null)(Orders);

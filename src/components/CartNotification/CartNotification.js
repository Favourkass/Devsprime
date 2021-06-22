import cart from "./cart.png";
import {MainContainer, BadgeContainer, Notification,Cart } from "./CartNofification.styles"

function CartNotification(props) {
  return (
    <MainContainer data-testid="button">
      <Cart WIDTH="" src={cart} alt="cart"/>
      <BadgeContainer backgroundColor="linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%)">
        <Notification>{props.number}</Notification>
      </BadgeContainer>
    </MainContainer>
  );
}

export default CartNotification;

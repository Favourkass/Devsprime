import {MainContainer, BadgeContainer, Notification,Cart } from "./CartNofification.styles"

function CartNotification(props) {
  return (
    <MainContainer data-testid="button">
      <Cart WIDTH="100px" src="https://res.cloudinary.com/devsprime/image/upload/v1624373777/Icons%20and%20Logo/cart_naqql0.png" alt="cart"/>
      <BadgeContainer backgroundColor="linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%)">
        <Notification>{props.number}</Notification>
      </BadgeContainer>
    </MainContainer>
  );
}
export default CartNotification;

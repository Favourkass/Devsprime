import {MainContainer, BadgeContainer, Notification, NumContainer,Cart } from "./CartNofification.styles"

function CartNotification(props) {
  return (
    <MainContainer data-testid="button">
      <Cart WIDTH="33px" src="https://res.cloudinary.com/devsprime/image/upload/v1624531959/Icons%20and%20Logo/caart_nv5iox.svg" alt="cart"/>
      <BadgeContainer WIDTH="25px" HEIGHT="25px" backgroundColor="linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%)">
        <NumContainer>
          <Notification>{props.number}</Notification>
        </NumContainer>
      </BadgeContainer>
    </MainContainer>
  );
}

export default CartNotification;

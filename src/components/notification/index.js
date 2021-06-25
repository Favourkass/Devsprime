import React from 'react'
import NotificationsDesign from "./style";



function Notification(props) {

  return (
    <NotificationsDesign>
      <div className="container">
        <div className="notification">
          <div className="notif"> <span className="no">{props.number}</span> </div>
          <img src="https://res.cloudinary.com/devsprime/image/upload/v1624366492/Icons%20and%20Logo/bell_xinvrt.png" alt="Notification" className="img" />
        </div>
      </div>
    </NotificationsDesign>

  );
}

export default Notification;

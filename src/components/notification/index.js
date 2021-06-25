import React from 'react'
import NotificationsDesign from "./style";
import messages from "./messageDemo"


function Notification() {
    var countNotif = messages.length
    
    return (
        
      <NotificationsDesign>
        <div className="container">
                <div className="notification">
                    <div className="notif"> <span className="no">{countNotif}</span> </div>
                    <img src = "https://res.cloudinary.com/devsprime/image/upload/v1624366454/logo%20picture/logo_lfhrmz.png" alt = "Notification" className="img"/>
                </div>
        </div>
        </NotificationsDesign>
      
    );
  }
  
  export default Notification;
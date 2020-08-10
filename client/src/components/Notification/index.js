import React, {useContext, useRef, useState, useEffect} from "react";
import "./style.css";
import { useNotifications } from "../../NotificationContext";


const Notification = () => {
  const [closed, setClosed] = useState(false);
  const {message, setMessage} = useNotifications();

  const closeNotification = () => {    
    setClosed(true);
    setMessage("");
  }


  // when message is changed show
  useEffect(() => {
    if (message) {
      setClosed(false);
    }
  }, [message])
  
  
  return (
    <div className={message && !closed ? "notification enter" : "notification exit"}>
      <div className="message">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
        <p>{message}</p>
      </div>
      
      
      {/* close icon */}
      <svg width="1em" className="close-notification" onClick={closeNotification} height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
      </svg>
    </div>
  );
}
 
export default Notification;
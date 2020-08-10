import React, {createContext, useContext, useState} from "react";

const NotificationContext = createContext();


// USAGE: message="" when no message and when there is a message:
// When there is a message: {type: "success" || "danger" || "warning", message: "message goes here"}

// provider componenet wrapper
export const NotificationProvider = ({children}) => {
  const [message, setMessage] = useState({type: "success", message: ""});

  return (
    <NotificationContext.Provider value={{message, setMessage}}>
      {children}
    </NotificationContext.Provider>
  )
}


export const useNotifications = () => {
  const context = useContext(NotificationContext);

  if (context === undefined) {
    throw new Error("useNotification must be used within NotificationProvider")
  }

  return context; // will return {message, setMessage}
}

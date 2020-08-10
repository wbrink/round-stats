import React, {createContext, useContext, useState} from "react";

const NotificationContext = createContext();


// provider componenet wrapper
export const NotificationProvider = ({children}) => {
  const [message, setMessage] = useState("");

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

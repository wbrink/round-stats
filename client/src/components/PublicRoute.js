import React from "react";
import {Route, Redirect} from "react-router-dom";
import useAuthenticated from "../utils/useAuthenticated";




// restricted true would mean that the user is signed in and shouldn't be able to visit the login and registration page since they are logged in
function PublicRoute({component: Component, restricted, ...rest}) {
  const [loggedIn, setLoggedIn] = useAuthenticated();

  return (
    <div>
      {/* if fetch call has not loaded then leave blank screen */}
      {loggedIn == null && ("empty")}
      {loggedIn && restricted && <Redirect to="/dashboard" />}
      {loggedIn == false && <Route {...rest} component={Component} /> }
    </div>
  )
} 


export default PublicRoute;
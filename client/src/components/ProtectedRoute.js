import React, {useEffect, useState} from "react";
import {Redirect, Route} from "react-router-dom";
import useAuthenticated from "../utils/useAuthenticated";

function ProtectedRoute({ component: Component, ...rest}) {
  const [loggedIn, setLoggedIn] = useAuthenticated();

  return (
    <div>
      {/* if fetch call has not loaded then leave blank screen */}
      {loggedIn == null && ("") }
      {loggedIn !== null && <Route {...rest} render={(props) => loggedIn ? <Component {...props} /> : <Redirect to={{pathname: "/login", state: {from: props.location}}} /> } /> }
    </div>
  )
}

 


export default ProtectedRoute;
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import LoginContext from "./LoginContext";
import {NotificationProvider} from "./NotificationContext";
import AddCourse from "./Pages/AddCourse/AddCourse";
import Notification from "./components/Notification";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);

  return (
    <div>

      <NotificationProvider>
        <Notification />
      
        
      
        <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
          <Router>
            <div style={{width: "100%", height: "100%"}}>
              {/* navbar */}
              <Nav />
        
              <Switch>
                {/* home */}
                {/* <Route exact path="/" component={Home}/> */}

                <PublicRoute exact path="/" component={Home} restricted={false}/>

                <PublicRoute exact path="/login" component={Login} restricted={true}/>
                <PublicRoute exact path="/register" component={Register} restricted={true}/>

                <PrivateRoute exact path="/add-course" component={AddCourse} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>

            </div>
          </Router>
        </LoginContext.Provider>
      </NotificationProvider>
    </div>
  );
}

export default App;

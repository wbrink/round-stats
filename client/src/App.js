import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

          </ul>
        </nav>
  
        <Switch>
          {/* home */}
          <Route exact path="/">
            <h1>Hello Main</h1>
          </Route>

          <PublicRoute exact path="/login" component={Login}  restricted={true}/>
          <PublicRoute exact path="/register" component={Register}  restricted={true}/>

          

          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;

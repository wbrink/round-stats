import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

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
              <Link to="/dashboard">Dashboard</Link>
            </li>

          </ul>
        </nav>
  
        <Switch>
          {/* home */}
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/login" component={Login} />

          {/* protected Route */}
          {/* <PrivateRoute exact path="/protected" component={Protected} /> */}

          <PrivateRoute exact path="/protected" component={Protected} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;

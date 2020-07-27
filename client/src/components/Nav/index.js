import React, {useContext} from "react";
import {Link} from "react-router-dom";
import "./style.css";
import LoginContext from "../../LoginContext";


// will use context if logged in or not then nav will change
function Nav() {
  const {loggedIn, setLoggedIn} = useContext(LoginContext);

  const logout = () => {
    fetch("/api/logout")
      .then(res => res.json())
      .then(data => {
        if (data) {
          console.log('successfully logged out');
          setLoggedIn(false);
        }
      })
      .catch(error => {
        console.error(error);
      })
  }

  // if logged in return all the routes (otherwise return login signup and home)
  if (loggedIn) {
    return (
      <header>
        <nav>
          <div>Golf Stats</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">Post</Link></li>
            <li><Link to="/stats">Stats</Link></li>
            <li><Link to="/add-course">Add Course</Link></li>
            <li onClick={logout}><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </header>
    )
  } else {
    return (
      <header>
        <nav>
          <div>Golf Stats</div>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
    )
  }


  
}

export default Nav;
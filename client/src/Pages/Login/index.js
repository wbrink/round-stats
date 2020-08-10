import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import "./style.css";
import { useNotifications } from "../../NotificationContext";



function Login() {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // state from useNotifications
  const {message, setMessage} = useNotifications();

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: username, password: password})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if (data.msg === "login successful") {
        history.push("/dashboard");
        setMessage({type: "success", message: "Login Succesful"});
      }
    })
    .catch(error => {
      console.log(error);
    })

  }

  return (
    <div className="login-container">
      <h2 className="form-header">Login</h2>
      <form id="login" action="" onSubmit={(e) => handleSubmit(e)}>
        {/* username */}
        <div className="form-group">
          <label htmlFor="user" style={{marginBottom: "15px"}}>Username</label>
          <input type="text" id="user" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
        </div>
        
        {/* password */}
        <div className="form-group">
          <label htmlFor="password" style={{marginBottom: "15px"}}>Password</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>


        <input id="submit" type="submit" value="Login"/>
        
      </form>

    </div>
  )
}

export default Login;
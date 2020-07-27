import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import "./style.css"

function Register() {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordFeedback, setPasswordFeedback] = useState("");
  const [confirmPasswordFeedback, setConfirmPasswordFeedback] = useState("");
  const [usernameFeedback, setUsernameFeedback] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    // resets all the feedback states
    reset();

    e.preventDefault();

    // if not all fields are filled out
    if (!username || !password || !confirmPassword) {
      setFeedback("Please Fill Out All Fields");
      return;
    }

    // password and confirm must match
    if (confirmPassword !== password) {
      setConfirmPasswordFeedback("Passwords Must Match")
      return;
    }

    // check password length
    if (password.length < 6 ) {
      setPasswordFeedback("Password must be 6 or more characters");
      return;
    }

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username: username, password: password})
    })
      .then(res => res.json()) 
      .then(data => {
        if (data.error == "username already exists") {
          setUsernameFeedback("Username Already Exists");
        } else if (data.msg == "login successful") {
          // redirect to the dashboard
          history.push("/dashboard")
        }
      })
  }


  // function that resets all the feedback
  const reset = () => {
    setConfirmPasswordFeedback("");
    setPasswordFeedback("");
    setUsernameFeedback("");
    setFeedback("");
  }

  return (
    <div className="register-container">
      <h2 className="form-header">Sign Up</h2>
      <form id="login" action="" onSubmit={(e) => handleSubmit(e)}>
        {/* username */}
        <div className="form-group">
          <label htmlFor="user" style={{marginBottom: "15px"}}>Username <span style={{color: "red", fontSize: "12px"}}>{usernameFeedback}</span></label>
          <input type="text" id="user" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
        </div>
        
        {/* password */}
        <div className="form-group">
          <label htmlFor="password" style={{marginBottom: "15px"}}>Password <span style={{color: "red", fontSize: "12px"}}>{passwordFeedback}</span></label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password" style={{marginBottom: "15px"}}>Confirm Password <span style={{color: "red", fontSize: "12px"}}>{confirmPasswordFeedback}</span></label>
          <input type="password" id="confirm-password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
        </div>

        <span style={{color: "red", fontSize: "12px"}}>{feedback}</span>
        <input id="submit" type="submit" value="Sign Up"/>
        
      </form>

    </div>
  )
}


export default Register;
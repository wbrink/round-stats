import React, { useState } from "react";
import "./style.css"

function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="register-container">
      <h2 className="form-header">Sign Up</h2>
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

        <div className="form-group">
          <label htmlFor="confirm-password" style={{marginBottom: "15px"}}>Confirm Password</label>
          <input type="password" id="confirm-password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>


        <input id="submit" type="submit" value="Sign Up"/>
        
      </form>

    </div>
  )
}


export default Register;
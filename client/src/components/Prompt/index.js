import React, { useState, useEffect } from 'react';
import "./style.css";

// component requires message, confirm callback and deny callback in the props
const Prompt = (props) => {
  
  return ( 
    <div className="prompt-container" >
      <div className="prompt">
        <p className="prompt-message">{props.message}</p>
        <div className="prompt-buttons">
          <button onClick={props.confirm}>Yes</button>
          <button onClick={props.deny}>No</button>
        </div>
      </div>
    </div>
  );
}
 
export default Prompt;
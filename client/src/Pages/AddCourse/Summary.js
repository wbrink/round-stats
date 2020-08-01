import React, { useState, useEffect } from 'react';
import Prompt from "../../components/Prompt/index";


const Summary = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  // Course Data
  const {country, state, name, length, par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11, par12, par13, par14, par15, par16, par17, par18} = props.state;
  const courseInfo = {country, state, name, length, par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11, par12, par13, par14, par15, par16, par17, par18};

  // used for <Prompt /> confirmation
  const confirmPrompt = async () => {
    setShowPopup(false);
    // make api call to overwrite the course

    try {
      let res = await fetch("/api/overwrite-course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(courseInfo)
      })
    } catch (error) {
      console.log(error);
    }

  }

  // used for <Prompt /> deny
  const denyPrompt = () => {
    setShowPopup(false);
  }
  

  
  
  const submitCourse = async () => {
    // add course
    try {
      let res = await fetch("/api/add-course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(courseInfo)
      });
  
      let data = await res.json(); 
      if (data == "course already exists") {
        // show popup that says do you want to overwrite the course (stats from the past will not be affected by new change)
        setShowPopup(true);
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <div className="course-summary">
      <h3>Course: {name}</h3> <span>Country, State: {country},{state}</span>
      <p>Length: {length}</p>
      <p>1: {par1}</p>
      <p>2: {par2}</p>
      <p>3: {par3}</p>
      <p>4: {par4}</p>
      <p>5: {par5}</p>
      <p>6: {par6}</p>
      <p>7: {par7}</p>
      <p>8: {par8}</p>
      <p>9: {par9}</p>
      {props.state.length == "18" && <p>10: {par10}</p> }
      {props.state.length == "18" && <p>11: {par11}</p> }
      {props.state.length == "18" && <p>12: {par12}</p> }
      {props.state.length == "18" && <p>13: {par13}</p> }
      {props.state.length == "18" && <p>14: {par14}</p> }
      {props.state.length == "18" && <p>15: {par15}</p> }
      {props.state.length == "18" && <p>16: {par16}</p> }
      {props.state.length == "18" && <p>17: {par17}</p> }
      {props.state.length == "18" && <p>18: {par18}</p> }

      <button onClick={props.prevStep}>Previous</button>
      <input type="submit" value="Add Course" onClick={submitCourse}/>

      {showPopup && <Prompt message="Course Already Exists. Overwrite Course?" confirm={confirmPrompt} deny={denyPrompt}/>}
    </div>
  );
}
 
export default Summary;
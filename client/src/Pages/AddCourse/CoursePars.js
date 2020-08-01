import React, {useState} from "react";

function CoursePars(props) {
  const [frontBack, setFrontBack] = useState("front");
  const [feedback, setFeedback] = useState("");

  const handleClick = (side) => {
    setFrontBack(side);
  }

  // validate all the par inputs and make sure that all are filled out
  const validateInput = () => {
    if (props.state.length == "18") {
      if (
        props.state.par1 > 0
        && props.state.par2 > 0
        && props.state.par3 > 0
        && props.state.par4 > 0
        && props.state.par5 > 0
        && props.state.par6 > 0
        && props.state.par7 > 0
        && props.state.par8 > 0
        && props.state.par9 > 0
        && props.state.par10 > 0
        && props.state.par11 > 0
        && props.state.par12 > 0
        && props.state.par13 > 0
        && props.state.par14 > 0
        && props.state.par15 > 0
        && props.state.par16 > 0
        && props.state.par17 > 0
        && props.state.par18 > 0
      ) {
        console.log("proceed to next step")
        props.nextStep();
      } else {
        console.log("proceed to feedback")
        setFeedback("Please Fill Out All Fields");
      }
    } else {
      if (
        props.state.par1 > 0
        && props.state.par2 > 0
        && props.state.par3 > 0
        && props.state.par4 > 0
        && props.state.par5 > 0
        && props.state.par6 > 0
        && props.state.par7 > 0
        && props.state.par8 > 0
        && props.state.par9 > 0
        ) {
          props.nextStep();
        } else {
          setFeedback("Please Fill Out All Fields");
        }
    }
    
  }

  // if front nine is checked
  if (frontBack == "front") {
    return (
      <div>
        <h2 className="form-title">Enter Pars</h2>
        <div>{feedback}</div>
        {
          props.state.length == "18" ? 
          <div style={{margin: "auto"}}>
            <button onClick={e => handleClick("front")}>Front</button>
            <button onClick={e => handleClick("back")}>Back</button>
          </div>
          : ""
        }
        
        
        <div className="form-group-inline"> 
          <label htmlFor="hole1">1</label>
          <input type="number" name="par1" id="hole1" value={props.state.par1} onChange={(e) => props.handleChange("par1")(e)}/>
        </div>
        
        <div className="form-group-inline">
          <label htmlFor="hole2">2</label>
          <input type="number" name="par2" id="hole2" value={props.state.par2} onChange={(e) => props.handleChange("par2")(e)}/>
        </div>
        
        <div className="form-group-inline">
          <label htmlFor="hole3">3</label>
          <input type="number" name="par3" id="hole3" value={props.state.par3} onChange={(e) => props.handleChange("par3")(e)}/>
        </div>
        
        <div className="form-group-inline">
          <label htmlFor="hole4">4</label>
          <input type="number" name="par4" id="hole4" value={props.state.par4} onChange={(e) => props.handleChange("par4")(e)}/>
        </div>
        
        <div className="form-group-inline">
          <label htmlFor="hole5">5</label>
          <input type="number" name="par5" id="hole5" value={props.state.par5} onChange={(e) => props.handleChange("par5")(e)}/>
        </div>
        
        <div className="form-group-inline">
          <label htmlFor="hole6">6</label>
          <input type="number" name="par6" id="hole6" value={props.state.par6} onChange={(e) => props.handleChange("par6")(e)}/>
        </div>
       
        <div className="form-group-inline">
          <label htmlFor="hole7">7</label>
          <input type="number" name="par7" id="hole7" value={props.state.par7} onChange={(e) => props.handleChange("par7")(e)}/>
        </div>
        
        <div className="form-group-inline">
          <label htmlFor="hole8">8</label>
          <input type="number" name="par8" id="hole8" value={props.state.par8} onChange={(e) => props.handleChange("par8")(e)}/>
        </div>
        
        <div className="form-group-inline">
          <label htmlFor="hole9">9</label>
          <input type="number" name="par9" id="hole9" value={props.state.par9} onChange={(e) => props.handleChange("par9")(e)}/>
        </div>

        <div>Par: {parseInt(props.state.par1) + parseInt(props.state.par2) + parseInt(props.state.par3) + parseInt(props.state.par4) + parseInt(props.state.par5) + parseInt(props.state.par6) + parseInt(props.state.par7) + parseInt(props.state.par8) + parseInt(props.state.par9)}</div>
        
        <button id="submit" onClick={props.prevStep}>Prev</button>
        <button id="submit" onClick={validateInput}>Next</button>
      </div>  

      
    )
  }


  // if front nine is checked
  if (frontBack == "back") {
    return (
      <div>
        <h2>Enter Pars</h2>
        {feedback}
        <button onClick={e => handleClick("front")}>Front</button>
        <button onClick={e => handleClick("back")}>Back</button>
        
        <div> 
          <label htmlFor="hole10">10</label>
          <input type="number" name="par10" id="hole10" value={props.state.par10} onChange={(e) => props.handleChange("par10")(e)}/>
        </div>
        
        <div>
          <label htmlFor="hole11">11</label>
          <input type="number" name="par11" id="hole11" value={props.state.par11} onChange={(e) => props.handleChange("par11")(e)}/>
        </div>
        
        <div>
          <label htmlFor="hole12">12</label>
          <input type="number" name="par12" id="hole12" value={props.state.par12} onChange={(e) => props.handleChange("par12")(e)}/>
        </div>
        
        <div>
          <label htmlFor="hole13">13</label>
          <input type="number" name="par13" id="hole13" value={props.state.par13} onChange={(e) => props.handleChange("par13")(e)}/>
        </div>
        
        <div>
          <label htmlFor="hole14">14</label>
          <input type="number" name="par14" id="hole14" value={props.state.par14} onChange={(e) => props.handleChange("par14")(e)}/>
        </div>
        
        <div>
          <label htmlFor="hole15">15</label>
          <input type="number" name="par15" id="hole15" value={props.state.par15} onChange={(e) => props.handleChange("par15")(e)}/>
        </div>
       
        <div>
          <label htmlFor="hole16">16</label>
          <input type="number" name="par16" id="hole16" value={props.state.par16} onChange={(e) => props.handleChange("par16")(e)}/>
        </div>
        
        <div>
          <label htmlFor="hole17">17</label>
          <input type="number" name="par17" id="hole17" value={props.state.par17} onChange={(e) => props.handleChange("par17")(e)}/>
        </div>
        
        <div>
          <label htmlFor="hole18">18</label>
          <input type="number" name="par18" id="hole18" value={props.state.par18} onChange={(e) => props.handleChange("par18")(e)}/>
        </div>

        <div>Par: {props.state.par10 + props.state.par11 + props.state.par12 + props.state.par13 + props.state.par14 + props.state.par15 + props.state.par16 + props.state.par17 + props.state.par18}</div>
        
        <button id="submit" onClick={props.prevStep}>Prev</button>
        <button id="submit" onClick={validateInput}>Next</button>
      </div>  
    )
  }
  
}

export default CoursePars;
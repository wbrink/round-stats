import React, {useState} from "react";

function CoursePars(props) {
  const [frontBack, setFrontBack] = useState("front");

  const handleClick = (side) => {
    setFrontBack(side);
  }

  // if front nine is checked
  if (frontBack == "front") {
    return (
      <div>
        <button onClick={e => handleClick("front")}>Front</button>
        <button onClick={e => handleClick("back")}>Back</button>
        
        <div> 
          <label htmlFor="hole1">1</label>
          <input type="number" name="par1" id="hole1" value={props.state.par1} onChange={(e) => props.handleChange("par1")(e)}/>
        </div>
        
        <div>
          <label htmlFor="hole2">2</label>
          <input type="number" name="par2" id="hole2" value={props.state.par2} onChange={(e) => props.handleChange("par2")(e)}/>
        </div>
        
        <div>
          <label htmlFor="hole3">3</label>
          <input type="number" name="par3" id="hole3" value={props.state.par3} onChange={(e) => props.handleChange("par3")(e)}/>
        </div>
        
        <div>
          <label htmlFor="hole4">4</label>
          <input type="number" name="par4" id="hole4" value={props.state.par4} onChange={(e) => props.handleChange("par4")(e)}/>
        </div>
        
        <div>
          <label htmlFor="hole5">5</label>
          <input type="number" name="par5" id="hole5" value={props.state.par5} onChange={(e) => props.handleChange("par5")(e)}/>
        </div>
        
        <div>
          <label htmlFor="hole6">6</label>
          <input type="number" name="par6" id="hole6" value={props.state.par6} onChange={(e) => props.handleChange("par6")(e)}/>
        </div>
       
        <div>
          <label htmlFor="hole7">7</label>
          <input type="number" name="par7" id="hole7" value={props.state.par7} onChange={(e) => props.handleChange("par7")(e)}/>
        </div>
        
        <div>
          <label htmlFor="hole8">8</label>
          <input type="number" name="par8" id="hole8" value={props.state.par8} onChange={(e) => props.handleChange("par8")(e)}/>
        </div>
        
        <div>
          <label htmlFor="hole9">9</label>
          <input type="number" name="par9" id="hole9" value={props.state.par9} onChange={(e) => props.handleChange("par9")(e)}/>
        </div>

        <div>Par: {props.par10 + props.par11 + props.par12 + props.par13 + props.par14 + props.par15 + props.par16 + props.par17 + props.par18}</div>
        
      </div>  
    )
  }


  // if front nine is checked
  if (frontBack == "back") {
    return (
      <div>
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

        <div>Par: {parseInt(props.state.par10) + parseInt(props.state.par11) + parseInt(props.state.par12) + parseInt(props.state.par13) + parseInt(props.state.par14) + parseInt(props.state.par15) + parseInt(props.state.par16) + parseInt(props.state.par17) + parseInt(props.state.par18)}</div>
        
      </div>  
    )
  }
  
}

export default CoursePars;
import React, {useState} from "react";


function CourseInfo(props) {
  const [stateFeedback, setStateFeeback] = useState("");
  const [courseFeedback, setCourseFeedback] = useState("");
  const [countryFeedback, setCountryFeedback] = useState("");

  const validateInput = () => {
    let validated = [];

    if (!props.state.state) {
      setStateFeeback("Please Select State");
      validated.push(false);
      
    } else {
      validated.push(true);
    }

    if (!props.state.name) {
      setCourseFeedback("Must Fill Out Course Name")
      validated.push(false);
    } else {
      validated.push(true);
    }

    if (!props.state.country) {
      setCountryFeedback("Please Fill Out Country")
      validated.push(false);
    } else {
      validated.push(true);
    }

    // if all validated then proceed to the next step in the form
    if (validated.every((elem) => elem)) {
      props.nextStep();
    }
  }
  
  return (
    <div>
      <h2 className="form-title">Add Course Info</h2>
      <div className="form-group p-btm-30">
        <label htmlFor="country">Country</label>
        <input type="text" value={props.state.country} onChange={(e) => props.handleChange("country")(e)}></input>
        <div className="feedback">{countryFeedback}</div>
      </div>

      <div className="form-group p-btm-30">
        <label htmlFor="state">State (or Province)</label>
        <input type="text" value={props.state.state} onChange={(e) => props.handleChange("state")(e)}></input>
        <div className="feedback">{stateFeedback}</div>
      </div>


      <div className="form-group p-btm-30">
        <label htmlFor="course-name">Course Name</label>
        <input type="text" value={props.state.name} onChange={(e) => props.handleChange("name")(e)}/>
        <div className="feedback">{courseFeedback}</div>
      </div>
        

      <div className="form-group-inline p-btm-30">
        {/* 9 hole radio */}
        <input type="radio" name="course-length" id="nine-holes" value="9" checked={props.state.length == "9"} onChange={(e) => props.handleChange("length")(e)}/>
        <label htmlFor="nine-holes" style={{width: "auto", marginRight: "20px", marginLeft: "10px" }}>9 Holes</label>

        {/* 18 hole radio */}
        <input type="radio" name="course-length" id="eighteen-holes" value="18" checked={props.state.length == "18"} onChange={(e) => props.handleChange("length")(e)}/>
        <label htmlFor="eighteen-holes" style={{width: "auto", marginLeft: "10px"}}>18 Holes</label>
      </div>

      <button id="submit" onClick={validateInput}>Next</button>
      
    </div>
  )
}

export default CourseInfo;




{/* <label htmlFor="states">Choose State <span className="feedback">{stateFeedback}</span></label> */}
        {/* states select input */}
        {/* <select name="state" id="states" value={props.state.state} onChange={(e) => props.handleChange("state")(e)}>
          <option value="">--</option>
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AZ">AZ</option>
          <option value="AR">AR</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DE">DE</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="HI">HI</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="IA">IA</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="ME">ME</option>
          <option value="MD">MD</option>
          <option value="MA">MA</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MO">MO</option>
          <option value="MT">MT</option>
          <option value="NE">NE</option>
          <option value="NV">NV</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NY">NY</option>
          <option value="NC">NC</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WV">WV</option>
          <option value="WI">WI</option>
          <option value="WY">WY</option>
        </select> */}
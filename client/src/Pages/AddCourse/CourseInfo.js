import React from "react";


function CourseInfo(props) {
  console.log("in courseinfo 9 or 18", props.state);
  
  return (
    <div className="form-group">
      <label htmlFor="states">Choose State (optional)</label>
      {/* states select input */}
      <select name="state" id="states">
        <option value="--">--</option>
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
      </select>

      <label htmlFor="course-name">Course Name</label>
      <input type="text" value={props.state.courseName} onChange={(e) => props.handleChange("courseName")(e)}/>

      <div>
        {/* 9 hole radio */}
        <input type="radio" name="course-length" id="nine-holes" value="9" checked={props.state.courseLength == "9"} onChange={(e) => props.handleChange("courseLength")(e)}/>
        <label htmlFor="nine-holes">9 Holes</label>

        {/* 18 hole radio */}
        <input type="radio" name="course-length" id="eighteen-holes" value="18" checked={props.state.courseLength == "18"} onChange={(e) => props.handleChange("courseLength")(e)}/>
        <label htmlFor="eighteen-holes">18 Holes</label>

      </div>


      
    </div>
  )
}

export default CourseInfo;



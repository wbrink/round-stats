import React, {useState} from "react";
import "./style.css";

import CourseInfo from "./CourseInfo";
import CoursePars from "./CoursePars";

function AddCourse() {
  const [formInfo, setFormInfo] = useState({
    state: "",
    courseName: "",
    courseLength: "18",
    par1: 0,
    par2: 0,
    par3: 0,
    par4: 0,
    par5: 0,
    par6: 0,
    par7: 0,
    par8: 0,
    par9: 0,
    par10: 0,
    par11: 0,
    par12: 0,
    par13: 0,
    par14: 0,
    par15: 0,
    par16: 0,
    par17: 0,
    par18: 0,
  });
  
  const [step, setStep] = useState(2);


  const handleSubmit = (e) => {
    e.preventDefault();

  }

  // 
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  }

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  }

  const handleChange = (input) => (e) => {
    // e.preventDefault();
    setFormInfo({...formInfo, [input]: e.target.value})
    console.log(input, e.target.value);
  }


  return (
    <div className="smaller-container">
      <h1>Add Course</h1>

      <form id="add-course-form" onSubmit={(e) => handleSubmit(e)}>
        {step == 1 && <CourseInfo handleChange={handleChange} state={formInfo} nextStep={nextStep} prevStep={prevStep}/> }
        {step == 2 && <CoursePars handleChange={handleChange} state={formInfo} nextStep={nextStep} prevStep={prevStep}/> }
        <input type="submit" id="submit" value="Add Course"/>
      </form>
    </div>
  )
}

export default AddCourse;
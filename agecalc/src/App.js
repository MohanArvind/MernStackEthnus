import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const currentDate = new Date();
  const [dob, setUpdated] = useState(' ');
  const [age, setMessage] = useState(dob);


  const handleChange = (event) => {
    setUpdated(event.target.value);
  };

  const handleClick = () => {
    var date = new Date((dob));
    var theAge = currentDate.getFullYear()-date.getFullYear()-1;
    
    if(currentDate.getMonth()>date.getMonth())theAge++;
    else if(currentDate.getMonth()>=date.getMonth()){
      if(currentDate.getDate()>date.getDate())theAge++;
    }
    setMessage(theAge);
  };


  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <br></br>
      <h3>Enter Your Date of Birth :</h3>

      <div>
      <input type="date" onChange={handleChange} value={dob} name="dob" id="dob"/>
        <br></br>
        <br></br>
        <button onClick={handleClick} class="button">Submit</button>
      </div>
      <br></br>
      <div>The age is: {age}</div>
      
    </div>
  );
}

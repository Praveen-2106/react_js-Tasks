import React from "react";

function StuDetails() {
 
  let form = () => {
    let username = document.getElementById('username').value;
    let age = document.getElementById('age').value;
    let department = document.getElementById('department').value;
    let college = document.getElementById('college').value;

   
    alert(`Name: ${username}\nAge: ${age}\nDepartment: ${department}\nCollege: ${college}`);
  };

  return (
    <>
      <div>
        <h1>Student Details</h1>
        <label>Enter your Name:</label>
        <input type="text" id="username" name="username" /><br></br>
        
        <label>Enter your Age:</label>
        <input type="number" id="age" name="age" /><br></br>
        
        <label>Enter your Department:</label>
        <input type="text" id="department" name="department" /><br></br>
        
        <label>Enter your College:</label>
        <input type="text" id="college" name="college" /><br></br>
        
        <button onClick={form}>Submit</button>
      </div>
    </>
  );
}

export default StuDetails;
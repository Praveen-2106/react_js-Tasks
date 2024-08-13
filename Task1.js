import React from "react";
import Image from './Image/profile-img.png';
function Task1(){
    return(
     <>
     <div className="container">
       <h1>Congratulations</h1> 
       <div className="main">
        <img src={Image} className="profile"/>
        <h2>Kiran</h2>
        <p>KG college Of Arts And Science</p>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"/>
       </div>
    </div></>
    );
}
export default Task1;




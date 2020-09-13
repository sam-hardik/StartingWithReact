import React, { useState } from 'react';
import * as ReactBs from 'react-bootstrap'
import './DigitalClock.css'
var DigitalClock = () => {
const sysDate = new Date().toLocaleTimeString();
const [state,setState]=useState(sysDate)
const updateTime=()=>{
    const sysDate = new Date().toLocaleTimeString();
    setState(sysDate)
}
setInterval(updateTime,1000)
function HideFunction() {
    var x = document.getElementById("hide");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 

return(
    <div id='clockheader'>
    <div id='dgText' ><h3>Digital Clock</h3></div>
    <div id='togglediv'><ReactBs.Button variant='success' onClick={HideFunction}>Show Date</ReactBs.Button></div> 
    <div id="clockDiv"><div id="roundclock"><h5>{`${state}`}<br></br><div id='hide'>{`${new Date().toLocaleDateString()}`}</div></h5></div></div>
    </div>
)

}
export default DigitalClock;

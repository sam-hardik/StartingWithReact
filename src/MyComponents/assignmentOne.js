import React from "react";
import * as ReactBootStrap from "react-bootstrap";

//import { render } from 'react-dom';
/*var tab = ()=>{
    return <table>
    <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
    </tr>
    <tr>
    <td>Firstname</td>
    <td>Lastname</td>
    <td>20</td>
    </tr>
    </table>
}
export default tab;*/
var Table = ()=>{
    const employee = [
        {eName: "Charlie",eJob:"Janitor"},
        {eName: "Mac",eJob:"Bouncer"},
        {eName: "Dee",eJob:"Actress"},
        {eName: "Dennis",eJob:"Bar Tender"},
    ];
    const renderEmploye = (employe,index)=>{
        return( <tr key={index}>
        <td>{employe.eName}</td>
        <td>{employe.eJob}</td>
        </tr>
        )
    }
    return(
        <div>
    <ReactBootStrap.Table striped bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
    <tbody>
      {employee.map(renderEmploye)}
    </tbody>
  </ReactBootStrap.Table>
  </div>
    );
}

 
 export default Table;

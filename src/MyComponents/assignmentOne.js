import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import MyForm from './form';
var Table = ()=>{
    var employee = [
        {eName: "Charlie",eJob:"Janitor"},
        {eName: "Mac",eJob:"Bouncer"},
        {eName: "Dee",eJob:"Actress"},
        {eName: "Dennis",eJob:"Bar Tender"},
    ];
    let array =[];
    const submitBtn=()=>{
      let ename=document.getElementById('formGroupName').value;
    let ejob=document.getElementById('formGroupJob').value;
    console.log(ename,ejob);
    let obj={eName:ename,eJob:ejob};
    array.push(obj);
    console.log(array);
    employee.push(obj);
    console.log(employee);
    }
    
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
  <MyForm/>
  <ReactBootStrap.Button variant="primary" onClick={submitBtn}>Submit</ReactBootStrap.Button>
  </div>);
}
 export default Table;

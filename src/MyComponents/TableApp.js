import React from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import MyForm from './form';
 class TableApp extends React.Component{
     state={
         employeeList :[
             {eName : 'Hardik',eJob:'Developer'},
             {eName : 'Sam',eJob:'Tester'}
            ]
     };
     submitBtn = () =>{
         this.renderEmploye(this.state.employeeList)
         let empName=document.getElementById('formGroupName').value;
         let empJob=document.getElementById('formGroupJob').value;
         let empObject = {eName : empName,eJob:empJob};
         this.state.employeeList.push(empObject); 
         this.setState(this.state.employeeList);      
    }
    renderEmploye = (empl)=>{
        return( <tr>
        <td>{empl.eName}</td>
        <td>{empl.eJob}</td>
        </tr>
        )
    }

     render(){
       return(<div>
        <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employeeList.map(this.renderEmploye)}
        </tbody>
      </ReactBootStrap.Table>
      <MyForm/>
      <ReactBootStrap.Button variant="primary" onClick={this.submitBtn}>Submit</ReactBootStrap.Button>
      </div>);
 }
}
export default TableApp;
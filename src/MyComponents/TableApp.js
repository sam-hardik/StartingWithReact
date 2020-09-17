import React from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import MyForm from './form';
//import { remove } from '../config/logger';
//import remove from 'lodash'
 class TableApp extends React.Component{
     state={
         employeeList :[
             
            ]
     };
     //counter=-1;
     submitBtn = () =>{
        let empName=document.getElementById('formGroupName').value;
        let empJob=document.getElementById('formGroupJob').value;
        let empObject = {eName : empName,eJob:empJob};
        this.state.employeeList.push(empObject);
        //this.state.employeeList.map(e=>console.log(this.state.employeeList.indexOf(e)))
        this.setState(this.state.employeeList);      
    }
    removeEmployeBtn =(employeIndex)=>{ 
      const employe=this.state.employeeList;
      employe.splice(employeIndex,1)
      this.setState({employe:employe});
    }
   
    renderEmploye = (empl,index)=>{
        return( <tr>
        <td>{empl.eName}</td>
        <td>{empl.eJob}</td>
        <td>{<ReactBootStrap.Button variant="danger" size="sm" 
         onClick={this.removeEmployeBtn.bind(this,index)} >Remove</ReactBootStrap.Button>}</td>
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
            <th>Remove</th>
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
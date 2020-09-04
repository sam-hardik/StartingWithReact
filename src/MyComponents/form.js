import React from "react";
import * as ReactBootStrap from "react-bootstrap";


var MyForm = () => {
return (<div>
<ReactBootStrap.Form>
    <ReactBootStrap.Form.Group controlId="formGroupName">
      <ReactBootStrap.Form.Label>Name</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="text" placeholder="Enter Name" />
    </ReactBootStrap.Form.Group>
    <ReactBootStrap.Form.Group controlId="formGroupJob">
      <ReactBootStrap.Form.Label>Job</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="text" placeholder="Enter Job" />
    </ReactBootStrap.Form.Group>
  </ReactBootStrap.Form>
  
</div>);
}
export default MyForm;
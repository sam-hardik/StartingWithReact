import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LuckyNumber from './MyComponents/LuckyNumber';
import "bootstrap/dist/css/bootstrap.min.css";
//import App from './App';
import Table from './MyComponents/assignmentOne';
import * as serviceWorker from './serviceWorker';
const sysDate = new Date();

ReactDOM.render(
  <>
  <h1 className ="heading">Hello Welcome to React!</h1>
  <h3 id="date">{`Today is ${sysDate}`}</h3>
  <LuckyNumber/>
  <Table/>  
  </>,
  document.getElementById('root')
);
serviceWorker.unregister();

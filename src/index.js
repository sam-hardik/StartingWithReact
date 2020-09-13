import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LuckyNumber from './MyComponents/LuckyNumber';
import "bootstrap/dist/css/bootstrap.min.css";
import TableApp from './MyComponents/TableApp'
import * as serviceWorker from './serviceWorker';
import  Calc from './MyComponents/Calc'
import DigitalClock from './MyComponents/DigitalClock'

ReactDOM.render(
  <>
  <h1 className ="heading">Hello Welcome to React!</h1>
  <LuckyNumber/>
  <TableApp/>  
  <br></br>
  <Calc/>
  <DigitalClock/>
  </>,
  document.getElementById('root'));
serviceWorker.unregister();

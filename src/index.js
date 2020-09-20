import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter} from 'react-router-dom'
import './index.css';
//import LuckyNumber from './MyComponents/LuckyNumber';
import "bootstrap/dist/css/bootstrap.min.css";
//import TableApp from './MyComponents/TableApp'
import * as serviceWorker from './serviceWorker';
//import  Calc from './MyComponents/Calc'
//import DigitalClock from './MyComponents/DigitalClock'
//import Navbar from './MyComponents/Navbar';
import Currentweather from './Weatherapp/Currentweather'

//All commented imports are components, that should be mounted in index.js file to use!

ReactDOM.render(
  <>
  <Currentweather/>
  </>,
  document.getElementById('root'));
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
const sysDate = new Date();
let luckyNumber=Math.floor(Math.random() * 100); 
ReactDOM.render(
  <>
  <h1 className ="heading">Hello Welcome to React!</h1>
  <h3 id="date">{`Today is ${sysDate}`}</h3>
  <p id = "lucynumber">{`Your Lucky Number is : ${luckyNumber}`}</p>
  <img src="https://picsum.photos/536/354" alt=""></img>
  </>,
  document.getElementById('root')
);
serviceWorker.unregister();

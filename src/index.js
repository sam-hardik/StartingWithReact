import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LuckyNumber from './MyComponents/LuckyNumber';
//import App from './App';
import * as serviceWorker from './serviceWorker';
const sysDate = new Date();

ReactDOM.render(
  <>
  <h1 className ="heading">Hello Welcome to React!</h1>
  <h3 id="date">{`Today is ${sysDate}`}</h3>
  <LuckyNumber/>
  <img src="https://picsum.photos/536/354" alt=""></img>
  </>,
  document.getElementById('root')
);
serviceWorker.unregister();

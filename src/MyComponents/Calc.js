import React,{useState} from 'react';
//import * as ReactBootStrap from 'react-bootstrap'
import './Calc.css'
//import logger from '../config/logger';

function Calc(){
    const [initialData,setData] =  useState("");
    const expr=[];
    return(<div className="container">
    <div className="calc-body">
      <div className="calc-screen">
        <div className="show-input">25+33</div>
        <div className="calc-typed"></div>
      </div>
      <div className="calc-button-row">
        <div className="button c" onClick={()=>{setData(0,initialData.length-1);console.log(initialData)}}>C</div>
        <div className="button l" onClick={()=>{expr.push("≠"); console.log(expr)}}>≠</div>
        <div className="button l" onClick={()=>{expr.push("%"); console.log(expr)}}>%</div>
        <div className="button l" onClick={()=>{
            expr.push("/");
            console.log(expr)
        }}>/</div>
      </div>
      <div className="calc-button-row">
        <div className="button" value='7' onClick={()=>{expr.push("7"); console.log(expr)}}>7</div>
        <div className="button" value='8' onClick={()=>{expr.push("8"); console.log(expr)}}>8</div>
        <div className="button" value='9' onClick={()=>{expr.push("9"); console.log(expr)}}>9</div>
        <div className="button l" value='*' onClick={()=>{expr.push("*"); console.log(expr)}}>x</div>
      </div>
      <div className="calc-button-row">
        <div className="button" value='4' onClick={()=>{expr.push("4"); console.log(expr)}}>4</div>
        <div className="button" value='5' onClick={()=>{expr.push("5"); console.log(expr)}}>5</div>
        <div className="button" value='6' onClick={()=>{expr.push("6"); console.log(expr)}}>6</div>
        <div className="button l" value='-' onClick={()=>{expr.push("-"); console.log(expr)}}>−</div>
      </div>
      <div className="calc-button-row">
        <div className="button" value='1' onClick={()=>{expr.push("1"); console.log(expr)}}>1</div>
        <div className="button" value='2' onClick={()=>{expr.push("2"); console.log(expr)}}>2</div>
        <div className="button" value='3' onClick={()=>{expr.push("3"); console.log(expr)}}>3</div>
        <div className="button l" valye='+' onClick={()=>{expr.push("+"); console.log(expr)}}>+</div>
      </div>
      <div className="calc-button-row">
        <div className="button" value='.' onClick={()=>{expr.push("."); console.log(expr)}}>.</div>
        <div className="button" value='0' onClick={()=>{expr.push("0"); console.log(expr)}}>0</div>
        <div className="button">
          </div>
            <div className="button l" value='=' onClick={()=>{}}>=</div>
        </div>
      </div>
    </div>
    )
}
export default Calc;
import React from 'react';
//import './src/index.css';
var luckyNumber = () => {
    let luckynumber = Math.floor(Math.random() * 100);
    return <h4 id="luckynumber">{`Your Lucky Number is : ${luckynumber}`}</h4>
}
export default luckyNumber;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Clock and Loader Functionality Script
window.onload = function(){

// console
console.log("Please wait till image loads");
console.log("Upvote if you like this clock");

// loader
const loader = document.querySelector("#loader");
const container = document.querySelector("#container");

setTimeout(() => {
    loader.style.display = "none";
    container.style.display = "block";
},1500)

// clock
const deg = 6;
const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
    let time = new Date();
    let hour = time.getHours() * 30;
    let minute = time.getMinutes() * deg;
    let second = time.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${(hour) + (minute/12)}deg)`;
    min.style.transform = `rotateZ(${minute}deg)`;
    sec.style.transform = `rotateZ(${second}deg)`;
},1000);

}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

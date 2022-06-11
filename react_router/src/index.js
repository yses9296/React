import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";

// // Topic - Routes
// function HTML(){
//   return (
//     <div>
//       <h3>HTML is...</h3>
//     </div>
//   )
// }
// function JS(){
//   return (
//     <div>
//       <h3>JS is...</h3>
//     </div>
//   )
// }
// function REACT(){
//   return (
//     <div>
//       <h3>React is...</h3>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


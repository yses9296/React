import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route , Link, NavLink} from "react-router-dom";

function Home(){
  return(
    <div>
      <h2>Home</h2>
      <p>Home is ...</p>
    </div>
  )
}
function Topics(){
  return(
    <div>
      <h2>Topics</h2>
      <p>Topics is ...</p>
    </div>
  )
}

function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      <p>Contact is ...</p>
    </div>

  )
}
function App(){
  return(
    <div>
      <h1>React Router</h1>
      <ul>
        {/* 
        전체 로딩
        <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li> 
        */}

        {/* 
        Link 그 자리에서 변경, 활성화된 메뉴 구분 X style X
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li> 
        */}
        
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li> 

      </ul>

      
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/topics" element={<Topics/>}> </Route>
        <Route path="/contact" element={<Contact/>}> </Route>
      </Routes>
    </div>
  )
}

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

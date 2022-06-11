import React, { Component } from 'react'
import { Routes, Route, NavLink} from "react-router-dom";
import Home from './components/Home';
import Topics from './components/Topics';
import Contact from './components/Contact';

// main App
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
        <Route path="/topics/*" element={<Topics/>}> </Route>
        <Route path="/contact" element={<Contact/>}> </Route>
      </Routes>
    </div>
  )
}
export default App;
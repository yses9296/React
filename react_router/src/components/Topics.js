import React, { Component } from 'react';
import { Routes, Route, NavLink} from "react-router-dom";
import Topic from './Topic';
function Topics(){

  var contents = [
    { id: 1, title: 'HTML', desc: 'HTML is ...' },
    { id: 2, title: 'JS', desc: 'JS is ...' },
    { id: 3, title: 'React', desc: 'React is ...' }
  ];

  {/*
    var list = [];
    for (var i = 0; i < contents.length; i++){
      list.push(
        <li key={contents[i].id}><NavLink to= {"/topics/" + contents[i].id}> {contents[i].title} </NavLink></li>
      )
    }
  */}
  
    var list = contents.map(content => {
      return <li key={content.id}><NavLink to= {"/topics/" + content.id}> {content.title} </NavLink></li>;
    });
  
    return(
      <div>
        <h2>Topics</h2>
        <nav>
          <ul>
            {/*
            <li><NavLink to="/topics/html">HTML</NavLink></li>
            <li><NavLink to="/topics/js">JS</NavLink></li>
            <li><NavLink to="/topics/react">REACT</NavLink></li>
  
            To Do. 
            변수명 list라는 빈 배열을 만들고, 
            for 반복문으로 contents 배열의 개수만큼 반복하여 
            변수명 list에 
            <li><NavLink to="/topics/html">HTML</NavLink></li> 형태의 요소 
            하나씩 추가하여 반복문으로 생선된 list 출력.
  
            */}
            {list}
  
          </ul>
        </nav>
        <Routes>
        {/*
          <Route path="html" element={<Topic/>}></Route>
          <Route path="js" element={<Topic/>}></Route>
          <Route path="react" element={<Topic/>}></Route>
        */}
            {/* contents Topic.js로 보내기. */}
          <Route path=":topic_id" element={<Topic data={contents}/>}></Route> 
        </Routes>
      </div>
    )
  }

  export default Topics;
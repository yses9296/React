import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route , useParams, NavLink} from "react-router-dom";

function Home(){
  return(
    <div>
      <h2>Home</h2>
      <p>Home is ...</p>
    </div>
  )
}

var contents = [
  { id: 1, title: 'HTML', desc: 'HTML is ...' },
  { id: 2, title: 'JS', desc: 'JS is ...' },
  { id: 3, title: 'React', desc: 'React is ...' }
];

function Topics(){
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
        <Route path=":topic_id" element={<Topic/>}></Route>
      </Routes>
    </div>
  )
}

function Topic(){
  var params = useParams();
  var topic_id = Number(params.topic_id);

  var selected_topic = {
    title: 'Sorry,',
    desc: 'Not Found'

  }
  /*
    To Do.
    for 반복문으로 contents들 마다 할 일.
    순회하는 값에서 contents.id 값과 topic_id이 동일한다면
    그 순번의 내용을 selected_topic에 저장.
    selected_topic = contents[0]

  */
  for (var i = 0; i < contents.length; i++){
    if ( topic_id == contents[i].id ){
      selected_topic = contents[i];
      break;
    }
  }
  return(
    <div>
      <h3>{selected_topic.title}</h3>
      <p>{selected_topic.desc}</p>
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

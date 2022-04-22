import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';

function App(){
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumer={2}></FuncComp>
      <ClassComp initNumer={2}></ClassComp>
    </div>
  );
}

/* 함수형이 훨씬 깔끔
   props를 사용하기 위해선 함수 매개변수 필요 */
function FuncComp(props){
  const [number, setNumber] = useState(props.initNumer);

  return(
    <div className="container">
      <h2>Function Style Component</h2>
      <p>Number : {number}</p>
      <input type="button" value="random" onClick={
        function(){
          setNumber(Math.random());
        }
      }></input>
    </div>
  );
}

class ClassComp extends Component {
  state = {
    number: this.props.initNumer
  }

  render() {
    return (
      <div className="container">
        <h2>Class Style Component</h2>
        <p>Number : {this.state.number}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({ number: Math.random() });
          }.bind(this)
        }></input>
      </div>
    )
  }
}


export default App;
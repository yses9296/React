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
  //useState - 공식 (선호)
  const [number, setNumber] = useState(props.initNumer);
  const [date, setDate] = useState((new Date()).toString());
  //new Date() >>현재 날짜
  //(new Date()).toString() >>현재 날짜 문자변환

  //useState - 또 다른 방법
  /* var numberState = useState(props.initNumer);
     var number = numberState[0];
     var setNumber = numberState[1];
  */

  return(
    <div className="container">
      <h2>Function Style Component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input type="button" value="random" className="btn" onClick={
        function(){
          setNumber(Math.random());
        }
      }></input>
      <input type="button" value="update" className="btn" onClick={
        function(){
          setDate( (new Date()).toString() );
        }
      }></input>
    </div>
  );
}

class ClassComp extends Component {
  state = {
    number: this.props.initNumer,
    date: (new Date()).toString()
  }

  render() {
    return (
      <div className="container">
        <h2>Class Style Component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" className="btn" onClick={
          function(){
            this.setState({ number: Math.random() });
          }.bind(this)
        }></input>
        <input type="button" value="update" className="btn" onClick={
          function(){
            this.setState({ date: (new Date()).toString() });
          }.bind(this)
        }></input>
      </div>
    )
  }
}


export default App;
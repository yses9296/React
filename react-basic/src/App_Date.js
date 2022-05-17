import React, { Component } from 'react';
import { useState,useEffect } from 'react';
import './App_Date.css';

function App(){
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);

  return (
    <div className="container">
      <h1>Hello World</h1>
      <input type="button" value="remove func" onClick={
        function(){
          setFuncShow(false);
        }
      }></input>
      <input type="button" value="remove class" onClick={
        function(){
          setClassShow(false);
        }
        }></input>
      {/* funcShow가 true면 <FuncComp initNumer={2}></FuncComp> // false면 null */}
      { funcShow ? <FuncComp initNumer={2}></FuncComp> : null }
      { classShow ? <ClassComp initNumer={2}></ClassComp> : null }
      {/* <FuncComp initNumer={2}></FuncComp>
      <ClassComp initNumer={2}></ClassComp> */}
    </div>
  );
}

var func_id = 0;

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

  // useEffect
  useEffect(function(){
  
    console.log('func useEffect', ++func_id);
    document.title= number+date;
    //final - App 컴포넌트가 모두 실행된 후에 할 일..
    return function(){
      console.log('func useEffect return', ++func_id);
      //final 작업 바로 전에 할 일...
    }
  })

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


// 클래스형
class ClassComp extends Component {
  state = {
    number: this.props.initNumer,
    date: (new Date()).toString()
  }

  componentWillMount(){
    console.log("componentWillMount is worked");
  }
  componentDidMount(){
    console.log("componentDidMount is worked");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount is worked");
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate is worked");
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log("componentWillUpdate is worked");
  }
  componentDidUpdate(nextProps, nextState){
    console.log("componentDidUpdate is worked");
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
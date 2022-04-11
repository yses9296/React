import React from 'react';
import ReactDOM from 'react-dom';
/*
function Helloworld(props){
  return <p>Hello World {props.firstname}</p>
}
*/

// {lastname} : distructuring 비구조화
function Helloworld({lastname, firstname}){
  return <p>Hello World {lastname + " "+ firstname}</p>
}

ReactDOM.render(
  <Helloworld firstname="Choi" lastname="Eunseo"/>,
  document.getElementById('root')
)
import './App.css';
import React, { Component } from 'react';

class Nav extends Component {
  // state = {
  //   list: []
  // }
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }
  componentDidMount(){
    fetch('./data/list.json')
    .then( result => result.json() )
    .then((data) => {
      this.setState({list: data})
    });

  }
  
  render() {

    let listTages = [];
    var list = this.state.list;
    /* 
    this.state.list
    for 반복문으로 
    */
    for (let i = 0; i < list.length; i++ ){
      listTages.push(
        <li><a href={list[i].id}>{list[i].title}</a></li>
      )
    }
    
    return (

         <nav>
          <ul>
            {/* <li><a href="1">HTML</a></li>
            <li><a href="2">CSS</a></li>
            <li><a href="3">JS</a></li> */}
            {listTages}
          </ul>
        </nav>

    )
  }
}

function App() {
  return (
    <div className="App">
      <h1>Web</h1>

      <Nav/>
      
      <article>
        <h2>Welcome</h2>
        <p>Hello, React &amp; Ajax</p>
      </article>
    </div>
  );
}

export default App;

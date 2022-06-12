import './App.css';
import React, { Component } from 'react';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }
  componentDidMount(){
    fetch('./data/list.json')
    .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },//json data를 받아왔을 시, 성공했을 시.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }//error가 있을 시, 데이터를 읽는데 실패할 시.
      )
  }
  
  render() {
    return (

         <nav>
          <ul>
            <li><a href="1">HTML</a></li>
            <li><a href="2">CSS</a></li>
            <li><a href="3">JS</a></li>
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

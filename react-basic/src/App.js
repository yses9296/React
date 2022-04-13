import React, { Component } from 'react';
import './App.css';

class MyHeader extends Component {
  render() {
    return (
      <header>
        <h1 className="logo">{this.props.title}</h1>
        <p>{this.props.desc}</p>
      </header>
    )
  }
}

class MyNav extends Component {
  render() {
    return (
      <nav>
        <ul>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
        </ul>
      </nav>
    )
  }
}

class MyArticle extends Component {
  render() {
    return (
      <section>
        <article>
            <h2>HTML</h2>
            <p>Hypertext Markup Language</p>
        </article>
      </section>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <MyHeader title="React" desc="Single Page Application"/>
        <MyNav/>
        <MyArticle/>
      </div>
    )
  }
}



/*
  export default class App extends Component {}
  
  class App extends Component {}
  export default App; 
*/

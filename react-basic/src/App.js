import React, { Component } from 'react';
import MyHeader from './MyHeader';
import MyNav from './MyNav';
import MyArticle from './MyArticle';
import './App.css';



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subject: {title:'React', desc:'Single Page Application'},
      menus: [ 
        {id:1, title:'HTML', desc:'Hypertext Markup Language'},
        {id:2, title:'CSS', desc:'Css is for Design'},
        {id:3, title:'Javascript', desc:'Javascript is for Interactive'}
      ],
      article: {title:'HTML', desc:'Hypertext Markup Language'}
    };
  }

  render() {
    return (
      <div className="App">
        <MyHeader 
                  title={this.state.subject.title} 
                  desc={this.state.subject.desc} 
        />
        <MyNav
                data={this.state.menus}
        />
        <MyArticle 
                  title={this.state.article.title}
                  desc={this.state.article.desc} 
        />
      </div>
    )
  }
}



/*
  export default class App extends Component {}
  
  class App extends Component {}
  export default App; 
*/

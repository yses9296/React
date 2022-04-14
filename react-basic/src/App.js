import React, { Component } from 'react';
import MyHeader from './MyHeader';
import MyNav from './MyNav';
import MyArticle from './MyArticle';
import './App.css';



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      welcome: {title:'Welcome', desc:'Welcome to React'},
      subject: {title:'React', desc:'Single Page Application'},
      menus: [ 
        {id:1, title:'HTML', desc:'Hypertext Markup Language'},
        {id:2, title:'CSS', desc:'Css is for Design'},
        {id:3, title:'Javascript', desc:'Javascript is for Interactive'}
      ],
    
    };
  }

  render() {
    console.log('App.js 실행됨');
    var _title, _desc = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if(this.state.mode === 'read'){
      _title = this.state.menus[0].title;
      _desc = this.state.menus[0].desc;
    }

    return (
      <div className="App">
        {/* <MyHeader 
                  title={this.state.subject.title} 
                  desc={this.state.subject.desc} 
        /> */}
        <header>
          <h1 className="logo" >
            <a href="#" 
              onClick={
                function(e){
                  e.preventDefault();
                  console.log(this);
                  // this.state.mode = 'welcome';
                  this.setState({mode: 'welcome'});
                }.bind(this)
              }>
              {this.state.subject.title}
            </a>
          </h1>
          <p>{this.state.subject.desc}</p>
        </header>
        <MyNav
                data={this.state.menus}
        />
        <MyArticle 
                  title={_title}
                  desc={_desc} 
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

import React, { Component } from 'react';
import MyHeader from './MyHeader';
import MyNav from './MyNav';
import MyArticle from './MyArticle';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      selected_id: null,
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
      /*
        반복문 >> 클릭한 요소의 data-id의 값이 menus의 각 항목들에 존재하는지
      */ 
      var i = 0;
      while (this.state.menus[i].id == this.state.selected_id){ 

        i++;
      }
      

      _title = this.state.menus[0].title;
      _desc = this.state.menus[0].desc;
    }

    return (
      <div className="App">
        <MyHeader 
                  title={this.state.subject.title} 
                  desc={this.state.subject.desc}
                  onChangePage = {
                    function(){
                      this.setState({
                        mode: 'welcome'
                      });
                    }.bind(this) //App.js 상단과 연결
                  } 
        />
        {/* <header>
          <h1 className="logo" >
            <a href="#" 
              onClick={
                function(e){
                  e.preventDefault();
                  console.log(this);
                  // this.state.mode = 'welcome';    >>> Wrong way
                  this.setState({mode: 'welcome'});
                }.bind(this) //App.js 상단과 연결
              }>
              {this.state.subject.title}
            </a>
          </h1>
          <p>{this.state.subject.desc}</p>
        </header> */}
        <MyNav
                data={this.state.menus}
                onChangePage = {
                  function(id){
                    this.setState({
                      mode: 'read',
                      selected_id: Number(id) //==ParseInt(id)
                    });
                  }.bind(this) //App.js 상단과 연결
                } 
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

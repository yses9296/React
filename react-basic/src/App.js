import React, { Component } from 'react';
import MyHeader from './app_js/MyHeader';
import MyNav from './app_js/MyNav';
import MyArticle from './app_js/MyArticle';
import Controls from './app_js/Controls';
import CreateArticle from './app_js/CreateArticle';
import ReadArticle from './app_js/ReadArticle';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      article: '',
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

    //mode MyNav
    var _title, _desc, _article = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <MyArticle title={_title} desc={_desc}/>
    }
    else if(this.state.mode === 'read'){
      /*
        반복문 >> 클릭한 요소의 data-id의 값이 menus의 각 항목들에 존재하는지
      */ 
      var i = 0;
      while (i < this.state.menus.length){ 
        var data = this.state.menus[i];

        if(data.id === this.state.selected_id){
          _title = data.title;
          _desc = data.desc;

          break;
        }
        
        i++;
      }
      _article = <MyArticle title={_title} desc={_desc}/>;
    }
    else if(this.state.mode === 'create'){
      _article = <CreateArticle title={_title} desc={_desc}/>
    }
    else if(this.state.mode === 'update'){
      _article = <ReadArticle title={_title} desc={_desc}/>
    }
    else if(this.state.mode === 'delete'){

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
                    // debugger;
                    this.setState({
                      mode: 'read',
                      selected_id: Number(id) //==ParseInt(id)
                    });
                  }.bind(this) //App.js 상단과 연결
                } 
        />
        {/* <MyArticle title={_title} desc={_desc}/> */}
        {_article}

        <Controls
                  onChangePage = {
                    function(_mode){
                      this.setState({
                        mode: _mode
                      });
                    }.bind(this)
                  }   
                  
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

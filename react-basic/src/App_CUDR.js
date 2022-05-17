import React, { Component } from 'react';
import MyHeader from './app_js/MyHeader';
import MyNav from './app_js/MyNav';
import MyArticle from './app_js/MyArticle';
import Controls from './app_js/Controls';
import CreateArticle from './app_js/CreateArticle';
import ReadArticle from './app_js/ReadArticle';
import UpdateArticle from './app_js/UpdateArticle';
import './App_CUDR.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.current_id = 3; //불변변수

    this.state = {
      mode: 'welcome',
      article: '',
      selected_id: null,
      welcome: {title:'Welcome', desc:'Welcome to React'},
      subject: {title:'React', desc:'Single Page Application'},
      menus: [ 
        {id:1, title:'HTML', desc:'Hypertext Markup Language', rate: 1},
        {id:2, title:'CSS', desc:'Css is for Design', rate: 2},
        {id:3, title:'Javascript', desc:'Javascript is for Interactive', rate: 3}
      ],    
    };
  }

  getArticles(){
    //mode MyNav
    var _title, _desc, _article = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <MyArticle title={_title} desc={_desc}/>
    }
    else if(this.state.mode === 'read'){
      var _result = this.getReadArticle();
      //_result >> {id:1, title:'HTML', desc:'Hypertext Markup Language, rate: 1'}
      
      _article = <MyArticle title={_result.title} desc={_result.desc} rate={_result.rate}/>;
    }
    else if(this.state.mode === 'create'){
      _article = <CreateArticle 
                    onSubmit={function(_title1, _desc1, _rate1){

                      this.current_id += 1;

                      //1-push
                      // this.state.menus.push(
                      //   {id: this.current_id, title: _title1, desc: _desc1}
                      // );

                      //2-concat (var c = 대상.concat(값)) 
                      // >> 복사한 값에 추가 >> MyNav.js에서 shouldComponentUpdate 함수에서 비교 가능
                      // var _menus = this.state.menus.concat(
                      //   {id: this.current_id, title: _title1, desc: _desc1}
                      // );

                      //3.Array.from()
                      //3-1. 복사본 생성 후 push

                      //3-2. Object.assign({},복사할 대상) >> assign() 객체 복사, (순서 주의, 순서 상관 O)
                      //ex) 
                      //   var a = {name: 'react', desc='awesome'};
                      //   var b = Object.assign({}, a);
                      //   var c = Object.assign({skill:'상'}, b);
                      
                      var _menus = Array.from(this.state.menus);
                      _menus.push(
                          {id: this.current_id, title: _title1, desc: _desc1, rate: _rate1}
                        );

                      //menus값 setState로 새로운 값으로 갱신
                      this.setState({
                        menus: _menus,
                        mode: 'read'
                      });
                    }.bind(this)
                  }/>
    }
    else if(this.state.mode === 'update'){
      var _result = this.getReadArticle();
      //_result >> {id:1, title:'HTML', desc:'Hypertext Markup Language, rate: 1'}

      _article = <UpdateArticle 
                      data={_result}
                      onSubmit={function(_id1, _title1, _desc1, _rate1){

                      var _menus = Array.from(this.state.menus);
                      
                      var i = 0;
                      while(i < _menus.length){
                        if(_menus[i].id === _id1){
                          _menus[i] = {id: _id1, title: _title1, desc: _desc1, rate: _rate1};
                          break;
                        }
                        i++;
                      }
                      
                      this.setState({
                        menus: _menus,
                        mode: 'read'
                      })
                    }.bind(this)
                  }/>
    }
    // else if (this.state.mode === 'delete'){

    // }

    return _article;
  }

  getReadArticle(){
      /*
        반복문 >> 클릭한 요소의 data-id의 값이 menus의 각 항목들에 존재하는지
      */ 
        var i = 0;
        while (i < this.state.menus.length){ 
          var data = this.state.menus[i];
  
          if(data.id === this.state.selected_id){
            // _title = data.title;
            // _desc = data.desc;
            return data;
            break;
          }
          
          i++;
        }
  }

  render() {
    console.log('App.js 실행됨');

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
        {this.getArticles()}

        <Controls
                  onChangePage = {
                    function(_mode){
                      if(_mode == 'delete'){
                        if(window.confirm('정말 삭제할까요?')){
                          var _menus = Array.from(this.state.menus);

                          var i = 0;
                          while (i < this.state.menus.length){ 
                            var data = this.state.menus[i];
                    
                            if(data.id === this.state.selected_id){
                              
                              //배열에서 대상 삭제 >> 대상.splice(2,3) 대상의 인덱스번호 2번째부터 3개 요소를 삭제
                              _menus.splice(i, 1);
                              break;
                            }
                            
                            i++;
                          }
                          this.setState({
                            menus: _menus
                          });
                          alert('삭제되었습니다.');
                        }
                        this.setState({
                          mode: 'welcome'
                        });
                      }
                      else {
                        this.setState({
                          mode: _mode
                        });
                      }
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

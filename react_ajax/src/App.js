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
    var currentList = this.state.list;
    /* 
    this.state.list
    << for 반복문으로 >>
    */
    /*
    for (let i = 0; i < currentList.length; i++ ){
      listTages.push(
        <li key={currentList[i].id}><a href={currentList[i].id}>{currentList[i].title}</a></li>
      )
    }
    */

    /* 
    << map >>
    대상의 값들마다 할 일 새로운 배열 담는다.
    each + var newArr =  Array.from(oldArr)

    var newArr = 대상.map(item => (반복할 일..))
    */
    listTages = currentList.map(item => (
      <li key={item.id}>
        <a href={item.id} data-id={item.id} 
          onClick={e => {
            e.preventDefault();
            this.props.onClick(e.target.dataset.id);
          }
        }>

          {item.title}

        </a>
      </li>
    ));
    
    return (

         <nav>
          <ul>
            {/* 
            <li><a href="1">HTML</a></li>
            <li><a href="2">CSS</a></li>
            <li><a href="3">JS</a></li> 
            */}
            {listTages}
          </ul>
        </nav>

    )
  }
}

class Article extends Component{ //Presentational Component 내용을 출력만 하는 컴포넌트. 

  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
      </article>
    )
  }

}

class App extends Component { //to use constructor, need to be class component
  constructor(props){
    super(props);
    this.state = {
      article: {title: 'Welcome', desc:'Hello, React & Ajax'} //initialize
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Web</h1>

        <Nav
          onClick = {id => {
            // fetch('./data/'+ id +'.json')
            fetch(`./data/${id}.json`)
            .then( result => result.json() )
            .then((data) => {
              this.setState({
                article: {
                  title: data.title,
                  desc: data.desc
                }
              })//setState
            });//then(data)
        
          }}
        />
        <Article 
          title = {this.state.article.title}
          desc = {this.state.article.desc}
        />

      </div>
    );
  }
}

export default App;

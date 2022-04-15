import React, { Component } from 'react'

export default class MyHeader extends Component {
    render() {
        console.log('MyHeader.js 실행됨');
      return (
        <header>
          <h1 className="logo">
            <a href="#" onClick={
              function(e){
                e.preventDefault();
                this.props.onChangePage(); //onChangePage는 App.js에서 함수 => 값 가져올 때도 함수 개념으로
              }.bind(this) //this => MyHeader,   bind()가없을 시 상단 this의 props 값 알 수 없음
            }>
              {this.props.title}
            </a>
          </h1>
          <p>{this.props.desc}</p>
        </header>
      )
    }
  }

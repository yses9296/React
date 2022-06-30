import React, { Component } from 'react';
import store from '../store'


export default class DisplayNumber extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      number: store.getState().number //초기값 store number 가져오기.
    }

    store.subscribe( () => ( this.setState({number: store.getState().number}) ) ); //계속해서 값을 받아와 갱신하는 함수.

  }
  render() {
    return (
      <div>
        <h2>DisplayNumber</h2>
        {/* <input type="text" value={this.props.number} readOnly/> //redux 사용 X.ver */}
        <input type="text" value={this.state.number} readOnly/>
      </div>
    )
  }
}

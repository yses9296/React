import './App.css';
import React, { Component } from 'react';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';


class App extends Component {
  state = {
    number: 5
  }

  render(){
    return (
      <div className="App">
      <h1>Root (App Component) </h1>
      <AddNumberRoot 
        // onClick={
        //   size => (
        //     this.setState({number: this.state.number + size})
        //   )
        // }
      ></AddNumberRoot>
      <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
    </div>
    )
  }
}

export default App;

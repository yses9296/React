import React, { Component } from 'react'
import AddNumber from './AddNumber'

export default class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h2>AddNumber Root</h2>
        {/* 
        <AddNumber
          onClick={
            size => (
                this.props.onClick(size)
            )
          }
        ></AddNumber>
        // redux 사용 X.ver 
        */}
        <AddNumber></AddNumber>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h2>DisplayNumber</h2>
        <input type="text" value={this.props.number} readOnly/>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class MyHeader extends Component {
    render() {
      return (
        <header>
          <h1 className="logo">{this.props.title}</h1>
          <p>{this.props.desc}</p>
        </header>
      )
    }
  }

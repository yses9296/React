import React, { Component } from 'react'

export default class AddNumber extends Component {
    state ={
        size: 1
    }
  render() {
    return (
      <div>
        <h2>Add Number</h2>
        <input type="text" value={this.state.size} 
            onChange={ 
                e => (
                    this.setState({size: Number(e.target.value)})
                )
            } 
        />
        <input type="button" value="+" 
            onClick={ 
                size => (
                    this.props.onClick(this.state.size)
                )
            }
        />
      </div>
    )
  }
}

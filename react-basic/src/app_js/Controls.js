import React, { Component } from 'react'

export default class Controls extends Component {
  render() {
    return (
      <div className="controls">
            <ul>
                <li>
                    <a href="/create" className="btn" 
                        onClick={
                            function(e){
                                e.preventDefault();
                                this.props.onChangePage('create');
                            }.bind(this)}>
                        Create
                    </a>
                </li>
                <li>
                    <a href="/update" className="btn"
                        onClick={
                            function(e){
                                e.preventDefault();
                                this.props.onChangePage('update');
                            }.bind(this)}>
                        Update
                    </a>
                </li>
                <li>
                    <input type="button" value="delete" 
                            onClick={
                                function(e){
                                    e.preventDefault();
                                    this.props.onChangePage('delete');
                                }.bind(this)}>
                    </input>
                </li>
            </ul>
      </div>
    )
  }
}

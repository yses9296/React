import React, { Component } from 'react'

export default class MyNav extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        
        return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
        )
    }
}
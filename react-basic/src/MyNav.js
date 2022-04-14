import React, { Component } from 'react'

export default class MyNav extends Component {
    render() {
        var lists = [];
        var data = this.props.data;

        var i = 0;
        while (i < data.length){
            lists.push(<li key={data[i].id}><a href="#">{data[i].title}</a></li>);
            i++;
        }

        return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
        )
    }
}
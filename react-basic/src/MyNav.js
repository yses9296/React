import React, { Component } from 'react'

export default class MyNav extends Component {
    render() {
        console.log('MyNav.js 실행됨');

        var lists = [];
        var data = this.props.data;

        var i = 0;
        while (i < data.length){
            lists.push(
            <li key={data[i].id}>
                <a href="#" 
                    data-id={data[i].id}
                    onClick={
                        function(e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                            //속성의 값 data-id
                            //대상.getAttrtibute('data-id')

                            //e.target.getAttrtibute('data-id')
                            //e.target.dataset.id

                        }.bind(this)
                }>
                    {data[i].title}
                </a>
            </li>
            );
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
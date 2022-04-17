import React, { Component } from 'react'

export default class MyNav extends Component {

    //menu를 클릭했을 때 myNav까지 실행되는 불필요함 줄이기
    shouldComponentUpdate(newProps){
        console.log('shouldComponentUpdate 작동', newProps.data, this.props.data);
        //newProps.data >> 새 값 (현재값)
        //this.props.data >> 기존값

        if(this.props.data === newProps.data){
            return false; //기본값 false >> false일 시 render() 실행 X
        }

        return true; //기본값 true >> true일 시 render() 실행 O
    }

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
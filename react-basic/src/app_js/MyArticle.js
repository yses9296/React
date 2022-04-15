import React, { Component } from 'react'

export default class MyArticle extends Component {
    render() {
        console.log('MyArticle.js 실행됨');

        return (
        <section>
            <article>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </article>
        </section>
        )
    }
}
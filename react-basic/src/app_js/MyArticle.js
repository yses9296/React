import React, { Component } from 'react'

export default class MyArticle extends Component {
    render() {
        console.log('MyArticle.js 실행됨');

        return (
        <section>
            <article>
                <h2>[Language] {this.props.title}</h2>
                <p>Description: {this.props.desc}</p>
                <p>Rate: {this.props.rate}</p>
            </article>
        </section>
        )
    }
}
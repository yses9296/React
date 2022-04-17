import React, { Component } from 'react'

export default class UpdateArticle extends Component {
    render() {
        console.log('UpdateArticle.js 실행됨');
        var data = this.props.data;

        return (
        <section>
            <article>
                <h2>Update Article</h2>
                <form className='updateForm' action="/update_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        // debugger;
                        this.props.onSubmit(e.target.title.value, e.target.desc.value);
                    }.bind(this)
                }>
                    <p>
                        <input type="text" name="title" placeholder="title" value={this.props.data.title}/>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="description" value={this.props.data.desc}/>
                    </p>
                    <p>
                        <input type="submit" value="Submit" className='submit'/>
                    </p>
                </form>
            </article>
        </section>
        )
    }
}
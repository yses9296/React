import React, { Component } from 'react'

export default class CreateArticle extends Component {
    render() {
        console.log('CreateArticle.js 실행됨');

        return (
        <section>
            <article>
                <h2>Create Article</h2>
                <form className='createForm' action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        // debugger;
                        this.props.onSubmit(e.target.title.value, e.target.desc.value);
                    }.bind(this)
                }>
                    <p>
                        <input type="text" name="title" placeholder="title"/>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="description"/>
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
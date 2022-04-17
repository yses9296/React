import React, { Component } from 'react'

export default class UpdateArticle extends Component {
    render() {
        console.log('UpdateArticle.js 실행됨');

        
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
                        <input type="text" name="title" placeholder="title" value={this.props.title}/>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="description" value={this.props.desc}/>
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
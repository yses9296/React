import React, { Component } from 'react'

export default class UpdateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : this.props.data.title,
            desc : this.props.data.desc,
        }
    }

    render() {
        console.log('UpdateArticle.js 실행됨');
        var data = this.props._result;

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
                        <input type="text" name="title" placeholder="title" 
                                value={this.state.title} 
                                onChange={function(e){
                                    this.setState({title: e.target.value})
                                }.bind(this)
                        }/>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="description" 
                                    value={this.state.desc}
                                    onChange={function(e){
                                        this.setState({desc: e.target.value})
                                    }.bind(this)
                        }/>
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
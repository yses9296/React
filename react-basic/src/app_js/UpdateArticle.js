import React, { Component } from 'react'

export default class UpdateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.data.id,
            title : this.props.data.title,
            desc : this.props.data.desc,
            rate : this.props.data.rate            
        }
    }

    render() {
        console.log('UpdateArticle.js 실행됨');
        // var data = this.props._result;

        return (
        <section>
            <article>
                <h2>Update Article</h2>
                <form className='updateForm' action="/update_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        // debugger;
                        this.props.onSubmit(
                            // e.target.id.value,
                            // e.target.title.value,
                            // e.target.desc.value,
                            // e.target.rate.value
                            this.state.id,
                            this.state.title,
                            this.state.desc,
                            this.state.rate
                        );
                    }.bind(this)
                }>
                    <input type="hidden" name="id" value={this.state.id}/>

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
                        <input type="number" name="rate" min="0" max="5"
                                    value={this.state.rate}
                                    onChange={function(e){
                                        this.setState({rate: e.target.value})
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
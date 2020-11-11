import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import TopHeadlines from './topheadlines'
import News from './news'
import './post.css';


export class Post extends Component {
    render() {
        return (
            <div class="post">
                <TopHeadlines/>
                <News/>
            </div>
            
        )
    }
}

export default Post

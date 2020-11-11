import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './main.css';
import Post from './post'
import Side from './side'

export class Main extends Component {
    render() {
        return (
            <div class="main-content">
               <Post/>
               <Side/>
            </div>
            
        )
    }
}

export default Main

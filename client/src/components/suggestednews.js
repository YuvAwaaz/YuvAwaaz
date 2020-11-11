import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './suggestednews.css';

export class SuggestedNews extends Component {
    render() {
        return (
            <div class="suggestednews">
                <div class="header">
                    <p class="ui red header">
                        Suggested News
                    </p>
                    <hr/>
                </div>
            </div>
        )
    }
}


export default SuggestedNews
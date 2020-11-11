import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './breakingnews.css';

export class BreakingNews extends Component {
    render() {
        return (
            <div class="breakingnews">
                <div class="header">
                    <p class="ui red header">
                        Breaking News
                    </p>
                    <hr/>
                </div>
            </div>
        )
    }
}


export default BreakingNews
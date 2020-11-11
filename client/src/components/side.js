import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import BreakingNews from './breakingnews'
import SuggestedNews from './suggestednews'
import './side.css';

export class Side extends Component {
    render() {
        return (
            <div class="side">
                <BreakingNews/>
                <SuggestedNews/>
            </div>
            
        )
    }
}

export default Side

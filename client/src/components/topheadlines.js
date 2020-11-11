import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './topheadlines.css';

export class TopHeadlines extends Component {
    render() {
        return (
            <div class="topheadlines">
                <div class="header">
                    <p class="ui red header">
                        TOP HEADLINES
                    </p>
                    <hr/>
                </div>

                <div class="headlines">
                    <ul class="ui list">
                        <li>Delhi air pollution deteriorates to severe category, AQI crosses 400 at Anand Vihar</li>
                        <li>Pak's Fawad Chaudhry makes a U-turn, seeks good relations with India</li>
                        <li>3 of family beheaded after quack claims they killed newborn with witchcraft</li>
                    </ul>
                </div>

            </div>
            
        )
    }
}

export default TopHeadlines

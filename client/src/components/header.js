import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './header.css';

export class Header extends Component {
    render() {
        return (
            <div class="main-header">
                <h2 class="ui header">
                    <img src="/YuvAwaaz_logo.png"/>
                    <div class="content">
                        YuvAwaaz
                    <div class="sub header">
                        Your Compelete Guide
                    </div>
                    </div>
                </h2>

                <div class="social-icons">
                    <a href="https://www.facebook.com/yuvawaaz" target="_blank">
                        <i class="fab fa-facebook-square fa-2x "></i>
                    </a>
                    <a href="https://twitter.com/yuvawaaz" target="_blank">
                        <i class="fab fa-twitter fa-2x "></i>
                    </a>
                    <a href="https://www.instagram.com/yuvawaaz/" target="_blank">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                 </div>
            </div>
            
        )
    }
}

export default Header

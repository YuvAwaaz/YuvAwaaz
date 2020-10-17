import React, { Component } from 'react'
//import 'semantic-ui-css/semantic.min.css'
import './Header.css';
import logo from '../assest/YuvAwaaz_logo.png';

export class Header extends Component {
    render() {
        return (
            
            <nav class="navbar navbar-light d-flex flex-row justify-content-between align-items-center">
                <div class="logo-content">
                    <img src={logo} class="logo"/>
                    <span class="navbar-brand mb-0 h1">YuvAwaaz</span>
                </div>

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
                    
            </nav>
            
            
        )
    }
}

export default Header

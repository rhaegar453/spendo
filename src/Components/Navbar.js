import React, { Component } from 'react';
import './style.css';
import LightLogo from '../Assets/logo.svg';



const Navbar = () => {
    return (
        <nav class="navbar navbar-light accent">
            <span class="navbar-brand mb-0 h1">
            <img src={LightLogo} alt="Logo"></img>
            </span>
        </nav>
    );
}

export default Navbar;
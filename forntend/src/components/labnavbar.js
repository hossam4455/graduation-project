import React, { Component } from "react";

 class Labnav extends Component{
    render(){
        return(
            <div>
    <header>
        <div className="container">
            <a href="/" className="logo">
                <img src="img/logo.jpeg" alt="Logo" />
            </a>
            <nav>

                <ul>
                    <li><a className="active" href="/HomeLab">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Price">Pricing</a></li>
                    <li><a href="/Alborj">pages</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/Login">login</a></li>
                    <li><a href="/Register">signup</a></li>
                </ul>
            </nav>
        </div>
    </header>
            </div>
        )}}
export default Labnav
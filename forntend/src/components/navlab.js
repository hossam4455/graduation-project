import React, { Component } from "react";
import "./assets/css/style.css";
class NavLab extends Component{
    render(){
        return(
            <div>
<header>
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <a className="navbar-brand" href="/">CMS LAB</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/HomeLab">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#gallery">Our Laboratories</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/LabForm">Make Test</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Register">sign Up</a>
      </li>
    </ul>
  </div>
</nav>

</header>



            </div>
        )}}
export default NavLab
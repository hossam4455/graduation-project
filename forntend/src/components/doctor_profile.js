import React, { Component } from "react";
import Navbar from "./navbar";
class ProfileDoctor extends Component{
    render(){
        return(
            <div>
 <Navbar/>


 <div class="dcontainer">
        <div class="box">
            <div class="images">
                <div class="img-holder active">
                    <img src="img/gad.jpg" alt=""/>
                </div>

            </div>
            <div class="basic-info">
                <h1>Doctor name</h1>
                <div class="rate">
                    <i class="filled fas fa-star"></i>
                    <i class="filled fas fa-star"></i>
                    <i class="filled fas fa-star"></i>
                    <i class="filled fas fa-star"></i>
                    
                </div>
                <span>$250</span>
                <div class="options">
                    <a href="/Appointment">Reserve an appointment</a>
                </div>
            </div>
            <div class="description">
                <p>bio</p>
                <ul class="features">
                    <li><i class="fa-solid fa-circle-check"></i>online</li>
                    <li><i class="fa-solid fa-circle-check"></i>busy</li>
 
                </ul>
                <ul class="social">
                    <li><a href="/"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="/"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="/"><i class="fa-brands fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    </div>

            </div>
        )}}
        export default ProfileDoctor

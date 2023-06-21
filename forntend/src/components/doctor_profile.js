import React, { Component, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useLocation } from "react-router-dom";

const ProfileDoctor = (props) => {
    const location = useLocation(); 
    const { doctor } = location.state;
    console.log(doctor);
    return (
        <div>
            <Navbar />
            <div class="dcontainer">
                <div class="box">
                    <div class="images">
                        <div class="img-holder active">
                        <img
                  
                      alt=""
                      src={doctor.image}
                      onError={e => {
                        e.target.src = doctor.image; // Replace with your fallback image URL
                      }}
                      
                    />
                            <img src="doctor.image" alt="" />
                        </div>
                    </div>
                    <div class="basic-info">
                        <h1>{doctor.doctor_name}</h1>
                        <div class="rate">
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                        </div>
                        <span>${doctor.cost}</span>
                        <div class="options">
                            <a href="/Appointment">Reserve an appointment</a>
                        </div>
                    </div>
                    <div class="description">
                        <p>{doctor.bio}</p>
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
            <Footer />
        </div>
    )
};
export default ProfileDoctor;
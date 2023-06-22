import React, { Component, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import './css/style5.css';
import { useLocation } from "react-router-dom";

const ProfileDoctor = (props) => {
    const location = useLocation(); 
    const { doctor } = location.state;
    console.log(doctor);

    
            return(
                <div>
     <Navbar/>
     <div className="prcontainer">
            <div className="box">
            <img
                      className="img-fluid h-100"
                      alt=""
                      src={doctor.image}
                      onError={e => {
                        e.target.src = doctor.image; // Replace with your fallback image URL
                      }}
                     
                    />
                
                <ul>
                    <li>{doctor.doctor_name}</li>
                    <li>{doctor.department}</li>
                    <br/>
                    <a className="text-body px-2" href="/">
    <i className="fab fa-facebook-f"></i>
</a>
<a className="text-body px-2" href="/">
    <i className="fab fa-twitter"></i>
</a>
<a className="text-body px-2" href="/">
    <i className="fab fa-linkedin-in"></i>
</a>

                     
                      
                </ul>
            </div>
            <div className="About">
                <ul>
                    <h1>about</h1>
                </ul>
                <ul>
                    <h3>Work</h3>
                    <li>Actor</li>
                </ul>
                <ul>
                    <h3>Gender</h3>
                    <li>male</li>
                </ul>
                <ul>
                    <h3>City</h3>
                    <li>{doctor.address}</li>
                </ul>
                <ul>
                    <h3>More Info</h3>
                    <p>{doctor.bio}</p>
                </ul>
                <ul>
                    <h3>Contact</h3>
                    <li>{doctor.email}</li>
                </ul>
            </div>
        </div>
        <Footer/>
    
    </div>
     
            )}

export default ProfileDoctor
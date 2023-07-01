import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import './css/style5.css';
import axios from 'axios';

import { useLocation } from "react-router-dom";

const ProfileDoctor = (props) => {
    const location = useLocation(); 
    const { doctor } = location.state;
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/users/feedbacks/`);
                setFeedbacks(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFeedbacks();
    }, [doctor.id]);

    return (
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
            <div>
                <h3>Feedbacks:</h3>
                <ul>
                {feedbacks
                        .filter(feedback => feedback.doctor === doctor.id)
                        .map(feedback => (
                            <li key={feedback.id} className="feedback-item">
                                <div className="feedback-info">
                                    <span className="patient-name">Patient: {feedback.patient}</span>
                                    <br />
                                    <span className="feedback-text">Feedback: {feedback.comment}</span>
                                    <div className="rating">
                                        <span className="rating-label">Rating:</span>
                                        {Array.from({ length: feedback.rating }).map((_, index) => (
                                            <i key={index} className="fas fa-star star-icon"></i>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
            <Footer/>
        </div>
    );
};

export default ProfileDoctor;

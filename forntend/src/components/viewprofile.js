import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import './css/style5.css';

const ViewProfile = (props) => {
  const [filteredUser, setFilteredUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/register');
        const data = await response.json();
        const userId = localStorage.getItem('id');
        const user = data.find(user => user.id === parseInt(userId));
        if (user) {
          setFilteredUser(user);
          console.log(user);
        } else {
          console.log('User not found');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="prcontainer">
        <div className="box">
          {filteredUser && (
            <img
              className="img-fluid h-100"
              alt=""
              src={filteredUser.image}
              onError={(e) => {
                e.target.src = 'fallback-image-url'; // Replace with your fallback image URL
              }}
            />
          )}

          <ul>
            {filteredUser && (
              <>
                <li>{filteredUser.doctor_name}</li>
                <li>{filteredUser.department}</li>
              </>
            )}
            
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
          <br/>
          <br/>
          <Link to="/DoctorDetails" className="edit-profile-button">
            Edit Profile
          </Link>
        </div>
        <div className="About">
          <ul>
            <h1>about</h1>
          </ul>
          <ul>
            <h3>Work</h3>
            <li>{filteredUser?.role}</li>
          </ul>
          <ul>
            <h3>Gender</h3>
            <li>male</li>
          </ul>
          <ul>
            <h3>City</h3>
            <li>{filteredUser?.address}</li>
          </ul>
          <ul>
            <h3>More Info</h3>
            <p>{filteredUser?.bio}</p>
          </ul>
          <ul>
            <h3>Contact</h3>
            <li>{filteredUser?.email}</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewProfile;

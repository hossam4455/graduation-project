import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './css/css.css';

const UpdateForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
    doctor_name: '',
    department: '',
    cost: '',
    address: '',
    image: null,
  });
  const id = localStorage.getItem('id')
   
  const url="http://127.0.0.1:8000/users/"+id+"/"
  useEffect(() => {
    // Fetch user data and populate the form with existing data
    const fetchUserData = () => {
      // Make a GET request to fetch the user data
      fetch(url, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to fetch user data');
          }
        })
        .then((userData) => {
          // Populate the form fields with the fetched user data
          setFormData({
            username: userData.username,
            email: userData.email,
            password1: '',
            password2: '',
            doctor_name: userData.doctor_name,
            department: userData.department,
            cost: userData.cost,
            address: userData.address,
            bio: userData.bio,
            image: null,
          });
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    };

    fetchUserData();
  }, []); // Run this effect only once, on component mount

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('username', formData.username);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password1', formData.password1);
    formDataToSend.append('password2', formData.password2);
    formDataToSend.append('doctor_name', formData.doctor_name);
    formDataToSend.append('department', formData.department);
    formDataToSend.append('cost', formData.cost);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('image', formData.image);
    formDataToSend.append('bio', formData.bio);

    // Make a PUT request to update the user data

    fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      body: formDataToSend,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to update user data');
        }
      })
      .then((updatedUserData) => {
        console.log('User data updated successfully:', updatedUserData);
        // Handle the updated user data or perform any other actions
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
        // Handle the error
      });
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit} className="formone">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <label>Password:</label>
        <input
          type="password"
          name="password1"
          value={formData.password1}
          onChange={handleChange}
          placeholder="Password"
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <label>Doctor Name:</label>
        <input
          type="text"
          name="doctor_name"
          value={formData.doctor_name}
          onChange={handleChange}
          placeholder="Doctor Name"
        />
        <label>Department:</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          placeholder="Department"
        />
        <label>Cost:</label>
        <input
          type="number"
          name="cost"
          value={formData.cost}
          onChange={handleChange}
          placeholder="Cost"
        />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <label>Bio:</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Bio"
        />
        <label>Image:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>

      <Footer />
    </div>
  );
};

export default UpdateForm;

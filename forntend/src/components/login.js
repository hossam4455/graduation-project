import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './css/css.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    doctor_name: '',
    department: '',
    cost: '',
    address: '',
    image: null,
  });

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

  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = {
      username: formData.username,
      password: formData.password,
    };
    const isUserSignedIn = () => {
      const token = localStorage.getItem('token');
      return !!token; // Returns true if token exists, false otherwise
    };
    
    // Example usage
    if (isUserSignedIn()) {
      // User is signed in
      console.log('User is signed in');
    } else {
      // User is not signed in
      console.log('User is not signed in');
    }
    

    fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Retrieve the token from the response
        const token = data.token;
        console.log(token);
        localStorage.setItem('token', token);

        // You can save the token in local storage or state for future use
        // For example: localStorage.setItem('token', token);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // The remaining code for submitting the form and creating a doctor

    // ...

  };

  return (
    <div>
      <Navbar />
<div className='scontainer'>
  <div className='sform-container'>
      <form onSubmit={handleLogin} className='formone'>
        <h2>Login</h2>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>

      {/* The remaining code for the doctor form */}
      {/* ... */}
      
      <Footer />
    </div>
    </div>
    </div>
  );
};

export default MyForm;
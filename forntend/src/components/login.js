import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './css/css.css';
import { useNavigate } from 'react-router-dom';

const MyForm = () => {
  const navigate = useNavigate();
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
  const [result, setResult] = useState('');

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
        const id = data.user.id;
        const email = data.user.email;
        console.log(token);
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        localStorage.setItem('email', email);

        setResult('User is signed in');
        navigate('/');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
        setResult('Login failed');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // The remaining code for submitting the form and creating a doctor

    // ...

    setResult('Form submitted successfully');
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleLogin} className='formone'>
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

      <p>{result}</p>

      <Footer />
    </div>
  );
};

export default MyForm;

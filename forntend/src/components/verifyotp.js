import React, { useState } from 'react';
import  './css/verifyotp.css';
import Navbar from "./navbar";
import Footer from "./footer";
const VerificationPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform the POST request to the verification endpoint
    try {
      const response = await fetch('http://127.0.0.1:8000/api/verify/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      // Handle the response
      if (response.ok) {
        // Verification successful
        const data = await response.json();
        console.log(data);
      } else {
        // Verification failed
        const error = await response.json();
        console.log(error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="verification-container">
      <h1>Account Verification</h1>
      <form onSubmit={handleSubmit} className="verification-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="verification-input"
          />
        </label>
        <br />
        <label>
          OTP:
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="verification-input"
          />
        </label>
        <br />
        <button type="submit" className="verification-button">
          Verify
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default VerificationPage;

import React, { useState } from 'react';
import axios from 'axios';
import PharmNav2 from './pharmNav2';
import Footer from './footer';

const Card = () => {
  const [prescription, setPrescription] = useState('');
  const [patient, setPatient] = useState('');
  const [response, setResponse] = useState('');
  const [isError, setIsError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Retrieve doctor ID from localStorage
      const doctorId = localStorage.getItem('id');

      const response = await axios.post('http://127.0.0.1:8000/users/buy/', {
        prescription,
        doctor: doctorId,
        patient,
      });

      console.log(response.data); // Optional: Handle the response

      // Store the response data
      setResponse(response.data);

      // Reset the form fields
      setPrescription('');
      setPatient('');
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  return (
    <div>
      <PharmNav2 />
      <h1>Buy Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="prescription">Prescription:</label>
          <textarea
            id="prescription"
            value={prescription}
            onChange={(e) => setPrescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="patient">Patient:</label>
          <input
            type="text"
            id="patient"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div style={{ backgroundColor: '#f5f5f5', padding: '10px' }}>
        <h3>Response:</h3>
        {isError ? (
          <pre>Failure</pre>
        ) : (
          response && <pre>Success</pre>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Card;

import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';

const CreateAppointment = () => {
  const storedUserId = localStorage.getItem('id');
  const [formData, setFormData] = useState({
    doctor: '',
    patient: storedUserId,
    appointment_datetime: ''
  });

  const [doctors, setDoctors] = useState([]);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/register');
        const filteredDoctors = response.data.filter(doctor => doctor.role === 'doctor');
        setDoctors(filteredDoctors);
      } catch (error) {
        setError('Failed to fetch doctors.');
      }
    };

    fetchDoctors();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/appointments/approvement/', formData)
      .then(response => {
        setResponse(response.data);
      })
      .catch(error => {
        setError('Failed to create appointment.');
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar/>
      
      <form onSubmit={handleSubmit} className='appointment'>
        <h1>Create Appointment</h1>
      
        <label htmlFor="doctor">Doctor:</label>
        <select id="doctor" name="doctor" onChange={handleInputChange}>
          <option value="">Select a doctor</option>
          {doctors.map(doctor => (
            <option key={doctor.id} value={doctor.id}>{doctor.doctor_name}</option>
          ))}
        </select>

        <label htmlFor="appointment_datetime">Appointment Date and Time:</label>
        <input type="datetime-local" id="appointment_datetime" name="appointment_datetime" onChange={handleInputChange} />

        <button type="submit">Create</button>
      </form>

      {response && (
        <div style={styles.responseContainer}>
          <h3>Response:</h3>
          <p style={styles.responseMessage}>Message: Successful</p>
          <p style={styles.responseMessage}>appointment_datetime: {response.appointment_datetime}</p>
          {/* Access other properties from the response as needed */}
        </div>
      )}

      {error && <p style={styles.errorMessage}>Error: {error}</p>}

      <Footer/>
    </div>
  );
};

const styles = {
  responseContainer: {
    margin: '10px 0',
  },
  responseMessage: {
    padding: '10px',
    backgroundColor: '#f2f2f2',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  errorMessage: {
    color: 'red',
  },
};

export default CreateAppointment;

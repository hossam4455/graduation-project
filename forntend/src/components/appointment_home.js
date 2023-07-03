import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';

const CreateAppointment2 = () => {
  const storedUserId = localStorage.getItem('id');
  const [formData, setFormData] = useState({
    doctor: '',
    patient: storedUserId,
    appointment_datetime: ''
  });

  const [doctors, setDoctors] = useState([]);
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
    fetch('http://127.0.0.1:8000/appointments/approvement/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data as needed
        console.log(data);
      })
      .catch(error => {
        // Handle the error
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

        {/* <label htmlFor="patient">Patient:</label>
        <select id="patient" name="patient" onChange={handleInputChange}>
          <option value="">Select a patient</option>
          {patients.map(patient => (
            <option key={patient.id} value={patient.id}>{patient.doctor_name}</option>
          ))}
        </select> */}

        <label htmlFor="appointment_datetime">Appointment Date and Time:</label>
        <input type="datetime-local" id="appointment_datetime" name="appointment_datetime" onChange={handleInputChange} />

        <button type="submit">Create</button>
      </form>
      <Footer/>
    </div>
  );
};

export default CreateAppointment2;



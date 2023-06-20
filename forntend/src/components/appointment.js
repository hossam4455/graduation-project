import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
const CreateAppointment = () => {
    const storedUserId = localStorage.getItem('id');
  const [formData, setFormData] = useState({
    doctor: '',
    patient: storedUserId,
    appointment_datetime: ''
  });

  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/register')
      .then(response => response.json())
      .then(data => {
        setDoctors(data);
      })
      .catch(error => {
        console.error(error);
      });

    fetch('http://127.0.0.1:8000/api/register')
      .then(response => response.json())
      .then(data => {
        setPatients(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/appointments/appointments/', {
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

export default CreateAppointment;

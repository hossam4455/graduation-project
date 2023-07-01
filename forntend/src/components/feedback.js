import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/feedback.css';
import Navbar from "./navbar";
import Footer from "./footer";
const FeedbackForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [patientId, setPatientId] = useState('');

  useEffect(() => {
    // Retrieve the patient ID from local storage when the component mounts
    const storedPatientId = localStorage.getItem('id');
    setPatientId(storedPatientId);

    // Fetch the list of doctors with role "doctor"
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/register');
        const filteredDoctors = response.data.filter((doctor) => doctor.role === 'doctor');
        setDoctors(filteredDoctors);
      } catch (error) {
        setError('Failed to fetch doctors.');
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/users/feedbacks/', {
        doctor: parseInt(selectedDoctor),
        patient: parseInt(patientId),
        rating: parseInt(rating),
        comment: comment,
      });
      setSuccess(true);
      setSelectedDoctor('');
      setRating('');
      setComment('');
    } catch (error) {
      setError('Failed to submit feedback.');
    }
  };

  return (
    <div>
           <Navbar/>
      <h1>Give Feedback</h1>
      {success && <p>Feedback submitted successfully!</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Select Doctor:
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="doctor-select"
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.doctor_name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Rating:
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <br />
        <label>
          Comment:
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <Footer/>
    </div>
  );
};

export default FeedbackForm;

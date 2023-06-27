import React, { useState } from 'react';
import axios from 'axios';
import './css/feedback.css';

const FeedbackForm = () => {
  const [doctorId, setDoctorId] = useState('');
  const [patientId, setPatientId] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/users/feedbacks/', {
        doctor: parseInt(doctorId),
        patient: parseInt(patientId),
        rating: parseInt(rating),
        comment: comment,
      });
      setSuccess(true);
      setDoctorId('');
      setPatientId('');
      setRating('');
      setComment('');
    } catch (error) {
      setError('Failed to submit feedback.');
    }
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      {success && <p>Feedback submitted successfully!</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Doctor ID:
          <input type="number" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} />
        </label>
        <br />
        <label>
          Patient ID:
          <input type="number" value={patientId} onChange={(e) => setPatientId(e.target.value)} />
        </label>
        <br />
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
    </div>
  );
};

export default FeedbackForm;

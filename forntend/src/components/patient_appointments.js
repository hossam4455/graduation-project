import React, { useState, useEffect } from 'react';
import './css/PatientAppointments.css';
import Navbar from './navbar';
import Footer from './footer';

const userId = localStorage.getItem('id');

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [users, setUsers] = useState([]);
  const [showAllAppointments, setShowAllAppointments] = useState(false);
  const [appointmentId, setAppointmentId] = useState(0); // Initialize appointmentId state
  const [searchQuery, setSearchQuery] = useState('');
  const Delet = (appointmentId) => { // Pass appointmentId as a parameter
    // Get the token from localStorage
    const token = localStorage.getItem('token');
    
    fetch(`http://127.0.0.1:8000/appointments/appointments/${appointmentId}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`  // Include the token in the headers
      },
    })
      .then(response => {
        if (response.ok) {
          // Handle successful deletion
          console.log('Appointment deleted successfully');
        } else {
          // Handle deletion error
          console.error('Failed to delete appointment');
        }
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
      window.location.reload();
  };

  useEffect(() => {
    // Fetch patient's appointments from the backend or API
    fetch('http://127.0.0.1:8000/appointments/appointments/')
      .then(response => response.json())
      .then(data => {
        setAppointments(data);
      })
      .catch(error => {
        console.error(error);
      });

    // Fetch user data from the backend API
    fetch('http://127.0.0.1:8000/api/register')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const toggleShowAllAppointments = () => {
    setShowAllAppointments(prevState => !prevState);
  };
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="patient-appointments">
        <h2 className="title">User List</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by doctor name"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {users.length === 0 ? (
          <p className="error">No users found.</p>
        ) : (
          <ul className="appointments-list">
            {users.map(user => (
              <li key={user.id}>
                <ul className="user-appointments">
                  {appointments.filter(appointment =>
                    appointment.doctor === parseInt(userId)&&
                    appointment.patient ===user.id   &&
                    (showAllAppointments || appointments.indexOf(appointment) < 4) &&
                    user.doctor_name.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by doctor name
                  ).map(appointment => (
                    <li key={appointment.id} className="appointment">
                      <p className="date">Date & Time: {appointment.appointment_datetime}</p>
                      <p className="name">Patient ID: { appointment.patient}</p>
                   
                      <button className="delete-button" onClick={() => Delet(appointment.id)}>Delete</button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
        {appointments.length > 4 && (
          <button className="show-more-button" onClick={toggleShowAllAppointments}>
            {showAllAppointments ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DoctorAppointments;
import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './css/css.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
    doctor_name: '',
    department: '',
    cost: '',
    address: '',

    image: null,
    role: 'doctor',
    bio:'',
  });
  const [response, setResponse] = useState(null);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const formDataToSend = new FormData();
    formDataToSend.append('username', formData.username);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password1', formData.password1);
    formDataToSend.append('password2', formData.password2);
    formDataToSend.append('doctor_name', formData.doctor_name);
    formDataToSend.append('department', formData.department);
    formDataToSend.append('cost', formData.cost);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('image', formData.image);
    formDataToSend.append('role', formData.role);
    formDataToSend.append('bio', formData.bio);
    fetch('http://127.0.0.1:8000/api/registerotp', {
      method: 'POST',
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResponse(data);
        
     
         
      
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const redirectToVerificationPage = () => {
    window.location.href = '/VerificationPage';
    }
    const handleButtonClick = (e) => {
      e.preventDefault();
      handleSubmit(e); // Call the first function and pass the event object
     
    };
  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit} className='formone'>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <label>Password:</label>
        <input
          type="password"
          name="password1"
          value={formData.password1}
          onChange={handleChange}
          placeholder="Password"
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
             <label>Name:</label>
      <input
        type="text"
        name="doctor_name"
        value={formData.doctor_name}
        onChange={handleChange}
        placeholder="Name"
      />
      <label>Department:</label>
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
      />
      <label>Cost:</label>
      <input
        type="text"
        name="cost"
        value={formData.cost}
        onChange={handleChange}
        placeholder="Cost"
      />
      <label>Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
      />
       <label>bio:</label>
          <input
        type="text"
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        placeholder="bio"
      />
   

       
      <label>Uplode Image:</label>
      <input
        type="file" // Set the input type to 'file'
        name="image"
        onChange={handleChange}
      />
      <br/>
      <button type="submit" onClick={handleButtonClick}>
  Add Doctor
</button> 
<button type="submit" onClick={redirectToVerificationPage}>
Verification
</button> 

    
    </form>
    {response && (
          <div style={styles.responseContainer}>
            <h3 style={styles.responseTitle}>Response :</h3>
            <p>Message: {response.message}</p>
            <p>Username: {response.data.username}</p>
            <p>Email: {response.data.email}</p>
            <p>image: {response.data.image}</p>
            <p>address: {response.data.address}</p>
            {/* Access other properties as needed */}
          </div>
        )}
    <Footer/>
    </div>
  );
};
const styles = {
  responseContainer: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f2f2f2',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  responseTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
};
export default MyForm;
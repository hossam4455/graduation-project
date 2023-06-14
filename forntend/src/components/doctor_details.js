import React, { useState } from 'react';
<<<<<<< HEAD

const MyForm = () => {
  const [formData, setFormData] = useState({
    doctor_name: '',
    department: '',
    cost: '',
    address: '',
    image: null, // Added image field
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0], // Assign the selected file to the image field
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

    const formDataToSend = new FormData(); // Create a FormData object
    formDataToSend.append('doctor_name', formData.doctor_name);
    formDataToSend.append('department', formData.department);
    formDataToSend.append('cost', formData.cost);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('image', formData.image); // Append the image file to the FormData

=======
import Navbar from './navbar';
import Footer from './footer';
import './css/css.css';
const MyForm = () => {
  const [formData, setFormData] = useState({
    doctor_name: '',
    department: '',
    cost: '',
    address: '',
    image: null, // Added image field
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0], // Assign the selected file to the image field
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

    const formDataToSend = new FormData(); // Create a FormData object
    formDataToSend.append('doctor_name', formData.doctor_name);
    formDataToSend.append('department', formData.department);
    formDataToSend.append('cost', formData.cost);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('image', formData.image); // Append the image file to the FormData

>>>>>>> fd4e4d9e899c60ff5a92c5bfe107e8c63e7f4332
    fetch('http://127.0.0.1:8000/doctor/create/', {
      method: 'POST',
      body: formDataToSend, // Send the FormData object as the request body
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response data
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };
<<<<<<< HEAD

  return (
    <form onSubmit={handleSubmit}>
=======
 
  return (
    <div>
   <Navbar />
 
    <form onSubmit={handleSubmit} className='formone'>
      <label>Name:</label>
>>>>>>> fd4e4d9e899c60ff5a92c5bfe107e8c63e7f4332
      <input
        type="text"
        name="doctor_name"
        value={formData.doctor_name}
        onChange={handleChange}
        placeholder="Name"
      />
<<<<<<< HEAD
=======
      <label>Department:</label>
>>>>>>> fd4e4d9e899c60ff5a92c5bfe107e8c63e7f4332
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
      />
<<<<<<< HEAD
=======
      <label>Cost:</label>
>>>>>>> fd4e4d9e899c60ff5a92c5bfe107e8c63e7f4332
      <input
        type="text"
        name="cost"
        value={formData.cost}
        onChange={handleChange}
        placeholder="Cost"
      />
<<<<<<< HEAD
=======
      <label>Address:</label>
>>>>>>> fd4e4d9e899c60ff5a92c5bfe107e8c63e7f4332
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
      />
<<<<<<< HEAD
=======
      <label>Uplode Image:</label>
>>>>>>> fd4e4d9e899c60ff5a92c5bfe107e8c63e7f4332
      <input
        type="file" // Set the input type to 'file'
        name="image"
        onChange={handleChange}
      />
<<<<<<< HEAD
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
=======
      <br/>
      <button type="submit">Add Doctor</button>
    </form>
    <Footer/>
    </div>
  );
};

export default MyForm;
>>>>>>> fd4e4d9e899c60ff5a92c5bfe107e8c63e7f4332

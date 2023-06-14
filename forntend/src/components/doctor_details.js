import React, { useState } from 'react';

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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="doctor_name"
        value={formData.doctor_name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
      />
      <input
        type="text"
        name="cost"
        value={formData.cost}
        onChange={handleChange}
        placeholder="Cost"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        type="file" // Set the input type to 'file'
        name="image"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;

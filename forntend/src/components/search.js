import React, { useEffect, useState } from 'react';
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from 'react-router-dom';
import ProfileDoctor from './doctor_profile';
import { useNavigate } from 'react-router-dom'

const Team = () => {
  const navigate = useNavigate();
  const navigateDoctorProfile = (doctor) => {
    navigate('/ProfileDoctor', { state: { doctor: doctor } });
  }

  const [doctorsData, setDoctorsData] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    // Fetch the doctors data from the API
    fetch('http://127.0.0.1:8000/api/register')
      .then(response => response.json())
      .then(data => setDoctorsData(data))
      .catch(error => console.log(error));
  }, []);

  if (doctorsData.length === 0) {
    return <div>Loading...</div>;
  }

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleAddressChange = (e) => {
    setSelectedAddress(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  const filteredDoctors = doctorsData.filter(doctor => {
    if (selectedDepartment && selectedAddress && searchName) {
      return (
        doctor.department === selectedDepartment &&
        doctor.address === selectedAddress &&
        doctor.doctor_name.toLowerCase().includes(searchName.toLowerCase())
      );
    } else if (selectedDepartment && selectedAddress) {
      return (
        doctor.department === selectedDepartment &&
        doctor.address === selectedAddress
      );
    } else if (selectedDepartment && searchName) {
      return (
        doctor.department === selectedDepartment &&
        doctor.doctor_name.toLowerCase().includes(searchName.toLowerCase())
      );
    } else if (selectedAddress && searchName) {
      return (
        doctor.address === selectedAddress &&
        doctor.doctor_name.toLowerCase().includes(searchName.toLowerCase())
      );
    } else if (selectedDepartment) {
      return doctor.department === selectedDepartment;
    } else if (selectedAddress) {
      return doctor.address === selectedAddress;
    } else if (searchName) {
      return doctor.doctor_name.toLowerCase().includes(searchName.toLowerCase());
    }
    return true;
  });
  const handleViewProfile = (doctorName) => {

    navigate(`/ProfileDoctor/${doctorName}`);
  };
  return (
    <div>
      <Navbar />
      {/* Your existing code */}
      <div className="mx-auto" style={{ width: "100%", maxWidth: "600px" }}>
        <div className="input-group">
          <select
            className="form-select border-primary w-25"
            style={{ height: "60px" }}
            value={selectedDepartment}
            onChange={handleDepartmentChange}
          >
            <option value="">Department</option>
            <option value="dentis">dentis</option>
            <option value="Department 2">Department 2</option>
            <option value="Department 3">Department 3</option>
          </select>
          <select
            className="form-select border-primary w-25"
            style={{ height: "60px" }}
            value={selectedAddress}
            onChange={handleAddressChange}
          >
            <option value="">Address</option>
            <option value="Assiut">Assiut</option>
            <option value="Address 2">Address 2</option>
            <option value="Address 3">Address 3</option>
          </select>
          <input
            type="text"
            className="form-control border-primary w-50"
            placeholder="Doctor Name"
            style={{ height: "60px" }}
            value={searchName}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            {filteredDoctors.map(doctor => (
              
              <div key={doctor.id} className="col-lg-6 team-item">
                <div className="row g-0 bg-light rounded overflow-hidden">
                  <div className="col-12 col-sm-5 h-100">
                    <img
                      className="img-fluid h-100"
                      alt=""
                      src={doctor.image}
                      onError={e => {
                        e.target.src = doctor.image; // Replace with your fallback image URL
                      }}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                    <div className="mt-auto p-4">
                   
                 
                    <h3 onClick={
                        () => navigateDoctorProfile(doctor)
                      } style={{ cursor: 'pointer' }}>
                        {doctor.doctor_name}
                      </h3>

                      <h6 className="fw-normal fst-italic text-primary mb-4">{doctor.department}</h6>
                      <p className="m-0"></p>
                    </div>
                    <div className="d-flex mt-auto border-top p-4">
                      <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/Search">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/Search">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="/Search">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/PrescriptionList.css';
import Navbar from "./navbar";
import Footer from "./footer";

const PrescriptionList = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const patientId = localStorage.getItem('id');
  const role = localStorage.getItem('role');

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/users/buy/');
        setPrescriptions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrescriptions();
  }, []);

  const filteredPrescriptions = prescriptions.filter((prescription) => {
    if (role === 'patient') {
      return prescription.patient === parseInt(patientId);
    } else if (role === 'doctor') {
      return prescription.doctor === parseInt(patientId);
    }
    return false;
  });

  return (
    <div>
      <Navbar />
      <div className="prescription-list">
        <h1 className="prescription-list__heading">Prescription List</h1>
        <ul className="prescription-list__list">
          {filteredPrescriptions.map((prescription) => (
            <li key={prescription.id} className="prescription-list__item">
              <div className="prescription-list__content">
                <pre className="prescription-list__textarea">{prescription.prescription}</pre>
                <div className="prescription-list__role">
                  {role === 'patient' ? 'Doctor':'Patient'  }: {role === 'patient' ?prescription.patient :prescription.doctor  }
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default PrescriptionList;

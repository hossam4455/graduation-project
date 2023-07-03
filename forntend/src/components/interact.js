import React, { useState, useEffect } from "react";
import './css/interact.css';
import Navbar from "./navbar";
import Footer from "./footer";
const QuestionForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedPatient, setSelectedPatient] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [questions, setQuestions] = useState([]);
  const [replyText, setReplyText] = useState("");

  const role = localStorage.getItem("role");
  const id =localStorage.getItem("id");
  useEffect(() => {
    // Fetch all data from the API
    fetch("http://127.0.0.1:8000/api/register")
      .then((response) => response.json())
      .then((data) => {
        // Filter the data based on the user's role and set it in the respective state variable
   
          const filteredDoctors = data.filter((item) => item.role === "doctor");
          setDoctors(filteredDoctors);
        
          const filteredPatients = data.filter((item) => item.role === "patient");
          setPatients(filteredPatients);
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [role]);

  useEffect(() => {
    // Fetch questions from the API
    fetch("http://127.0.0.1:8000/users/api/questions/")
      .then((response) => response.json())
      .then((data) => {
        // Set the questions in the state
        setQuestions(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

 
  const handleQuestionSubmit = (e) => {
    e.preventDefault();

    // Create an object with the question data
    let questionData;
    if (role === "patient") {
      questionData = {
        question_text: questionText,
        doctor: selectedDoctor,
        patient: parseInt(id),};
    } else if (role === "doctor") {
     
      questionData = {
        question_text: questionText,
        doctor: parseInt(id),
        patient: selectedPatient,
      }; 
    }
    console.log(questionData)
  
    // Send the question data to the server using an API request
    fetch("http://127.0.0.1:8000/users/api/questions/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questionData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data); // You can update the UI or perform any other actions here

        // Clear the form fields
        setQuestionText("");
        setSelectedDoctor("");
        setSelectedPatient("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleReplySubmit = (questionId) => {
    // Check if the reply text is empty
    if (!replyText) {
      console.error("Reply text is required.");
      return;
    }
  
    // Find the question being replied to
    const question = questions.find((question) => question.id === questionId);
  
    // Create an object with the reply data, including the doctorId and patientId from the question
    const replyData = {
      answer_text: replyText,
      doctor: parseInt(question.doctor),
      patient: parseInt(question.patient),
      question_text:question.question_text,
      is_answered:true,
    };
    console.log(replyData)
  
    // Send the reply data to the server using an API request
    fetch(`http://127.0.0.1:8000/users/api/questions/${questionId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(replyData),
    })
      .then((response) => {
        // Check if the request was successful
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to submit reply. Status: " + response.status);
        }
      })
      .then((data) => {
        // Handle the response from the server
        console.log(data); // You can update the UI or perform any other actions here
  
        // Update the questions list to reflect the new reply
        const updatedQuestions = questions.map((question) => {
          if (question.id === questionId) {
            return {
              ...question,
              answer_text: replyText,
            };
          }
          console.log(question);
          return question;
        });
  
        setQuestions(updatedQuestions);
        setReplyText(""); // Clear the reply text after submitting
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleReplyDelete = (questionId) => {
    // Send the delete request to the server using an API request
    fetch(`http://127.0.0.1:8000/users/api/questions/${questionId}/`, {
      method: "DELETE",
    })
      .then((response) => {
        // Check if the request was successful
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to delete reply. Status: " + response.status);
        }
      })
      .then((data) => {
        // Handle the response from the server
        console.log(data); // You can update the UI or perform any other actions here

        // Update the questions list to remove the deleted question
        const updatedQuestions = questions.filter(
          (question) => question.id !== questionId
        );

        setQuestions(updatedQuestions);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const groupQuestionsByPatient = () => {
    const groupedQuestions = {};
    questions.forEach((question) => {
      if (!groupedQuestions[question.patient]) {
        groupedQuestions[question.patient] = [];
      }
      groupedQuestions[question.patient].push(question);
    });
    return groupedQuestions;
  };
//  fetch("http://127.0.0.1:8000/users/api/questions/")
//         .then((response) => response.json())
//         .then((data) => {
//           // Filter the questions based on doctorId
//           const filteredQuestions = data.filter((question) => question.doctor === parseInt(id));
      
//           // Print the filtered questions
//           console.log(filteredQuestions);
//         })
//         .catch((error) => {
//           // Handle any errors
//           console.error(error);
//         });
 const filteredQuestions = questions.filter((question) => question.doctor === parseInt(id));
 const patient = questions.filter((question) => question.patient === parseInt(id));
const renderQuestionList = () => {
  const groupedQuestions = groupQuestionsByPatient();
  const id = localStorage.getItem("id");
  const userRole = localStorage.getItem("role");
 
  console.log(id);

  const filteredQuestions = questions.filter((question) => question.doctor === parseInt(id));
const patient = questions.filter((question) => question.patient === parseInt(id));

return (
  <>
    {patient.map((question) => (
      <div key={question.id} className="patient-box">
        <h3>Patient: {question.patient}</h3>
        <ul className="question-list">
          <li key={question.id} className="question-item">
            <span className="question">Question: {question.question_text}</span>
            <br />
            <span className="answer">
              Answer: {question.answer_text || "Not answered"}
            </span>
            {!question.is_answered && (
              <div className="reply-container">
                <input
                  type="text"
                  placeholder="Your reply"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => handleReplySubmit(question.id)}
                >
                  Submit Reply
                </button>
              </div>
            )}
            {question.is_answered &&  (
              <div className="reply-container">
                <input
                  type="text"
                  placeholder="Edit your reply"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => handleReplySubmit(question.id)}
                >
                  Edit Reply
                </button>
                <button
                  type="button"
                  onClick={() => handleReplyDelete(question.id)}
                >
                  Delete Reply
                </button>
              </div>
            )}
            <div>
              <span className="timestamp">Created At: {question.created_at}</span>
              <br />
              <span className="timestamp">Updated At: {question.updated_at}</span>
            </div>
          </li>
        </ul>
      </div>
    ))}

    {filteredQuestions.map((question) => (
      <div key={question.id} className="patient-box">
        <h3>Patient: {question.patient}</h3>
        <ul className="question-list">
          <li key={question.id} className="question-item">
            <span className="question">Question: {question.question_text}</span>
            <br />
            <span className="answer">
              Answer: {question.answer_text || "Not answered"}
            </span>
            {!question.is_answered && id !== question.patient && (
              <div className="reply-container">
                <input
                  type="text"
                  placeholder="Your reply"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => handleReplySubmit(question.id)}
                >
                  Submit Reply
                </button>
              </div>
            )}
            {question.is_answered && id !== question.patient && (
              <div className="reply-container">
                <input
                  type="text"
                  placeholder="Edit your reply"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => handleReplySubmit(question.id)}
                >
                  Edit Reply
                </button>
                <button
                  type="button"
                  onClick={() => handleReplyDelete(question.id)}
                >
                  Delete Reply
                </button>
              </div>
            )}
            <div>
              <span className="timestamp">Created At: {question.created_at}</span>
              <br />
              <span className="timestamp">Updated At: {question.updated_at}</span>
            </div>
          </li>
        </ul>
      </div>
    ))}
  </>
);
};
return (
  <div>
    <Navbar />
    <h2>Send a Question</h2>
    
    {role === "patient" ? (
      <form onSubmit={handleQuestionSubmit}>
        <label>
          Question Text:
          <input
            type="text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
        </label>
        <br />
        <label>
          Doctor:
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.doctor_name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <input type="hidden" value={selectedPatient} />
        <button type="submit" disabled={!selectedDoctor}>
          Send Question
        </button>
      </form>
    ) : (
      <form onSubmit={handleQuestionSubmit}>
        <label>
          Question Text:
          <input
            type="text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
        </label>
        <br />
        <input type="hidden" value={selectedDoctor} />
        <label>
          Patient:
          <select
            value={selectedPatient}
            onChange={(e) => setSelectedPatient(e.target.value)}
          >
            <option value="">Select a patient</option>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.doctor_name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit" disabled={!selectedPatient}>
          Send Question
        </button>
      </form>
    )}
    
    <h2>Questions</h2>
    {renderQuestionList()}
    <Footer />
  </div>
);
};
export default QuestionForm;

import React, { Component } from "react";
import "../components/assets/css/style.css";
import NavLab from "./navlab";

class LabForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Access form data using the event.target object
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobileNumber = event.target.mobileNumber.value;
    const message = event.target.message.value;

    // You can now use the captured form data for further processing (e.g., sending it to an API)

    // Example: Log the form data to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile Number:", mobileNumber);
    console.log("Message:", message);

    // Reset the form inputs after submission if needed
    event.target.reset();
  };

  render() {
    return (
      <div>
        <NavLab />
        <section id="contact" className="contact-us-single">
          <div className="row no-margin">
            <div className="col-sm-6 cop-ck">
              <form onSubmit={this.handleSubmit}>
                <div className="row cf-ro">
                  <div className="col-sm-3">
                    <label>Enter Name :</label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      className="form-control input-sm"
                    />
                  </div>
                </div>
                <div className="row cf-ro">
                  <div className="col-sm-3">
                    <label>Email Address :</label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Email Address"
                      className="form-control input-sm"
                    />
                  </div>
                </div>
                <div className="row cf-ro">
                  <div className="col-sm-3">
                    <label>Mobile Number:</label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      name="mobileNumber"
                      placeholder="Enter Mobile Number"
                      className="form-control input-sm"
                    />
                  </div>
                </div>
                <div className="row cf-ro">
                  <div className="col-sm-3">
                    <label>Enter Message:</label>
                  </div>
                  <div className="col-sm-8">
                    <textarea
                      rows="5"
                      name="message"
                      placeholder="Enter Your Message"
                      className="form-control input-sm"
                    ></textarea>
                  </div>
                </div>
                <div className="row cf-ro">
                  <div className="col-sm-3">
                    <label></label>
                  </div>
                  <div className="col-sm-8">
                    <button className="btn btn-info btn-sm" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LabForm;

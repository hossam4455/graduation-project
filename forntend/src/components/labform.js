import React, { Component } from "react";

import "../components/assets/css/style.css"
import NavLab from "./navlab";
class LabForm extends Component{
    render(){
        return(
            <div>
                <NavLab />
                <section id="contact" className="contact-us-single">
        <div className="row no-margin">
            
            <div className="col-sm-6 cop-ck">
               
                <div className="row cf-ro">
                    <div className="col-sm-3"><label>Enter Name :</label></div>
                    <div className="col-sm-8"><input type="text" placeholder="Enter Name" name="name" className="form-control input-sm"/></div>
                </div>
                <div className="row cf-ro">
                    <div className="col-sm-3"><label>Email Address :</label></div>
                    <div className="col-sm-8"><input type="text" name="name" placeholder="Enter Email Address" className="form-control input-sm"/></div>
                </div>
                <div className="row cf-ro">
                    <div className="col-sm-3"><label>Mobile Number:</label></div>
                    <div className="col-sm-8"><input type="text" name="name" placeholder="Enter Mobile Number" className="form-control input-sm"/></div>
                </div>
                <div className="row cf-ro">
                    <div className="col-sm-3"><label>Enter Message:</label></div>
                    <div className="col-sm-8">
                        <textarea rows="5" placeholder="Enter Your Message" className="form-control input-sm"></textarea>
                    </div>
                </div>
                <div className="row cf-ro">
                    <div className="col-sm-3"><label></label></div>
                    <div className="col-sm-8">
                        <button className="btn btn-info btn-sm">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </section>


            </div>
        )}}
        export default LabForm
import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
 class Testimonial extends Component{
    render(){
        return(
            <div>

<Navbar/>

   {/*  <!-- Navbar End -->



    <!-- Testimonial Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Testimonial</h5>
                <h1 className="display-4">Patients Say About Our Services</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-1.jpg" alt=""/>
                                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: "60px", height: "60px"}}>
                                    <i className="fa fa-quote-left fa-2x text-primary"></i>
                                </div>
                            </div>
                            <p className="fs-4 fw-normal"></p>
                            <hr className="w-25 mx-auto"/>
                            <h3>Patient Name</h3>
                            <h6 className="fw-normal text-primary mb-3">Profession</h6>
                        </div>
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-2.jpg" alt=""/>
                                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: "60px", height: "60px"}}>
                                    <i className="fa fa-quote-left fa-2x text-primary"></i>
                                </div>
                            </div>
                            <p className="fs-4 fw-normal"></p>
                            <hr className="w-25 mx-auto"/>
                            <h3>Patient Name</h3>
                            <h6 className="fw-normal text-primary mb-3">Profession</h6>
                        </div>
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-3.jpg" alt=""/>
                                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: "60px", height: "60px"}}>
                                    <i className="fa fa-quote-left fa-2x text-primary"></i>
                                </div>
                            </div>
                            <p className="fs-4 fw-normal"></p>
                            <hr className="w-25 mx-auto"/>
                            <h3>Patient Name</h3>
                            <h6 className="fw-normal text-primary mb-3">Profession</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End -->


    <!-- Footer Start --> */}
<Footer/>

            </div>
        )}
 }
 export default Testimonial
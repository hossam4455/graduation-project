import React, { Component } from "react";
 class Service extends Component{
    render(){
        return(
            <div>
{/* <!-- Topbar Start --> */}
    <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-decoration-none text-body pe-3" href="/"><i className="bi bi-telephone me-2"></i>+0111 054 3007</a>
                        <span className="text-body">|</span>
                        <a className="text-decoration-none text-body px-3" href="/"><i className="bi bi-envelope me-2"></i>Gad@gmail.com</a>
                    </div>
                </div>
                <div className="col-md-6 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-body px-2" href="/">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="text-body px-2" href="/">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="text-body px-2" href="/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="text-body px-2" href="/">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="text-body ps-2" href="/">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  {/*   <!-- Topbar End -->


    <!-- Navbar Start --> */}
    <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                <a href="/Home" className="navbar-brand">
                    <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>CMS</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="/" className="nav-item nav-link active">Home</a>
                        <a href="/About" className="nav-item nav-link">About</a>
                        <a href="/Service" className="nav-item nav-link">Service</a>
                        <a href="/Price" className="nav-item nav-link">Pricing</a>
                        <div className="nav-item dropdown">
                            <a href="/Service" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="/Team" className="dropdown-item">The Team</a>
                                <a href="/Testimonial" className="dropdown-item">The Patients Reviews</a>
                                <a href="/Appointment" className="dropdown-item">Appointment</a>
                                <a href="/Search" className="dropdown-item">Search</a>
                            </div>
                        </div>
                        <a href="/Contact" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
   {/*  <!-- Navbar End -->

    

<!-- Services Start --> */}
<div className="container-fluid py-5">
    <div className="container">
        <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>
            <h1 className="display-4">Excellent Medical Services</h1>
        </div>
        <div className="row g-5">
            <div className="col-lg-4 col-md-6">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon mb-4">
                        <i className="fa fa-2x fa-microscope text-white"></i>
                    </div>
                    <h4 className="mb-3">Laboratory & blood Testing</h4>
                    <p className="m-0"></p>
                    <a className="btn btn-lg btn-primary rounded-pill" href="/">
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon mb-4">
                        <i className="fa fa-2x fa-procedures text-white"></i>
                    </div>
                    <h4 className="mb-3">Operation & Surgery</h4>
                    <p className="m-0"></p>
                    <a className="btn btn-lg btn-primary rounded-pill" href="/">
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            
            
            <div className="col-lg-4 col-md-6">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon mb-4">
                        <i className="fa fa-2x fa-pills text-white"></i>
                    </div>
                    <h4 className="mb-3">Medicine & Pharmacy</h4>
                    <p className="m-0"></p>
                    <a className="btn btn-lg btn-primary rounded-pill" href="/">
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            
        </div>
    </div>
</div>
{/* <!-- Services End -->


        <!-- Appointment Start --> */}
        <div className="container-fluid bg-primary my-5 py-5">
            <div className="container py-5">
                <div className="row gx-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="mb-4">
                            <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Appointment</h5>
                            <h1 className="display-4">Make An Appointment For Your Family</h1>
                        </div>
                        <p className="text-white mb-5"></p>
                        <a className="btn btn-dark rounded-pill py-3 px-5 me-3" href="/">Find Doctor</a>
                        <a className="btn btn-outline-dark rounded-pill py-3 px-5" href="/">Read More</a>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-white text-center rounded p-5">
                            <h1 className="mb-4">Book An Appointment</h1>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <select className="form-select bg-light border-0" style={{height: "55px"}}>
                                            <option selected>Choose Department</option>
                                            <option value="1">Department 1</option>
                                            <option value="2">Department 2</option>
                                            <option value="3">Department 3</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <select className="form-select bg-light border-0" style={{height: "55px"}}>
                                            <option selected>Select Doctor</option>
                                            <option value="1">Doctor 1</option>
                                            <option value="2">Doctor 2</option>
                                            <option value="3">Doctor 3</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{height: "55px"}}/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{height: "55px"}}/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                className="form-control bg-light border-0 datetimepicker-input"
                                                placeholder="Date" data-target="#date" data-toggle="datetimepicker" style={{height: "55px"}}/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="time" id="time" data-target-input="nearest">
                                            <input type="text"
                                                className="form-control bg-light border-0 datetimepicker-input"
                                                placeholder="Time" data-target="#time" data-toggle="datetimepicker" style={{height: "55px"}}/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Make An Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/*   <!-- Appointment End -->

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
   {/*  <!-- Testimonial End -->


<!-- Footer Start --> */}
<div className="container-fluid bg-dark text-light mt-5 py-5">
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
                <p className="mb-4">Visit us again</p>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>Assiut</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>medogadalrb@gmail.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3"></i>+0111 054 3007</p>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="/"><i className="fa fa-angle-right me-2"></i>Home</a>
                    <a className="text-light mb-2" href="/About"><i className="fa fa-angle-right me-2"></i>About Us</a>
                    <a className="text-light mb-2" href="/Service"><i className="fa fa-angle-right me-2"></i>Our Services</a>
                    <a className="text-light mb-2" href="/Team"><i className="fa fa-angle-right me-2"></i>Meet The Team</a>
                    <a className="text-light mb-2" href="/Blog"><i className="fa fa-angle-right me-2"></i>Latest Blog</a>
                    <a className="text-light" href="Contact"><i className="fa fa-angle-right me-2"></i>Contact Us</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Links</h4>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="/"><i className="fa fa-angle-right me-2"></i>Home</a>
                    <a className="text-light mb-2" href="About"><i className="fa fa-angle-right me-2"></i>About Us</a>
                    <a className="text-light mb-2" href="/Service"><i className="fa fa-angle-right me-2"></i>Our Services</a>
                    <a className="text-light mb-2" href="/Team"><i className="fa fa-angle-right me-2"></i>Meet The Team</a>
                    <a className="text-light mb-2" href="/Blog"><i className="fa fa-angle-right me-2"></i>Latest Blog</a>
                    <a className="text-light" href="/Contact"><i className="fa fa-angle-right me-2"></i>Contact Us</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Newsletter</h4>
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address"/>
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                <h6 className="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
                <div className="d-flex">
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="/"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="/"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="/"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="container-fluid bg-dark text-light border-top border-secondary py-4">
    <div className="container">
        <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
                <p className="mb-md-0">&copy; <a className="text-primary" href="/">CMS</a>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
                <p className="mb-0">Designed by <a className="text-primary" href="/">GaAaD</a></p>
            </div>
        </div>
    </div>
</div>
{/* <!-- Footer End -->


    <!-- Back to Top --> */}
    <a href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>

            </div>
        )}
 }
 export default  Service
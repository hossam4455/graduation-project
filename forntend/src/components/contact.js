import React, { Component } from "react";
 class Contact extends Component{
    render(){
        return(
            <div>
                 {/* <!-- Topbar Start --> */}
    <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-decoration-none text-body pe-3" href="/Contact"><i className="bi bi-telephone me-2"></i>+0111 054 3007</a>
                        <span className="text-body">|</span>
                        <a className="text-decoration-none text-body px-3" href="/Contact"><i className="bi bi-envelope me-2"></i>Gad@gmail.com</a>
                    </div>
                </div>
                <div className="col-md-6 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-body px-2" href="/Contact">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="text-body px-2" href="/Contact">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="text-body px-2" href="/Contact">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="text-body px-2" href="/Contact">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="text-body ps-2" href="/Contact">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   {/*  <!-- Topbar End -->


    <!-- Navbar Start --> */}
    <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                <a href="/" className="navbar-brand">
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
                            <a href="/Contact" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
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
  {/*   <!-- Navbar End -->



    <!-- Contact Start --> */}
    <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Any Questions?</h5>
                <h1 className="display-4">Please Feel Free To Contact Us</h1>
            </div>
            <div className="row g-5 mb-5">
                <div className="col-lg-4">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: "200px"}}>
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: "100px", height: "70px" ,transform: "rotate(-15deg)"}}>
                            <i className="fa fa-2x fa-location-arrow text-white" style={{transform: "rotate(15deg)"}}></i>
                        </div>
                        <h6 className="mb-0">Egypt</h6>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: "200px"}}>
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: "100px", height: "70px" ,transform: "rotate(-15deg)"}}>
                            <i className="fa fa-2x fa-phone text-white" style={{transform: "rotate(15deg)"}}></i>
                        </div>
                        <h6 className="mb-0">0111 054 3007</h6>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: "200px"}}>
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: "100px", height: "70px" ,transform: "rotate(-15deg)"}}>
                            <i className="fa fa-2x fa-envelope-open text-white" style={{transform: "rotate(15deg)"}}></i>
                        </div>
                        <h6 className="mb-0">Gad@gmail.com</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12"  style={{maxWidth: "500px"}}>
                    <div className="position-relative h-100">
                        <iframe   className="position-relative w-100 h-100"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
      frameborder="0"   style={{ border: "0" }}   allowFullScreen={true} title=" "  aria-hidden="false" tabIndex="0"/>
    
     
     
      
                    </div>
                </div>
            </div>
            <div className="row justify-content-center position-relative" style={{marginTop: "-200px", zIndex: "1"}}>
                <div className="col-lg-8">
                    <div className="bg-white rounded p-5 m-5 mb-0">
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{height: "55px"}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control bg-light border-0" placeholder="Your Email" sstyle={{height: "55px"}}/>
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Subject" style={{height: "55px"}}/>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-light border-0" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  {/*   <!-- Contact End -->


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
                    <a className="text-light" href="/Contact"><i className="fa fa-angle-right me-2"></i>Contact Us</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Links</h4>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="/"><i className="fa fa-angle-right me-2"></i>Home</a>
                    <a className="text-light mb-2" href="/About"><i className="fa fa-angle-right me-2"></i>About Us</a>
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
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="/Contact"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="/Contact"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="/Contact"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="/Contact"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="container-fluid bg-dark text-light border-top border-secondary py-4">
    <div className="container">
        <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
                <p className="mb-md-0">&copy; <a className="text-primary" href="/Contact">CMS</a>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
                <p className="mb-0">Designed by <a className="text-primary" href="/Contact">GaAaD</a></p>
            </div>
        </div>
    </div>
</div>
{/* <!-- Footer End -->


    <!-- Back to Top --> */}
    <a href="/Contact" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>


            </div>
        )}
 }
 export default Contact
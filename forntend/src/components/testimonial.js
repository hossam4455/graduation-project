import React, { Component } from "react";
 class Testimonial extends Component{
    render(){
        return(
            <div>
{/* <!-- Topbar Start --> */}
    <div class="container-fluid py-2 border-bottom d-none d-lg-block">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center">
                        <a class="text-decoration-none text-body pe-3" href="/Testimonial"><i class="bi bi-telephone me-2"></i>+0111 054 3007</a>
                        <span class="text-body">|</span>
                        <a class="text-decoration-none text-body px-3" href="/Testimonial"><i class="bi bi-envelope me-2"></i>Gad@gmail.com</a>
                    </div>
                </div>
                <div class="col-md-6 text-center text-lg-end">
                    <div class="d-inline-flex align-items-center">
                        <a class="text-body px-2" href="/Testimonial">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="text-body px-2" href="/Testimonial">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a class="text-body px-2" href="/Testimonial">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a class="text-body px-2" href="/Testimonial">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a class="text-body ps-2" href="/Testimonial">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   {/*  <!-- Topbar End -->


    <!-- Navbar Start --> */}
    <div class="container-fluid sticky-top bg-white shadow-sm">
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                <a href="/" class="navbar-brand">
                    <h1 class="m-0 text-uppercase text-primary"><i class="fa fa-clinic-medical me-2"></i>CMS</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href="/" class="nav-item nav-link active">Home</a>
                        <a href="/About" class="nav-item nav-link">About</a>
                        <a href="/Service" class="nav-item nav-link">Service</a>
                        <a href="/Price" class="nav-item nav-link">Pricing</a>
                        <div class="nav-item dropdown">
                            <a href="/Testimonial" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="/Team" class="dropdown-item">The Team</a>
                                <a href="/Testimonial" class="dropdown-item">The Patients Reviews</a>
                                <a href="/Appointment" class="dropdown-item">Appointment</a>
                                <a href="/Search" class="dropdown-item">Search</a>
                            </div>
                        </div>
                        <a href="/Contact" class="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
   {/*  <!-- Navbar End -->



    <!-- Testimonial Start --> */}
    <div class="container-fluid py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Testimonial</h5>
                <h1 class="display-4">Patients Say About Our Services</h1>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="owl-carousel testimonial-carousel">
                        <div class="testimonial-item text-center">
                            <div class="position-relative mb-5">
                                <img class="img-fluid rounded-circle mx-auto" src="img/testimonial-1.jpg" alt=""/>
                                <div class="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: "60px", height: "60px"}}>
                                    <i class="fa fa-quote-left fa-2x text-primary"></i>
                                </div>
                            </div>
                            <p class="fs-4 fw-normal"></p>
                            <hr class="w-25 mx-auto"/>
                            <h3>Patient Name</h3>
                            <h6 class="fw-normal text-primary mb-3">Profession</h6>
                        </div>
                        <div class="testimonial-item text-center">
                            <div class="position-relative mb-5">
                                <img class="img-fluid rounded-circle mx-auto" src="img/testimonial-2.jpg" alt=""/>
                                <div class="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: "60px", height: "60px"}}>
                                    <i class="fa fa-quote-left fa-2x text-primary"></i>
                                </div>
                            </div>
                            <p class="fs-4 fw-normal"></p>
                            <hr class="w-25 mx-auto"/>
                            <h3>Patient Name</h3>
                            <h6 class="fw-normal text-primary mb-3">Profession</h6>
                        </div>
                        <div class="testimonial-item text-center">
                            <div class="position-relative mb-5">
                                <img class="img-fluid rounded-circle mx-auto" src="img/testimonial-3.jpg" alt=""/>
                                <div class="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: "60px", height: "60px"}}>
                                    <i class="fa fa-quote-left fa-2x text-primary"></i>
                                </div>
                            </div>
                            <p class="fs-4 fw-normal"></p>
                            <hr class="w-25 mx-auto"/>
                            <h3>Patient Name</h3>
                            <h6 class="fw-normal text-primary mb-3">Profession</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End -->


    <!-- Footer Start --> */}
<div class="container-fluid bg-dark text-light mt-5 py-5">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-3 col-md-6">
                <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
                <p class="mb-4">Visit us again</p>
                <p class="mb-2"><i class="fa fa-map-marker-alt text-primary me-3"></i>Assiut</p>
                <p class="mb-2"><i class="fa fa-envelope text-primary me-3"></i>medogadalrb@gmail.com</p>
                <p class="mb-0"><i class="fa fa-phone-alt text-primary me-3"></i>+0111 054 3007</p>
            </div>
            <div class="col-lg-3 col-md-6">
                <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-light mb-2" href="/Testimonial"><i class="fa fa-angle-right me-2"></i>Home</a>
                    <a class="text-light mb-2" href="/Testimonial"><i class="fa fa-angle-right me-2"></i>About Us</a>
                    <a class="text-light mb-2" href="/Testimonial"><i class="fa fa-angle-right me-2"></i>Our Services</a>
                    <a class="text-light mb-2" href="/Testimonial"><i class="fa fa-angle-right me-2"></i>Meet The Team</a>
                    <a class="text-light mb-2" href="/Testimonial"><i class="fa fa-angle-right me-2"></i>Latest Blog</a>
                    <a class="text-light" href="/Testimonial"><i class="fa fa-angle-right me-2"></i>Contact Us</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Links</h4>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-light mb-2" href="/Testimonial"><i class="fa fa-angle-right me-2"></i>Home</a>
                    <a class="text-light mb-2" href="/Testimonial"><i class="fa fa-angle-right me-2"></i>About Us</a>
                    <a class="text-light mb-2" href="Testimonial"><i class="fa fa-angle-right me-2"></i>Our Services</a>
                    <a class="text-light mb-2" href="/Testimonial"><i class="fa fa-angle-right me-2"></i>Meet The Team</a>
                    <a class="text-light mb-2" href="/Testimonial"><i class="fa fa-angle-right me-2"></i>Latest Blog</a>
                    <a class="text-light" href="/Testimonial"><i class="fa fa-angle-right me-2"></i>Contact Us</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Newsletter</h4>
                <form action="">
                    <div class="input-group">
                        <input type="text" class="form-control p-3 border-0" placeholder="Your Email Address"/>
                        <button class="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                <h6 class="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
                <div class="d-flex">
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="/Testimonial"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="/Testimonial"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="/Testimonial"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-circle" href="/Testimonial"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid bg-dark text-light border-top border-secondary py-4">
    <div class="container">
        <div class="row g-5">
            <div class="col-md-6 text-center text-md-start">
                <p class="mb-md-0">&copy; <a class="text-primary" href="/Testimonial">CMS</a>. All Rights Reserved.</p>
            </div>
            <div class="col-md-6 text-center text-md-end">
                <p class="mb-0">Designed by <a class="text-primary" href="/Testimonial">GaAaD</a></p>
            </div>
        </div>
    </div>
</div>
{/* <!-- Footer End -->


    <!-- Back to Top --> */}
    <a href="/Testimonial" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>

            </div>
        )}
 }
 export default Testimonial
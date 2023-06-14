import React, { Component } from "react";
class Blog extends Component{
    render(){
        return(
            <div>
{/* <!-- Topbar Start --> */}
    <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-decoration-none text-body pe-3" href="/"><i className="bi bi-telephone me-2"></i>+012 345 6789</a>
                        <span className="text-body">|</span>
                        <a className="text-decoration-none text-body px-3" href="/"><i className="bi bi-envelope me-2"></i>info@example.com</a>
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
   {/*  <!-- Topbar End -->


    <!-- Navbar Start --> */}
    <div className="container-fluid sticky-top bg-white shadow-sm mb-5">
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
                        <a href="/" className="nav-item nav-link">Home</a>
                        <a href="/About" className="nav-item nav-link">About</a>
                        <a href="/Service" className="nav-item nav-link">Service</a>
                        <a href="/Price" className="nav-item nav-link">Pricing</a>
                        <div className="nav-item dropdown">
                            <a href="/" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="/Blog" className="dropdown-item active">Blog Grid</a>
                                <a href="/Details" className="dropdown-item">Blog Detail</a>
                                <a href="/Team" className="dropdown-item">The Team</a>
                                <a href="/Testimonial" className="dropdown-item">Testimonial</a>
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


    <!-- Blog Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Blog Post</h5>
                <h1 className="display-4">Our Latest Medical Blog Posts</h1>
            </div>
            <div className="row g-5">
                <div className="col-xl-4 col-lg-6">
                    <div className="bg-light rounded overflow-hidden">
                        <img className="img-fluid w-100" src="img/blog-1.jpg" alt=""/>
                        <div className="p-4">
                            <a className="h3 d-block mb-3" href="/">Dolor clita vero elitr sea stet dolor justo  diam</a>
                            <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo</p>
                        </div>
                        <div className="d-flex justify-content-between border-top p-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle me-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                <small>John Doe</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>12345</small>
                                <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>123</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="bg-light rounded overflow-hidden">
                        <img className="img-fluid w-100" src="img/blog-2.jpg" alt=""/>
                        <div className="p-4">
                            <a className="h3 d-block mb-3" href="/">Dolor clita vero elitr sea stet dolor justo  diam</a>
                            <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo</p>
                        </div>
                        <div className="d-flex justify-content-between border-top p-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle me-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                <small>John Doe</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>12345</small>
                                <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>123</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="bg-light rounded overflow-hidden">
                        <img className="img-fluid w-100" src="img/blog-3.jpg" alt=""/>
                        <div className="p-4">
                            <a className="h3 d-block mb-3" href="/">Dolor clita vero elitr sea stet dolor justo  diam</a>
                            <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo</p>
                        </div>
                        <div className="d-flex justify-content-between border-top p-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle me-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                <small>John Doe</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>12345</small>
                                <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>123</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="bg-light rounded overflow-hidden">
                        <img className="img-fluid w-100" src="img/blog-2.jpg" alt=""/>
                        <div className="p-4">
                            <a className="h3 d-block mb-3" href="/Blog">Dolor clita vero elitr sea stet dolor justo  diam</a>
                            <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo</p>
                        </div>
                        <div className="d-flex justify-content-between border-top p-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle me-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                <small>John Doe</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>12345</small>
                                <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>123</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="bg-light rounded overflow-hidden">
                        <img className="img-fluid w-100" src="img/blog-3.jpg" alt=""/>
                        <div className="p-4">
                            <a className="h3 d-block mb-3" href="/Blog">Dolor clita vero elitr sea stet dolor justo  diam</a>
                            <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo</p>
                        </div>
                        <div className="d-flex justify-content-between border-top p-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle me-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                <small>John Doe</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>12345</small>
                                <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>123</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="bg-light rounded overflow-hidden">
                        <img className="img-fluid w-100" src="img/blog-1.jpg" alt=""/>
                        <div className="p-4">
                            <a className="h3 d-block mb-3" href="/Blog">Dolor clita vero elitr sea stet dolor justo  diam</a>
                            <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo</p>
                        </div>
                        <div className="d-flex justify-content-between border-top p-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle me-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                <small>John Doe</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>12345</small>
                                <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>123</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="bg-light rounded overflow-hidden">
                        <img className="img-fluid w-100" src="img/blog-3.jpg" alt=""/>
                        <div className="p-4">
                            <a className="h3 d-block mb-3" href="/Blog">Dolor clita vero elitr sea stet dolor justo  diam</a>
                            <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo</p>
                        </div>
                        <div className="d-flex justify-content-between border-top p-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle me-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                <small>John Doe</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>12345</small>
                                <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>123</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="bg-light rounded overflow-hidden">
                        <img className="img-fluid w-100" src="img/blog-1.jpg" alt=""/>
                        <div className="p-4">
                            <a className="h3 d-block mb-3" href="/Blog">Dolor clita vero elitr sea stet dolor justo  diam</a>
                            <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo</p>
                        </div>
                        <div className="d-flex justify-content-between border-top p-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle me-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                <small>John Doe</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>12345</small>
                                <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>123</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="bg-light rounded overflow-hidden">
                        <img className="img-fluid w-100" src="img/blog-2.jpg" alt=""/>
                        <div className="p-4">
                            <a className="h3 d-block mb-3" href="/Blog">Dolor clita vero elitr sea stet dolor justo  diam</a>
                            <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo</p>
                        </div>
                        <div className="d-flex justify-content-between border-top p-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle me-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                <small>John Doe</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>12345</small>
                                <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>123</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <button className="btn btn-primary py-3 px-5">Load More</button>
                </div>
            </div>
        </div>
    </div>
  {/*   <!-- Blog End -->
    

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
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="/Blog"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="/Blog"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="/Blog"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="/Blog"><i className="fab fa-instagram"></i></a>
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
        )
    }
}
export default Blog
import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
class About extends Component{
    render(){
        return(
            <div>
        {/*Start Navbar*/}
 
            <Navbar />
        
        {/*End Navbar*/}
    
        {/*Start body*/}
        <div class="container-fluid py-5">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100 rounded" src="img/about.jpg" alt="/" style={{ objectFit: "cover"}}/>
                        </div>
                    </div>


                    <div className="col-lg-7">
                        <div className="mb-4">
                            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
                            <h1 className="display-4">Best Medical Care For Yourself and Your Family</h1>
                        </div>
                        <p>CMS is the leading e-healthcare platform for doctor booking and clinic management management software in the Middle East and North Africa region. We are driving the electronic and automated transformation of doctors, clinics and hospitals to make high-quality healthcare accessible in the Arab region.
    
                            With the help of more than 200,000 verified and peer-reviewed reviews, patients can search, compare, and book with the best doctors instantly. Doctors can also provide an easy and hassle-free healthcare experience thanks to CMS's clinic management software.
                            
                            CMS is currently operating in Egypt. We aspire to master all aspects of the healthcare industry and continue to launch products that make a positive difference in people's lives.</p>
                        <div className="row g-3 pt-3">
                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <i className="fa fa-3x fa-user-md text-primary mb-3"></i>
                                    <h6 className="mb-0">Qualified<small className="d-block text-primary">Doctors</small></h6>
                                </div>
                            </div>


                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <i className="fa fa-3x fa-procedures text-primary mb-3"></i>
                                    <h6 className="mb-0">Emergency<small className="d-block text-primary">Services</small></h6>
                                </div>
                            </div>


                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <i className="fa fa-3x fa-microscope text-primary mb-3"></i>
                                    <h6 className="mb-0">Accurate<small className="d-block text-primary">Testing</small></h6>
                                </div>
                            </div>


                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <i className="fas fa-3x fa-flask text-primary mb-3"></i>
                                    <h6 className="mb-0">24h<small className="d-block text-primary">Pharmacian Services</small></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      


    
    <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Find A Doctor</h5>
                <h1 className="display-4 mb-4">Find A Healthcare Professionals</h1>
                <h5 className="fw-normal">/</h5>
            </div>


            <div className="mx-auto" style={{width: "100%", maxWidth: "600px"}}>
                <div className="input-group">
                    <select className="form-select border-primary w-25" style={{height: "60px"}}>
                        <option selected>Department</option>
                        <option value="1">Department 1</option>
                        <option value="2">Department 2</option>
                        <option value="3">Department 3</option>
                    </select>
                    <input type="text" className="form-control border-primary w-50" placeholder="Keyword"/>
                    <button className="btn btn-dark border-0 w-25">Search</button>
                </div>
            </div>

        </div>
    </div>
    



    <div className="container-fluid py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Doctors</h5>
                <h1 className="display-4">Qualified Healthcare Professionals</h1>
            </div>

            <div className="owl-carousel team-carousel position-relative">
                <div className="team-item">
                    <div className="row g-0 bg-light rounded overflow-hidden">
                        <div className="col-12 col-sm-5 h-100">
                            <img className="img-fluid h-100" src="/src/component/img"alt="/" style={{ objectFit: "cover"}} />
                        </div>
                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div className="mt-auto p-4">
                                <h3>Doctor Name</h3>
                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                <p className="m-0"></p>
                            </div>
                            <div className="d-flex mt-auto border-top p-4">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-item">
                    <div className="row g-0 bg-light rounded overflow-hidden">
                        <div className="col-12 col-sm-5 h-100">
                            <img className="img-fluid h-100" src="/src/component/img/team-2.jpg" alt="/" style={{ objectFit: "cover"}}/>
                        </div>
                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div className="mt-auto p-4">
                                <h3>Doctor Name</h3>
                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                <p className="m-0"></p>
                            </div>
                            <div className="d-flex mt-auto border-top p-4">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-item">
                    <div className="row g-0 bg-light rounded overflow-hidden">
                        <div className="col-12 col-sm-5 h-100">
                            <img className="img-fluid h-100" src="/src/component/img/team-3.jpg" alt="/" />
                        </div>
                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div className="mt-auto p-4">
                                <h3>Doctor Name</h3>
                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                <p className="m-0"></p>
                            </div>
                            <div className="d-flex mt-auto border-top p-4">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*End body*/}

{/*Start Footer*/}

<Footer />

{/*End Footer*/}
            </div>
        )
    }
}
export default About
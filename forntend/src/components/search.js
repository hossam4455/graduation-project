import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
class Search extends Component{
    render(){
        return(
            <div>
                
   


    {/*<!-- Navbar Start --> */}
    <Navbar/>
   
    {/* <!-- Navbar End -->



    <!-- Search Start --> */}
    <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Find A Doctor</h5>
                <h1 className="display-4 mb-4">Find A Healthcare Professionals</h1>
                <h5 className="fw-normal"> </h5>
            </div>
            <div className="mx-auto" style={{width: "100%", maxWidth: "600px"}}>
                <div className="input-group">
                    <select className="form-select border-primary w-25" style={{height: "60px"}}>
                        <option selected>Department</option>
                        <option value="1">Department 1</option>
                        <option value="2">Department 2</option>
                        <option value="3">Department 3</option>
                    </select>
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
   {/*  <!-- Search End -->


    <!-- Search Result Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 team-item">
                    <div className="row g-0 bg-light rounded overflow-hidden">
                        <div className="col-12 col-sm-5 h-100">
                            <img className="img-fluid h-100" alt="/" src="img/team-1.jpg" style={{objectFit: "cover"}}/>
                        </div>
                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div className="mt-auto p-4">
                                <h3>Doctor Name</h3>
                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                <p className="m-0"></p>
                            </div>
                            <div className="d-flex mt-auto border-top p-4">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/Search"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/Search"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="/Search"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 team-item">
                    <div className="row g-0 bg-light rounded overflow-hidden">
                        <div className="col-12 col-sm-5 h-100">
                            <img className="img-fluid h-100" alt="/Search" src="img/team-2.jpg" style={{objectFit: "cover"}}/>
                        </div>
                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div className="mt-auto p-4">
                                <h3>Doctor Name</h3>
                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                <p className="m-0"></p>
                            </div>
                            <div className="d-flex mt-auto border-top p-4">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/Search"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/Search"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="/Search"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 team-item">
                    <div className="row g-0 bg-light rounded overflow-hidden">
                        <div className="col-12 col-sm-5 h-100">
                            <img className="img-fluid h-100" alt="/" src="img/team-3.jpg" style={{objectFit: "cover"}}/>
                        </div>
                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div className="mt-auto p-4">
                                <h3>Doctor Name</h3>
                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                <p className="m-0"></p>
                            </div>
                            <div className="d-flex mt-auto border-top p-4">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/Search"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/Search"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="/Search"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 team-item">
                    <div className="row g-0 bg-light rounded overflow-hidden">
                        <div className="col-12 col-sm-5 h-100">
                            <img className="img-fluid h-100" alt="" src="img/team-1.jpg" style={{objectFit: "cover"}}/>
                        </div>
                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div className="mt-auto p-4">
                                <h3>Doctor Name</h3>
                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                <p className="m-0"></p>
                            </div>
                            <div className="d-flex mt-auto border-top p-4">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/Search"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/Search"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="/Search"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 team-item">
                    <div className="row g-0 bg-light rounded overflow-hidden">
                        <div className="col-12 col-sm-5 h-100">
                            <img className="img-fluid h-100" alt="" src="img/team-2.jpg" style={{objectFit: "cover"}}/>
                        </div>
                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div className="mt-auto p-4">
                                <h3>Doctor Name</h3>
                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                <p className="m-0"></p>
                            </div>
                            <div className="d-flex mt-auto border-top p-4">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/Search"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/Search"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="/Search"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 team-item">
                    <div className="row g-0 bg-light rounded overflow-hidden">
                        <div className="col-12 col-sm-5 h-100">
                            <img className="img-fluid h-100" alt="" src="img/team-3.jpg" style={{objectFit: "cover"}}/>
                        </div>
                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div className="mt-auto p-4">
                                <h3>Doctor Name</h3>
                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                <p className="m-0"></p>
                            </div>
                            <div className="d-flex mt-auto border-top p-4">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/Search"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="/Search"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="/Search"><i className="fab fa-linkedin-in"></i></a>
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
    {/* <!-- Search Result End -->


<!-- Footer Start --> */}

<Footer/>
{/* <!-- Footer End -->*/}



    
            </div>
        )}
}
export default Search
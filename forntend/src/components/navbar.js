import React from "react";

// import ViewPorfile from './viewprofile'
const email = localStorage.getItem('email');

    const Navbar = () => { 
        // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.token === '')
        const handleLoginBtn = () => {
            
            return localStorage.length===0;
        };
        const handleLogout = () => {
            localStorage.clear();
        }
        const handleLogoutClick = () => {
            handleLogout();
            // setIsLoggedIn(handleLoginBtn());
            setTimeout(() => {
                window.location.reload();
                }, 1000);
        };
        
        return(
            <div>
<div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-decoration-none text-body pe-3" href="/"><i className="bi bi-telephone me-2"></i>+0111 054 3007</a>
                        <span className="text-body">|</span>
                        <a className="text-decoration-none text-body px-3" href="/"><i className="bi bi-envelope me-2"></i>{email}</a>
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
  


   
    <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                <a href="/" className="navbar-brand">
                    <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>CMS</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="/" className="nav-item nav-link active">Home</a>
                        <a href="/About" className="nav-item nav-link">About</a>
                        <a href="/Service" className="nav-item nav-link">Service</a>
                        <a href="/Price" className="nav-item nav-link">Pricing</a>
                        
                        <a href="/Contact" className="nav-item nav-link">Contact</a>
                        {
                                    handleLoginBtn() ? ( 
                                        <a href="/Login" className="nav-item nav-link">Login</a>
                                    ) : (
                                        <span className="nav-item nav-link" style={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                handleLogoutClick();
                                            }}
                                        >Logout</span>
                                    )
                          }
                            {
                                    handleLoginBtn() ? ( 
                                   
                                        <div>
                                             <a href="/MyForm" className="nav-item nav-link">Signup Doctor</a>
                                    </div>
                                            
                                  
                                            
                                        
                                    ) : (
                                    <a href="/ViewPorfile"><img src="img/user_456212.png" alt="" style={{width:"30px" ,height:"30px" ,marginTop:"20px", marginLeft:"30px",border:"0px"}} /></a>
                                    )
                          }
                       {
                                    handleLoginBtn() ? ( 
                                   
                                        <div>
                                             <a href="/MyFormPatient" className="nav-item nav-link">Signup Patient</a>
                                    </div>
                                            
                                  
                                            
                                        
                                    ) : (
                                        <a href="/ViewProfile">
                                        
                                      </a>
                                    )
                          }


                       

                       
                      
                    </div>
                </div>
            </nav>
        </div>
    </div>
   

            </div>
        )}
export default Navbar
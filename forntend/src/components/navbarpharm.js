import React, {Component} from 'react';

class PharmNav extends Component{
    render(){
      return(
<div>



  <div className="hero_area">
   
    <header className="header_section">
     
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
          <a className="navbar-brand" href="/Home2">
            <span>
              Pharmacy
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex  flex-column flex-lg-row align-items-center w-100 justify-content-between">
            <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="/Home2">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Medicine"> Medicine </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/BuyNow">Make a prescription</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">CMS</a>
                </li>
              </ul>
             
              
            </div>
          </div>

        </nav>
      </div>
    </header>
  
  </div>


  </div>
  )
  }}
  export default PharmNav

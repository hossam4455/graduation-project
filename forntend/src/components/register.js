import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

 class Register extends Component{
  
    render(){
        return(
            <div>
              <Navbar/>
   {/*  <!-- Navbar END --> */ }
   <div className="con">
    <div className="form-con">
     

      <form id="signupForm" className="sform">
        <h2>Sign Up</h2>
        <input type="text" id="signupName" placeholder="Full Name" required/>
        <input type="email" id="signupEmail" placeholder="Email" required/>
        <input type="password" id="signupPassword" placeholder="Password" required/>
        <button type="submit">Sign up</button>
      </form>
    </div>
  </div>


   {/*<!-- Footer Start --> */}
<Footer/>
            </div>


        )}
 }
 export default Register
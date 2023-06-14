import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

 class Login extends Component{
  
    render(){
        return(
            <div>
             
<Navbar/>


   {/*  <!-- Navbar END --> */ }
   <div className="con">
    <div className="form-con">
      <form id="loginForm" className="sform">
        <h2>Login</h2>
        <input type="email" id="loginEmail" placeholder="Email" required/>
        <input type="password" id="loginPassword" placeholder="Password" required/>
        <button type="submit">Log in</button>
      </form>

      
    </div>
  </div>



   {/*<!-- Footer Start --> */}
<Footer/>
            </div>


        )}
 }
 export default Login
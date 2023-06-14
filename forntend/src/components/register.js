import React, { Component } from "react";

 class Register extends Component{
  
    render(){
        return(
            

<div className="cdone">
      <div className="forms-cdone">
        <div className="signin-signup">
          <form action="/Register" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-fld">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-fld">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="/Register" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/Register" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/Register" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="/Register" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="/Register" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-fld">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-fld">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-fld">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="/Register" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/Register" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/Register" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="/Register" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-cdone">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Welcome to our CMIS platform for all medical specialist Services .
            </p>
            <button className="btn transparent  sign-up-btn" >
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3> </h3>
            <p>
              Welcome to our CMIS platform for all medical specialist Services .
            </p>
            <button className="btn transparent  sign-in-btn" >
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
        )}
 }
 export default Register
import React, { Component } from "react";
class AddLab extends Component{
    render(){
        return(
            <div>
        <div className="container">
            <a href="/AddLab" className="logo">
                <img src="img/logo.jpeg" alt="Logo" />
            </a>
            <nav>

                <ul>
                    <li><a className="active" href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Price">Pricing</a></li>
                    <li><a href="/AddLab">pages</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/Register">login</a></li>
                    <li><a href="/Register">signup</a></li>
                </ul>
            </nav>
        </div>
    
    <br/>
    <div className="addlab">
        <form action="post">
            <label className="namelab" for="namelab"> name of the lab :</label> <br/>
            <input className="innamelab" id="namelab" type="text" placeholder="enter name of the lab" required/> <br/>
            <label className="loclab" for="loclab">location</label> <br/>
            <input className="inloclab" id="loclab" type="text" placeholder="enter loction of the lab" required/> <br/>
            <label className="imglab" for="imglab">logo for lab</label><br/>
            <input className="inimglab" id="imglab" alt="" type="image" placeholder="uplode image" required/> <br/>
            <input className="submitlab" type="submit" onclick="element()"/><br/>

        </form>
    </div>
    </div>

    
        )}}
export default AddLab
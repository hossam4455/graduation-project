import React, { Component } from "react";
class Almokhtbar extends Component{
    render(){
        return(
            <div>
<header>
        <div className="container">
            <a href="/" className="logo">
                <img src="img/logo.jpeg" alt="Logo" />
            </a>
            <nav>

                <ul>
                    <li><a className="active" href="/HomeLab">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Price">Pricing</a></li>
                    <li><a href="/Almokhtbar">pages</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/Login">login</a></li>
                    <li><a href="/Register">signup</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div className="alborg">
        <div className="alborg-photo">
            <img src="img/almoktaber.jpeg" alt=""/>
        </div>
        <div className="alborg-info">
            <h2>مركزالمختبر </h2>
            <p className="alborg-specialty">لجميع انواع التحاليل الطبيه</p>
            <div className="comm-home">
                <p className="home-lab"><a href="/HomeLab">معامل تحاليل </a> </p>
                <p className="comment"><a href="/Almokhtabar">رؤيه التقييمات </a></p>
            </div>
        </div>
    </div>

    <div className="form">

        <div className="form-left">
            <form action="" method="POST">
                <label className="name-form" for="name lname">name :</label><br/>
                <input type="text" className="fname" id="name" placeholder="first name" required/>
                <input type="text" className="lname" id="lname" placeholder="last name" required/> <br/>
                <label for="ph">phone</label><br/>
                <input type="tel" className="phone-number" id="ph" placeholder="01146650211" required/> <br/>
                <label for="em">email</label><br/>
                <input type="text" className="email" id="em" placeholder="ayman2548@gmail.com" required/> <br/>
                <label for="exp">Explain disease</label><br/>
                <textarea name="" id="exp" cols="20" rows="5"></textarea>
                <input type="submit" className="submit" value="send"/>
            </form>
        </div>
        <div className="form-right">
            <h2>Please enter your data </h2>
            <p> So that we can communicate with you and learn about your medical condition and what type of medical
                analysis you need</p>
        </div>
    </div>

            </div>
        )}}
export default Almokhtbar
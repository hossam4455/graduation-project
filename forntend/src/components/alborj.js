import React, { Component } from "react";
import Labnav from "./labnavbar";
import Labform from "./labform";

 class Alborj extends Component{
    render(){
        return(
            <div>
         {/* start Navbar */}

        <Labnav/>
       {/*  End Navbar */}
    <div className="alborg">
        <div className="alborg-photo">
            <img src="img/alborg.jpeg" alt=""/>
        </div>
        <div className="alborg-info">
            <h2>مركزالبرج فرع ديروط </h2>
            <p className="alborg-specialty">لجميع انواع التحاليل الطبيه</p>
            <div className="comm-home">
                <p className="home-lab"><a href="/HomeLab">معامل تحاليل </a> </p>
                <p className="comment"><a href="/Alborj">رؤيه التقييمات </a></p>
            </div>
        </div>
    </div>

    {/* start Form */}

         <Labform/>

    {/* End Form */}

            </div>
        )}}
 export default Alborj
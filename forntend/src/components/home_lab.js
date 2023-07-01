import React, { Component } from "react";
import Labnav from "./labnavbar";
class HomeLAb extends Component{
    render(){
        return(
            <div>
               {/* start Navbar */}

        <Labnav/>
       {/*  End Navbar */}
        
            <div className="landing">
                <div className="overlay"></div>
                <div className="text">
                    <div className="content">
                        <h2>
                            Hello,<br/>
                            welcome to the laboratory.
                        </h2>
                        <p> You can book an appointment in the laboratory you want</p>
                    </div>
                </div>



            </div>
            <div className="lab">
                <div className="container">

                    <div id="lab-content">

                        <div className="card">
                            <a href="/Alborj"> <img src="img/alborg.jpeg" alt="" /></a>

                          

                        </div>
                        <div className="card">
                            <a href="/Almokhtabar"> <img src="img/almoktaber.jpeg" alt="" /></a>

                           


                        </div>
                        <div className="card">
                            <a href="/RoyalLab"> <img src="img/royal .jpeg" alt="" /></a>


                            


                        </div>
                        <div className="card">
                            <a href="/Alfath"> <img src="img/alfath.jpeg" alt="" /></a>

                            


                        </div>

                        <div className="card">
                            <a href="/Alfa"> <img src="img/alfa.jpeg" alt="" /></a>

                           


                        </div>
                        <div className="card">
                            <a href="/Alshrook"> <img src="img/alshrook.jpeg" alt="" /></a>

                            


                        </div>








                    </div>
                </div>
            </div>
            
           
          

            </div>
        )}}
        export default HomeLAb
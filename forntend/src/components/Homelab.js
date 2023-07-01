import React, { Component } from "react";
import NavLab from "./navlab";
import "../components/assets/css/style.css"
class HomeLab extends Component{
    render(){
        return(
            <div>
<NavLab />


<div className="slider-detail">

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="d-block w-100" src="assets/images/slider/slider_1.jpg" alt="First slide"/>
            
        </div>
        
        <div className="carousel-item ">
            <img className="d-block w-100" src="assets/images/slider/slider_3.jpg" alt="Third slide"/>
            
        </div>
        
        <div className="carousel-item ">
            <img className="d-block w-100" src="assets/images/slider/slider_2.jpg" alt="Third slide"/>
            
        </div>
        
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
</div>


</div>


<section id="about" className="with-medical">
<div className="container">
    <div className="row">
       <div className="col-lg-6 col-md-12">
            <img src="assets/images/why.jpg" alt=""/>
        </div>
        <div className="col-lg-6 col-md-12 txtr">
            <h4>Why choos Health Care with <br/>
             <span>CMS</span>   
            </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante. Mauris non placerat sapien. Pellentesque tempor arcu non odio scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.</p>
            <p>Ut ultricies lacus a rutrum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl ligula, ullamcorper non metus vitae, maximus efficitur mi. Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna, volutpat vel augue eget, iaculis tristique dui. </p>
        </div>
        
    </div>
</div>
</section>





<div className="doctor-message">
<div className="inner-lay">
    <div className="container">
       <div className="row session-title">
           <h2>Our Achievemtns in numbers</h2>
           <p>We can talk for a long time about advantages of our Dental clinic before other medical treatment facilities.
But you can read the following facts in order to make sure of all pluses of our clinic:</p>
       </div>
        <div className="row">
            <div className="col-sm-3 numb">
                <h3>12+</h3>
                <span>YEARS OF EXPEREANCE</span>
            </div>
            <div className="col-sm-3 numb">
                <h3>212+</h3>
                <span>HAPPY PATIENTS</span>
            </div>
            <div className="col-sm-3 numb">
                <h3>52+</h3>
                <span>QUALIFIED STUFF</span>
            </div>
            <div className="col-sm-3 numb">
                <h3>18+</h3>
                <span>MASTER CERTIFICATIONS</span>
            </div>
        </div>
    </div>

</div>

</div>





<div id="gallery" className="gallery">
<div className="container">
   <div className="session-title row">
        <h2>Our Laboratories</h2>
    </div>
    <div className="row">


        <div className="gallery-filter d-none d-sm-block">
            
            <button className="btn btn-default filter-button" data-filter="irrigation">Laboratry</button>
        </div>
        <br />



        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
            <img src="assets/images/gallery/microscope-logo-laboratory-research-development_501861-181.jpg" className="img-responsive" alt=""/>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
           <img src="assets/images/gallery/pngtree-plant-laboratory-logo-design-vector-illustration-image_471902.jpg" className="img-responsive" alt=""/>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
            <img src="assets/images/gallery/png-transparent-medical-laboratory-analisi-clinica-logo-united-states-text-logo-laboratory.png" className="img-responsive" alt=""/>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
            <img src="assets/images/gallery/andiasmara170600112.jpg" className="img-responsive" alt=""/>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
            <img src="assets/images/gallery/154217464-medical-lab-logo-template-design-vector-emblem-design-concept-creative-symbol-icon.jpg" className="img-responsive" alt=""/>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
            <img src="assets/images/gallery/360_F_311904291_mMJVIVnNR2103OI0tAV74alUpR88wMMY.jpg" className="img-responsive" alt=""/>
        </div>

        

    </div>
</div>


</div>



            </div>
        )}}
export default HomeLab
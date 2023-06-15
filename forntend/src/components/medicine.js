import React, {Component} from 'react';
import PharmNav from './navbarpharm';

class Medicine extends Component{
    render(){
      return(
<div>
<body className="sub_page">
 
  

  
 {/*Start Navbar */}

<PharmNav/>
{/*End Navbar */}




  <div className="layout_padding-top">
    <section className="discount_section ">
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-lg-3 col-md-5 offset-md-2">
            <div className="detail-box">
              <h2>
                You get <br/>
                any medicine <br/>
                on
                <span>
                  10% discount
                </span>

              </h2>
              <p>
                It is a long established fact that a reader will be distracted by
              </p>
            
            </div>
          </div>
          <div className="col-lg-7 col-md-5">
            <div className="img-box">
              <img src="img/medicines.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

  <section className="health_section layout_padding">
    <div className="health_carousel-container">
      <h2 className="text-uppercase">
        Vitamins & Supplements
      </h2>
      <div className="carousel-wrap layout_padding2">
        <div className='prod'> 
          <div className="item">
            <div className="box">
              <div className="btn_container">
                <a href="BuyNow">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src="img/p-6.jpg" alt=""/>
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Medicine
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="btn_container">
                <a href="/BuyNow">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src="img/p-6.jpg" alt=""/>
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Medicine
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="btn_container">
                <a href="/BuyNow">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src="img/p-6.jpg" alt=""/>
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Medicine
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="btn_container">
                <a href="/BuyNow">
                  Buy Now
                </a>
              </div>
              <div className="img-box">
                <img src="img/p-6.jpg" alt=""/>
              </div>
              <div className="detail-box">
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>

                </div>
                <div className="text">
                  <h6>
                    Medicine
                  </h6>
                  <h6 className="price">
                    <span>
                      $
                    </span>
                    30
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

  </section>



</body>
</div>
)}
}
export default Medicine
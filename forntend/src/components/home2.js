import React, {Component} from 'react';

class Home2 extends Component{
  render(){
    return(
      <div className='App'>
      
<body>
  
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
                  <a className="nav-link" href="/BuyNow">Buy Now</a>
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
    
    <section className=" slider_section position-relative">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="img-box">
                    <img src="img/medicine.png" alt=""/>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="detail-box">
                    <h1>
                      Welcome To Our <br/>
                      <span>
                        Online Medicine
                      </span>

                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable.
                    </p>
                    <div>
                      <a href="/BuyNow">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="img-box">
                    <img src="img/medicine.png" alt=""/>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="detail-box">
                    <h1>
                      Welcome To Our <br/>
                      <span>
                        Online Medicine
                      </span>

                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable.
                    </p>
                    <div>
                      <a href="/BuyNow">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="img-box">
                    <img src="img/medicine.png" alt=""/>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="detail-box">
                    <h1>
                      Welcome To Our <br/>
                      <span>
                        Online Medicine
                      </span>

                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable.
                    </p>
                    <div>
                      <a href="/BuyNow">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="sr-only">Next</span>
        </a>
      </div>


    </section>

    
  </div>
  
  



  </body>

      </div>
    );
  }
}

export default Home2;
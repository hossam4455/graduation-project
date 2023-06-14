import React, {Component} from 'react';

class BuyNow extends Component{
    render(){
      return(
<div>


<body className="sub_page">
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
  
  </div>



 
  <section className="contact_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="custom_heading-container ">
          <h2>
            Request Your Medicine
          </h2>
        </div>
      </div>
    </div>
    <div className="container layout_padding2">
      <div className="row">
        <div className="col-md-5">
          <div className="form_contaier">
            <form>
              <div className="form-group">
                <label for="exampleInputName1">Name</label>
                <input type="text" class="form-control" id="exampleInputName1"/>
              </div>
              <div className="form-group">
                <label for="exampleInputNumber1">Phone Number</label>
                <input type="text" class="form-control" id="exampleInputNumber1"/>
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Email </label>
                <input type="email" class="form-control" id="exampleInputEmail1"/>
              </div>
              <div className="form-group ">
                <label for="inputState">Select medicine</label>
                <select id="inputState" class="form-control">
                  <option selected>Medicine 1</option>
                  <option selected>Medicine 2</option>
                  <option selected>Medicine 3</option>
                </select>
              </div>
              <div className="form-group">
                <label for="exampleInputMessage">Message</label>
                <input type="text" class="form-control" id="exampleInputMessage"/>
              </div>
              <button type="submit" class="">Send</button>
            </form>
          </div>
        </div>
        <div className="col-md-7">
          <div className="detail-box">
            <h3>
              Get Now Medicines
            </h3>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

 

 

  

</body>

</div>



      )}
}
export default BuyNow
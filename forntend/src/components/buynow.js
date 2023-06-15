import React, {Component} from 'react';
import PharmNav from './navbarpharm';

class BuyNow extends Component{
    render(){
      return(
<div>


<body className="sub_page">

 {/*Start Navbar */}

<PharmNav/>
{/*End Navbar */}

 
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
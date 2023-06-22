import React from 'react';

import PharmNav2 from './pharmNav2';

const YourComponent = () => {
  const products = [
    {
      id: 1,
      imgSrc: 'img/p-6.jpg',
      name: 'Medicine',
      price: 30,
    },
    // Add more product objects here as needed
  ];

  return (
    <div>
      <PharmNav2/>
{/*       start landing*/}
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
{/*   end landing*/}

       <div className="layout_padding-top">
        <section className="discount_section ">
          {/* ... */}
        </section>
      </div>

      <section className="health_section layout_padding">
        <div className="health_carousel-container">
          <h2 className="text-uppercase">Vitamins & Supplements</h2>
          <div className="carousel-wrap layout_padding2">
            <div className="prod">
              {products.map((product) => (
                <div className="item" key={product.id}>
                  <div className="box">
                    <div className="btn_container">
                      <a href="/BuyNow">Buy Now</a>
                    </div>
                    <div className="img-box">
                      <img src={product.imgSrc} alt="" />
                    </div>
                    <div className="detail-box">
                     
                      <div className="text">
                        <h6>{product.name}</h6>
                        <h6 className="price">
                          <span>$</span> {product.price}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YourComponent;

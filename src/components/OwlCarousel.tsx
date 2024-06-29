import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
import "owl.carousel";
    
const OwlCarousel: React.FC = () => {
  useEffect(() => {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      stagePadding: 50,
      autoWidth: true,
      items: 1,
      center: true,
      responsiveClass: true,
      nav: true,
    });
  }, []);
  return (
        <>
<div className="owl-carousel owl-theme">
  <div className="item d-flex align-items-center justify-content-center">
    <div className="d-lg-flex flex-lg-row align-items-center justify-content-center">
      <div className="col-lg-3 d-flex justify-content-center">
        <img src="https://res.cloudinary.com/daoqz3rdr/image/upload/v1710090690/1966071e0e7f316b62332951ccdc129a_jqv6v4.png" className="rounded-circle" alt="..." style={{width: 80}} />
      </div>
      <div className="col-lg">
        <div className="rate-star mb-lg-2">
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
        </div>
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod”
        </p>
        <p className="fw-bold">John Dee 32, Bromo</p>
      </div>
    </div>
  </div>
  <div className="item d-flex align-items-center justify-content-center">
    <div className="d-lg-flex flex-lg-row align-items-center justify-content-center">
      <div className="col-lg-3 d-flex justify-content-center">
        <img src="https://res.cloudinary.com/daoqz3rdr/image/upload/v1710090690/1966071e0e7f316b62332951ccdc129a_jqv6v4.png" className="rounded-circle" alt="..." style={{width: 80}} />
      </div>
      <div className="col-lg">
        <div className="rate-star mb-lg-2">
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
        </div>
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod”
        </p>
        <p className="fw-bold">John Dee 32, Bromo</p>
      </div>
    </div>
  </div>
  <div className="item d-flex align-items-center justify-content-center">
    <div className="d-lg-flex flex-lg-row align-items-center justify-content-center">
      <div className="col-lg-3 d-flex justify-content-center">
        <img src="https://res.cloudinary.com/daoqz3rdr/image/upload/v1710090691/3f0d2d46b5a945c7deefdcc78b583af6_v4xcz3.png" className="rounded-circle" alt="..." style={{width: 80}} />
      </div>
      <div className="col-lg">
        <div className="rate-star mb-lg-2">
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
          <i className="fas fa-star" style={{color: '#f9cc00'}} />
        </div>
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod”
        </p>
        <p className="fw-bold">John Dee 32, Bromo</p>
      </div>
    </div>
  </div>
</div>
</>
    )
}

export default OwlCarousel;
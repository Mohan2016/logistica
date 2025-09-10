import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Required for carousel
import slide1 from "../assets/images/carousel-1.jpg";
import slide2 from "../assets/images/carousel-2.jpg";

const Slider = () => {
  return (
    <div className="container-fluid p-0 pb-5">
      <div id="homeCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="Slide 1" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(6, 3, 21, 0.5)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h5 className="text-white font_1 text-uppercase mb-3 animate__animated animate__slideInDown">
                      Transport & Logistics Solution
                    </h5>
                    <h1 className="font_st display-3 text-white animate__animated animate__slideInDown mb-4">
                      #1 Place For Your <span className="text-primary">Logistics</span> Solution
                    </h1>
                    <p className="font_pp fs-5ss fw-medium0 text-white mb-4 pb-2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    {/* <a href="#!" className="btn btn-primary py-md-3 px-md-5 me-3 animate__animated animate__slideInLeft">
                      Read More
                    </a>
                    <a href="#!" className="btn btn-secondary py-md-3 px-md-5 animate__animated animate__slideInRight">
                      Free Quote
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="Slide 2" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(6, 3, 21, 0.5)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h5 className="text-white text-uppercase mb-3 animate__animated animate__slideInDown">
                      Transport & Logistics Solution
                    </h5>
                    <h1 className="display-3 text-white animate__animated animate__slideInDown mb-4">
                      #1 Place For Your <span className="text-primary">Transport</span> Solution
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
                    </p>
                    <a href="#!" className="btn btn-primary py-md-3 px-md-5 me-3 animate__animated animate__slideInLeft">
                      Read More
                    </a>
                    <a href="#!" className="btn btn-secondary py-md-3 px-md-5 animate__animated animate__slideInRight">
                      Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;

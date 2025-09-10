import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import image from src/assets/images
import featureImg from "../assets/images/feature.jpg";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid overflow-hidden py-5 px-lg-0">
      <div className="container feature py-5 px-lg-0">
        <div className="row g-5 mx-lg-0">
          {/* Left Side - Text */}
          <div
            className="col-lg-6 feature-text"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* <h6 className="text-secondary text-uppercase mb-3">
              Our Features
            </h6> */}
            <h1 className="font_st2 mb-5">
              We Are Trusted Logistics Company Since 1990
            </h1>

            <div className="d-flex mb-5" data-aos="fade-up" data-aos-delay="300">
              <i className="fa fa-globe text-primary fa-3x flex-shrink-0"></i>
              <div className="ms-4">
                <h5>Worldwide Service</h5>
                <p className="mb-0">
                  Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem
                  sit clita duo justo magna erat amet
                </p>
              </div>
            </div>

            <div className="d-flex mb-5" data-aos="fade-up" data-aos-delay="500">
              <i className="fa fa-ship text-primary fa-3x flex-shrink-0"></i>
              <div className="ms-4">
                <h5>On Time Delivery</h5>
                <p className="mb-0">
                  Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem
                  sit clita duo justo magna erat amet
                </p>
              </div>
            </div>

            <div className="d-flex mb-0" data-aos="fade-up" data-aos-delay="700">
              <i className="fa fa-headphones text-primary fa-3x flex-shrink-0"></i>
              <div className="ms-4">
                <h5>24/7 Telephone Support</h5>
                <p className="mb-0">
                  Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem
                  sit clita duo justo magna erat amet
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            className="col-lg-6 pe-lg-0"
            data-aos="fade-right"
            data-aos-delay="100"
            style={{ minHeight: "400px" }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src={featureImg}
                alt="Feature"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

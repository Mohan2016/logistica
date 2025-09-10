import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Facts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Animate only oncee
    });
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container py-5">
        <div className="row g-5">

          {/* Left Column */}
          <div className="col-lg-6 facts" data-aos="fade-right">
            {/* <h6 className="text-secondary text-uppercase mb-3">Some Facts</h6> */}
            <h1 className="mb-5">#1 Place To Manage All Of Your Shipments</h1>
            <p className="mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="d-flex align-items-center">
              <i className="fa fa-headphones icon_font_hd fa-2x flex-shrink-0 p-3 text-white"></i>
              <div className="ps-4 phone_st">
                <h6>Call for any query!</h6>
                <h3 className="text-primary m-0">+012 345 6789</h3>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="row g-4 align-items-center">
              
              <div className="col-sm-6">
                <div className="bg-primary p-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                  <i className="fa fa-users fa-2x text-white mb-3"></i>
                  <h2 className="text-white mb-2">1234</h2>
                  <p className="text-white mb-0">Happy Clients</p>
                </div>
                <div className="bg-secondary p-4" data-aos="fade-up" data-aos-delay="400">
                  <i className="fa fa-ship fa-2x text-white mb-3"></i>
                  <h2 className="text-white mb-2">1234</h2>
                  <p className="text-white mb-0">Complete Shipments</p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="bg-success p-4" data-aos="fade-up" data-aos-delay="600">
                  <i className="fa fa-star fa-2x text-white mb-3"></i>
                  <h2 className="text-white mb-2">1234</h2>
                  <p className="text-white mb-0">Customer Reviews</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Facts;

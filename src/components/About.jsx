import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles
import about from '../assets/images/about.jpg';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation happens only once
    });
  }, []);

  return (
    <section id="about">
    <div className="container-fluid overflow-hidden py-5 px-lg-0">
      <div className="container about py-5 px-lg-0">
        <div className="row g-5 mx-lg-0">

          {/* Left Image */}
          <div
            className="col-lg-6 ps-lg-0"
            style={{ minHeight: "400px" }}
            data-aos="fade-right"
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src={about}
                alt="About Us"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 about-text" data-aos="fade-left">
            {/* <h6 className="text-secondary text-uppercase mb-3">About Us</h6> */}
            <h1 className="font_st2 mb-5">
              Quick Transport and Logistics Solutions
            </h1>
            <p className="mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="row g-4 mb-5">
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                <i className="fa fa-globe icon_font fa-3x text-primary mb-3"></i>
                <h5>Global Coverage</h5>
                <p className="m-0">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam justo.
                </p>
              </div>
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="400">
                <i className="fa fa-ship icon_font fa-3x text-primary mb-3"></i>
                <h5>On Time Delivery</h5>
                <p className="m-0">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam justo.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </section>
  );
};

export default About;

import React, { useEffect } from "react";
import AOS from "aos";

const EnquiryForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! 🚀");
  };

  return (
    <section className="formB_x">
    <div className="container-xxl py-5">
      <div className="container py-5">
        <div className="row form_dsgn_sect g-5 align-items-center">
          {/* Left Column */}
          <div
            className="col-lg-5 enquiry_form"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* <h6 className="text-secondary text-uppercase mb-3">Get A Quote</h6> */}
            <h1 className="font_st2 mb-5">Request A Free Quote!</h1>
            <p className="mb-5">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo erat amet
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
          <div
            className="col-lg-7"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            <div className="bg-light text-center p-5">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Mobile"
                      style={{ height: "55px" }}
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select
                      className="form-select border-0"
                      style={{ height: "55px" }}
                      required
                    >
                      <option value="">Select A Freight</option>
                      <option value="1">Freight 1</option>
                      <option value="2">Freight 2</option>
                      <option value="3">Freight 3</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0"
                      placeholder="Special Note"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn my_btn w-100 py-3"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default EnquiryForm;

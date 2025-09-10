import React from "react";

function Footer() {
  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5"
      style={{ marginTop: "6rem" }}
    >
        <section id="contact">
      <div className="container py-5">
        <div className="row g-5">
          {/* Address */}
          <div className="col-lg-4 col-md-6">
            <h4 className="text-light mb-4">Address</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker me-3"></i>123 Street, New York,
              USA
            </p>
            <p className="mb-2">
              <i className="fa fa-phone me-3"></i>+012 345 67890
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>info@example.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fa fa-youtube"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div className="col-lg-4 col-md-6">
            <h4 className="text-light mb-4">Quick Links</h4>
            <a className="btn btn-link" href="#">
                <i class="fa fa-angle-right" aria-hidden="true"></i> 
              About Us
            </a>
            <a className="btn btn-link" href="#">
                <i class="fa fa-angle-right" aria-hidden="true"></i> 
              Contact Us
            </a>
            <a className="btn btn-link" href="#">
                <i class="fa fa-angle-right" aria-hidden="true"></i> 
              Our Services
            </a>
            <a className="btn btn-link" href="#">
                <i class="fa fa-angle-right" aria-hidden="true"></i> 
              Terms &amp; Condition
            </a>
            <a className="btn btn-link" href="#">
                <i class="fa fa-angle-right" aria-hidden="true"></i> 
              Support
            </a>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6">
            <h4 className="text-light mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
               JITM skills
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Footer;

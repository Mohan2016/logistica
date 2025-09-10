import React, { useEffect } from "react";
import AOS from "aos";

// Import images from src/images
import service1 from "../assets/images/service-1.jpg";
import service2 from "../assets/images/service-2.jpg";
import service3 from "../assets/images/service-3.jpg";
import service4 from "../assets/images/service-4.jpg";
import service5 from "../assets/images/service-5.jpg";
import service6 from "../assets/images/service-6.jpg";

const services = [
  {
    id: 1,
    title: "Air Freight",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    img: service1,
    delay: 300,
  },
  {
    id: 2,
    title: "Ocean Freight",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    img: service2,
    delay: 500,
  },
  {
    id: 3,
    title: "Road Freight",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    img: service3,
    delay: 700,
  },
  {
    id: 4,
    title: "Train Freight",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    img: service4,
    delay: 300,
  },
  {
    id: 5,
    title: "Customs Clearance",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    img: service5,
    delay: 500,
  },
  {
    id: 6,
    title: "Warehouse Solutions",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    img: service6,
    delay: 700,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="services">
    <div className="container-xxl py-5">
      <div className="container py-5">
        <div className="text-center">
          {/* <h6 className="text-secondary text-uppercase">Our Services</h6> */}
          <h1 className=" font_st2 mb-5" style={{color:"#fff"}}>Explore Our Services</h1>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-item p-4">
                <div className="ms_hover overflow-hidden mb-4">
                  <img
                    className="img-fluid"
                    src={service.img}
                    alt={service.title}
                  />
                </div>
                <h4 className="ctnt_txt mb-3">{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services;

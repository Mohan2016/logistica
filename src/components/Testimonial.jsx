import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import client1 from "../assets/images/testimonial-1.jpg";
import client2 from "../assets/images/testimonial-2.jpg";
import client3 from "../assets/images/testimonial-3.jpg";
import client4 from "../assets/images/testimonial-4.jpg";

const testimonials = [
  {
    img: client1,
    name: "Client Name",
    profession: "Profession",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    img: client2,
    name: "Client Name",
    profession: "Profession",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    img: client3,
    name: "Client Name",
    profession: "Profession",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    img: client4,
    name: "Client Name",
    profession: "Profession",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="container-xxl py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          {/* <h6 className="text-secondary text-uppercase">Testimonial</h6> */}
          <h1 className="font_st2 mb-0">Our Clients Say!</h1>
        </div>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="p-4">
              <div className="testimonial-item p-4 my-3 bg-light position-relative">
                <i className="fa fa-quote-right fa-3x text-light_1 position-absolute top-0 end-0 mt-n3 me-4"></i>
                <div className="d-flex align-items-end mb-4">
                  <img
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src={t.img}
                    alt={t.name}
                    style={{ width: "80px", height: "80px" }}
                  />
                  <div className="ms-4">
                    <h5 className="txt_st0 mb-1">{t.name}</h5>
                    <p className="font_stup m-0">{t.profession}</p>
                  </div>
                </div>
                <p className="font_stup2 mb-0">{t.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;

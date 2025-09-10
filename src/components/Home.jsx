// src/components/Home.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';
import About from './About';
import Facts from './Facts';
import Services from './Services';
import Features from './Features';
import EnquiryForm from './EnquiryForm';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Facts />
      <Services />
      <Features />
      <EnquiryForm />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;

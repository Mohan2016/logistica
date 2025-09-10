// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/images/logo.png'; // adjust path as needed


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light0 shadow-sm">
      <div className="container">
        <a className="navbar-brand" id='#home' href="#home">
          <img src={logo} className="img-fluid logo" alt="Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Us</a>
            </li>
          </ul>
          <div className="btn_login ms-3fff">
            <a href='tel:+1-000-000-0000'><i className='fa fa-phone'></i> +1-000-000-0000</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

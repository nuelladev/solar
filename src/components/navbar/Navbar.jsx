import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <span className="gpt3__navbar-logo-text">
            <span className="green">Green</span>
            <span className="watt">watt</span>
            <br />
            <span className="energy">ENERGY</span>
          </span>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About Us</a></p> {/* Added About Us */}
          <p><a href="#wgpt3">Our Services</a></p>
          <p><a href="#possibility">Projects</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button">Get in Touch</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#about">About Us</a></p> {/* Updated to match desktop */}
              <p><a href="#wgpt3">Our Services</a></p>
              <p><a href="#possibility">Projects</a></p>
              <p><a href="#blog">Contact Us</a></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Work with the best sustainable energy company in Africa and beyond</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Get In Touch</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        {/* Replace image with Greenwatt Energy text-based logo */}
        <span className="gpt3__footer-logo-text">
          <span className="green">Green</span>
          <span className="watt">watt</span>
          <br />
          <span className="energy">ENERGY</span>
        </span>
        <br />
        <p> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>7 Osabhuohien Street off Lucky Way, Benin City, Edo, Nigeria</p>
        <p>Weinberghof 6a 99734, Germany</p>
        <p>+234-70410157281 or +4915210151625</p>
        <p>info@greenwattenergy.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 Quailone for Greenwatt Energy. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;

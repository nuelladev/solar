import React from 'react';
import possibilityImage from '../../assets/image6.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Get Started Today</h4>
      <h1 className="gradient__text">Transform Your Future with Sustainable Energy Solutions</h1>
      <p style={{ color: 'white' }}>
        At Green Watt Energy, we believe in the power of innovation to create lasting change.
        With our cutting-edge renewable energy systems, you can reduce costs, minimize your environmental impact,
        and enjoy a more sustainable and efficient future. Let us help you turn possibilities into reality.
      </p>
      <h4>Request a Quote or book a consultation to start your journey</h4>
    </div>
  </div>
);

export default Possibility;

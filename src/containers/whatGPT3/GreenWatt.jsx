import React from 'react';
import Feature from '../../components/feature/Feature';
import './GreenWatt.css';

const GreenWatt = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title={<span style={{ color: '#ff8b01' }}>Why Green Watt Energy?</span>}
        text={<span style={{ color: '#fff' }}>Green Watt Energy empowers businesses and homes with comprehensive electrical and solar energy solutions. We help you reduce energy costs, embrace sustainable practices, and create a brighter, greener future with cutting-edge renewable technologies.</span>}
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 style={{ color: '#ff482' }}>Powering a Sustainable Future</h1>
      <p>
        <a href="#services" className="explore__services-link" style={{ color: '#ff482' }}>
          Explore Our Services
        </a>
      </p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title={<span style={{ color: '#ff8b01' }}>Efficiency</span>}
        text={<span style={{ color: '#fff' }}>Maximize your energy savings with our expert solar system design and electrical installation services, reducing consumption while boosting your energy efficiency.</span>}
      />
      <Feature
        title={<span style={{ color: '#ff8b01' }}>Sustainability</span>}
        text={<span style={{ color: '#fff' }}>Make the switch to renewable energy sources through our custom solar designs and installations, reducing your environmental impact and contributing to a greener tomorrow.</span>}
      />
      <Feature
        title={<span style={{ color: '#ff8b01' }}>Professionalism</span>}
        text={<span style={{ color: '#fff' }}>Trust our experienced team of engineers and consultants to provide tailored electrical designs and project management services that meet your needs with the highest level of professionalism.</span>}
      />
      <Feature
        title={<span style={{ color: '#ff8b01' }}>Innovation</span>}
        text={<span style={{ color: '#fff' }}>Stay ahead of the curve with our innovative solutions, integrating the latest solar and electrical technologies, and our ongoing online electrical training programs.</span>}
      />
      <Feature
        title={<span style={{ color: '#ff8b01' }}>Reliability</span>}
        text={<span style={{ color: '#fff' }}>Count on our solar and electrical installations for dependable, uninterrupted energy solutions, ensuring that your home or business operates smoothly at all times.</span>}
      />
      <Feature
        title={<span style={{ color: '#ff8b01' }}>Cost Savings</span>}
        text={<span style={{ color: '#fff' }}>Lower your energy bills and reduce maintenance costs with our energy-efficient solar systems, electrical installations, and ongoing service support to ensure long-term savings.</span>}
      />
    </div>
  </div>
);

export default GreenWatt;

import React from 'react';
import { FaAward, FaBolt, FaLeaf, FaLightbulb, FaRegHandshake, FaTools } from 'react-icons/fa'; // Sample icons
import './brand.css';

const benefits = [
  { text: 'Efficiency', icon: <FaBolt /> },
  { text: 'Professionalism', icon: <FaRegHandshake /> },
  { text: 'Innovation', icon: <FaLightbulb /> },
  { text: 'Expertise', icon: <FaTools /> },
  { text: 'Sustainability', icon: <FaLeaf /> },
  { text: 'Excellence', icon: <FaAward /> },
];

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div className="gpt3__brand-marquee">
      {benefits.map((benefit, index) => (
        <div key={index} className="gpt3__brand-item">
          <span className="icon">{benefit.icon}</span>
          <span className="text">{benefit.text}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Brand;

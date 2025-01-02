import React from 'react';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';

import './Teams.css';

const Teams = () => (
  <div className="teams__section">
    <div className="teams__header">
      <strong>
        Expert Teams Dedicated to Meeting Your Needs <br /> Across Africa
      </strong>
    </div>

    <div className="teams__container">
      <div className="team__member">
        <img src={image1} alt="Team Member 1" className="team__image" />
        <h3>Engr. Elvis Obamwonyi</h3>
        <p style={{ color: '#ff8b01', fontWeight: 'bold' }}>Managing Director/Co-founder</p>
        <p>M.Eng - Germany</p>
      </div>
      <div className="team__member">
        <img src={image5} alt="Team Member 2" className="team__image" />
        <h3>Engr Eghosa Constance</h3>
        <p style={{ color: '#ff8b01', fontWeight: 'bold' }}>Electrical Engineer/ Co-founder</p>
        <p>M.Sc - United Kingdom</p>
      </div>
      <div className="team__member">
        <img src={image2} alt="Team Member 2" className="team__image" />
        <h3>Engr Koorosh Parvaz</h3>
        <p style={{ color: '#ff8b01', fontWeight: 'bold' }}>Renewable Energy Consultant</p>
        <p>M.Eng - Germany</p>
      </div>
      <div className="team__member">
        <img src={image3} alt="Team Member 3" className="team__image" />
        <h3>Enofe Harrison</h3>
        <p style={{ color: '#ff8b01', fontWeight: 'bold' }}>Account Manager</p>
        <p>M.Sc - United Kingdom</p>
      </div>
      <div className="team__member">
        <img src={image4} alt="Team Member 4" className="team__image" />
        <h3>Engr Idiaru Happiness</h3>
        <p style={{ color: '#ff8b01', fontWeight: 'bold' }}>Project Engineer</p>
        <p>M.Sc - United Kingdom</p>
      </div>
    </div>
  </div>
);

export default Teams;

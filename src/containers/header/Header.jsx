import React from 'react';
import ai from '../../assets/hero.jpg';
import people from '../../assets/people.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1>
        <span style={{ color: '#ff4820' }}>Powering</span>{' '}
        <span style={{ color: '#ff8b01' }}>Sustainable</span>{' '}
        <span style={{ color: '#ffffff' }}>Futures</span>
      </h1>
      <p>
        From innovative solar designs to expert project management, we provide
        comprehensive electrical solutions, consultancy, and training. Empower
        your projects with professional installation, procurement, and the
        latest in renewable technology.
      </p>

      {/* Colored line instead of the input section */}
      <div className="gpt3__header-content__line" />

      <div className="gpt3__header-content__people">
        <img src={people} alt="People" />
        <p>We&apos;ve worked with over 500 clients in the last 2 years</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="AI Illustration" />
    </div>
  </div>
);

export default Header;

import React from 'react';

import { Brand, CTA, Navbar } from './components';
import Teams from './components/team/Teams'; // Import the Teams component

// eslint-disable-next-line import/named
import { Blog, Features, Footer, GreenWatt, Header, Possibility } from './containers';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <GreenWatt />
    <Teams />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;

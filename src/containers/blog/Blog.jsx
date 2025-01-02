import React from 'react';
import Article from '../../components/article/Article';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Projects = () => (
  <div className="gpt3__blog section__padding" id="projects">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Our Most Recent Projects.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="August 15, 2024" text="1.8kWp standalone PV installation for rsidential cleaning power supply." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="September 20, 2024" text="Solar water pump project at Evbohia Village in Orhonmwon local Government area in Benin city." />
        <Article imgUrl={blog03} date="July 5, 2024" text="Domestic installation of lightening and accessories" />
        <Article imgUrl={blog04} date="November 10, 2024" text="Repairs and Installation of LV electrical accessories in Tallingding Gambia." />
        <Article imgUrl={blog05} date="November 30, 2024" text="EPC: 10kWh battery storage with 12kWp solar panels in GRA, Benin City." />
      </div>
    </div>
  </div>
);

export default Projects;

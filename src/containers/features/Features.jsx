import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Project Management and Consultancy',
    text: 'Our expert team ensures efficient and cost-effective project management, from inception to completion. We provide consultancy to guide you through every phase of your project.',
  },
  {
    title: 'Solar System Design',
    text: 'We offer cutting-edge solar system designs tailored to meet the unique energy needs of your project, ensuring maximum efficiency and sustainability.',
  },
  {
    title: 'Electrical and Solar Installation',
    text: 'Our skilled technicians handle the installation of electrical and solar systems, ensuring a seamless setup and reliable operation for years to come.',
  },
  {
    title: 'Electrical Design',
    text: 'We provide comprehensive electrical designs, from layout to implementation, ensuring safety, efficiency, and compliance with all regulations.',
  },
  {
    title: 'Procurements',
    text: 'Our procurement services focus on sourcing quality materials and equipment at competitive prices, ensuring the best value for your investment.',
  },
  {
    title: 'Online Electrical Training',
    text: 'We offer online training programs for individuals and organizations to help them gain in-depth knowledge and skills in electrical and solar systems, taught by industry experts.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__texts">
        Transform Your Future with Our Expertise in Renewable Energy and Electrical Solutions
      </h1>
      <p>Request for a Quote Today</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

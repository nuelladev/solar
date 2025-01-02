import React, { useState } from 'react';
import './cta.css';

const CTA = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUrl = 'https://formspree.io/f/your_form_id'; // Replace with your Formspree form ID

    fetch(formUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setStatus('success');
          setFormData({ email: '', message: '' });
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'));
  };

  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p style={{ color: 'orangered' }}>Get in Touch</p>
        <h3>
          We are good at what we do! Request a quote or reach out to learn more about our services!
        </h3>
      </div>
      <div className="gpt3__cta-form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {status === 'success' && <p className="success-message">Message sent successfully!</p>}
        {status === 'error' && <p className="error-message">Something went wrong. Please try again.</p>}
      </div>
    </div>
  );
};

export default CTA;

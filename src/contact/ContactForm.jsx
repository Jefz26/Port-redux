// ContactForm.jsx
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="cyber-form">
      <div className="form-group">
        <label htmlFor="name" className="cyber-label">
          USER_NAME
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="cyber-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="cyber-label">
          USER_EMAIL
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="cyber-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="cyber-label">
          MESSAGE_SUBJECT
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="cyber-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="cyber-label">
          MESSAGE_CONTENT
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="cyber-textarea"
          rows="5"
          required
        />
      </div>

      <button type="submit" className="cyber-button primary submit-btn">
        TRANSMIT_MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
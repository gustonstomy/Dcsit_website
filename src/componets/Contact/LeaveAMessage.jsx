import React, { useState } from 'react';
import './LeaveAMessage.css';

const LeaveMessageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'email') {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address.',
      });
    } else {
      setErrors({
        ...errors,
        email: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add further form submission handling logic here
  };

  return (
    <div className="leave-message-container">
      <h1>Leave us a Message</h1>
      <p>Leave us a message and we will get back to you</p>
      <form className="leave-message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit Message</button>
      </form>
    </div>
  );
};

export default LeaveMessageForm;

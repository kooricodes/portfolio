import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's connect and collaborate on something great!😄</p>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <h3>Social Links</h3>
              <div className="social-links">
                <a href="https://github.com/kooricodes" className="social-link github" title="GitHub" target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/thomas-njue-331a01289/" className="social-link linkedin" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>
                </a>
                <a href="https://x.com/buildwithkoori" className="social-link twitter" title="Twitter" target="_blank" rel="noopener noreferrer">
                  <span>Twitter</span>
                </a>
              </div>
            </div>

            <div className="info-card">
              <h3>Quick Contact</h3>
              <div className="quick-contact">
                <p className="contact-item">
                  <span className="label">Phone number:</span>
                  <span>0117258804</span>
                </p>
                <p className="contact-item">
                  <span className="label">Email:</span>
                  <a href="mailto:thomas@example.com">buildwithkoori@gmail.com</a>
                </p>
                <p className="contact-item">
                  <span className="label">Location:</span>
                  <span>Nairobi, Kenya</span>
                </p>
              </div>
            </div>

            <div className="info-card">
              <h3>Availability</h3>
              <p className="availability-text">
                Open to collaborations, freelance projects, and opportunities in software engineering and cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

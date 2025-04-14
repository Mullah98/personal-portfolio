import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Contact.css';

const Contact = () => {
  const [buttonText, setButtonText] = useState('Send Message');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setButtonText('Message Sent');
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="main-container">
        <h2>Contact Me</h2>
        <h3>
          Feel free to reach out to discuss potential <span>opportunities</span>,{" "}
          <span>collaborations</span>, or just to <span>connect</span>.
        </h3>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="hidden" name="access_key" value="2da3a108-8e9c-457e-b0aa-52d4af9f9ef2" />
          <input type="hidden" name="subject" value="Email from Portfolio" />

          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Your Email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" placeholder="Subject of Your Message" required />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" placeholder="Your Message" required></textarea>
        <div className='form-buttons'>
          <button type="submit" disabled={isSubmitting}>{buttonText}</button>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="scroll-top-btn"
            aria-label="Scroll to top"
            >
            ↑
          </Link>
        </div>
        </form>
        <p>
          Or email me directly at:{" "}
          <a href="mailto:ibrahimul106@gmail.com">ibrahimul106@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;

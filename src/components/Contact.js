import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Let's Connect</h2>
      <p>If you’d like to work together or just say hi, feel free to reach out!</p>

      <div className="contact-links">
        <a href="mailto:your.email@example.com" className="contact-button">Email Me</a>
        <a href="https://www.linkedin.com/in/edrees-amiri/" target="_blank" rel="noopener noreferrer" className="contact-button">
          LinkedIn
        </a>
        <a href="https://github.com/crptk" target="_blank" rel="noopener noreferrer" className="contact-button">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;

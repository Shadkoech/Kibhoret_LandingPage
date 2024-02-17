import React from "react";

const Contact = () => {
  const email = 'kibhoret@kibhoret.com';
  const subject = 'Material Flow System Design';

  const handleContactUsClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };



  return (
    <div id="contact" className="contact-page-wrapper">
      <h1 className="primary-heading">Need assistance? reach us.</h1>
  
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`} onClick={handleContactUsClick}>
          <button className="secondary-button">Contact Us</button>
          </a>
  
    </div>
  );
};

export default Contact;

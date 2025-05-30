import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-sub">Have a question or want to work with us? Reach out today!</p>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <h3 className="get-in-touch">Get in Touch</h3>
          <p><strong>Email:</strong> info@marketingentertainment.com</p>
          <p><strong>Phone:</strong> +91 99999 99999</p>
          <p><strong>Location:</strong> Mumbai, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
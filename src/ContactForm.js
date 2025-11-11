import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Appointment Form */}
        <div className="form-box">
      
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea placeholder="Enter your address" rows="3" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit →</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="info-box">
          <h2>Contact Info</h2>
          <img src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/pexels-brittany-17733-87812.jpg?v=1757337749" alt="Support" className="info-img" />

          <p><strong>Phone:</strong> 123-456-7890</p>
          <p><strong>Email:</strong> hello@healthcare.com</p>
          <p><strong>Location:</strong> 123 Anywhere St, Any City, 12345</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

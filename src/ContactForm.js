import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "4958ad24-02e2-4681-8174-e998d6b3fc67");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Appointment Form */}
        <div className="form-box">
      
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea name="address" placeholder="Enter your address" rows="3" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit →</button>

            {result && (
              <div className={`form-result ${result.includes('Successfully') ? 'success' : 'error'}`}>
                {result}
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="info-box">
          <h2>Contact Info</h2>
          <img src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/pexels-brittany-17733-87812.jpg?v=1757337749" alt="Support" className="info-img" />

   
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

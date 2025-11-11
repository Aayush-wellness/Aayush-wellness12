import React from "react";
import "./HeroSection1.css";

const HeroSection1 = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Left side doctor image + cards */}
        <div className="hero-left">
        </div>

        {/* Right side text */}
        <div className="hero-right">
          <h1>Have questions or need assistance?</h1>
          <p>
          Fill out the form below and our team will get back to you shortly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;

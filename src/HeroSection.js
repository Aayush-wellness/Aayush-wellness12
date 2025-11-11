import React, { useState, useEffect } from 'react';
import "./HeroSection.css";
import DecryptedText from './DecryptedText';
import BlurText from './BlurText';

function HeroSection() {

  useEffect(() => {
    // Load Elfsight script only once
    const existing = document.getElementById('elfsight-platform-script');
    if (!existing) {
      const script = document.createElement('script');
      script.id = 'elfsight-platform-script';
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    // 🧩 Hide the "Free Instagram Feed widget" badge dynamically
    const hideElfsightBadge = setInterval(() => {
      const badge = document.querySelector('.eapps-widget-toolbar, .eapps-link, a[href*="elfsight.com"]');
      if (badge) {
        badge.style.display = 'none';
        badge.style.opacity = '0';
        badge.style.visibility = 'hidden';
        badge.style.pointerEvents = 'none';
        clearInterval(hideElfsightBadge);
      }
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(hideElfsightBadge);
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div className="Block_container__Nv4cD Block_isCream__VRtaM TextMedia_container__1OeME TextMedia_isCream__1R3ST snipcss-6nyWs blocksb !bg-black" >
        <div>
          <div className="Container_container__NvvWg TextMedia_wrapper__Uesgc">
            <div className="TextMedia_content__jyQfX" style={{ fontFamily: "ROGBold", color: "#33cccc" }}>
              <span className="TextMedia_eyebrow__y7WFh style-pFboy" id="style-pFboy">Our story</span>

              <div className='text-[white] font-bold md:text-4xl text-[25px]'>
                <BlurText
                  text="BUILDING A FUTURE BY TRANSFORMING WELLNESS, NATURALLY"
                  animateOn="view"
                  revealDirection="center"
                  className='text-white font-bold md:text-6xl text-[25px] md:text-[60px]'
                />
              </div>

              <div className="RichText_container__wB3Cy TextMedia_copy__Ne6y6 style-STHt3" id="style-STHt3">
                <p id="style-ZG7s3" className="style-ZG7s3 text-[21px] text-white" style={{ fontFamily: "Minionpro", color: "white" }}>
                  Aayush Wellness was founded with a vision to make holistic well-being accessible to all. We believe true wellness comes from balancing mind, body, and soul. Our journey began with the goal of blending ancient Ayurvedic wisdom with modern science to create high-quality health and wellness solutions. Today, we continue to innovate, offering premium supplements and lifestyle products that empower individuals to lead healthier, happier lives.
                </p>
              </div>

              <div className="MultiButton_multiButton__iqSU8 TextMedia_multiButton__ISln4 style-q2bJL" id="style-q2bJL">
                <a style={{ background: "#33cccc" }} className="BaseButton_baseButton__gki38" href="/about/company-intro">
                  <span>About us</span>
                  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z" fill="currentColor"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="TextMedia_mediaWrapper__e1HP_ style-POjkF" id="style-POjkF">
              {/* Instagram Feed */}
            <div class="elfsight-app-c3a5dbb4-1648-42d0-a8bf-48a5ab757951" data-elfsight-app-lazy></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

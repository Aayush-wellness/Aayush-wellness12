import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AccordionItem from "./AccordionItem";
import NewFooter from "./NewFooter";
import MissionHeader from "./MissionHeader";

let faqs = require("./faqs.json");

// Direct MP4 video URLs (no HLS needed)
const DESKTOP_VIDEO_URL =
  "https://res.cloudinary.com/dhofjux9o/video/upload/v1762522577/cpu2q2nw2hqz1sxv4tto_brmd8t.mp4";
const MOBILE_VIDEO_URL =
  "https://res.cloudinary.com/dhofjux9o/video/upload/v1762841404/wzndszlpi7gdabmjkqtg_lyq1pc.mp4";

const Accordionweb = () => {
  const [active, setActive] = useState(faqs[0].id);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Direct MP4 loading - no HLS needed
    if (desktopVideoRef.current) {
      desktopVideoRef.current.src = DESKTOP_VIDEO_URL;
      desktopVideoRef.current.load();
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.src = MOBILE_VIDEO_URL;
      mobileVideoRef.current.load();
    }
  }, []);

  const handleToggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <>
      <style>
        {`
        

        @keyframes scrollAnimation {
          0% { transform: translateY(0); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0); }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 30;
        }

        .mouse {
          width: 30px;
          height: 50px;
          border: 2px solid white;
          border-radius: 20px;
          position: relative;
        }

        .scroll-line {
          position: absolute;
          width: 2px;
          height: 10px;
          background-color: white;
          left: 50%;
          top: 8px;
          transform: translateX(-50%);
          animation: scrollAnimation 1.5s infinite;
        }
      `}
      </style>
      <MissionHeader />

      <div className="relative h-[100vh] md:h-[100vh] overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black bg-opacity-40" />

        {/* Desktop Video */}
        <video
          ref={desktopVideoRef}
          className="w-full h-full object-cover hidden md:block relative z-0"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />

        {/* Mobile Video */}
        <video
          ref={mobileVideoRef}
          className="w-full h-full object-cover md:hidden block relative z-0"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />

        {/* Text over Video */}
        <div className="absolute inset-0 flex flex-col items-start justify-end md:justify-center text-left px-6 md:px-[5vw] z-20 pb-[15vh] md:pb-0">
          <h1
            className="text-white font-semibold"
            style={{
              fontSize: "56px",
              lineHeight: "100%",
            }}
          >
            <span className="hidden md:inline" style={{ fontSize: "5.8vw", fontFamily: "ROGBold" }}>
              Invest, Impact, Inspire
            </span>
            <span className="md:hidden block leading-[100%]" style={{ fontFamily: "ROGBold" }}>
              <span className="block">Invest</span>
              <span className="block">Impact</span>
              <span className="block">Inspire</span>
            </span>
          </h1>
          <p
            className="text-white font-medium mt-4"
            style={{
              fontSize: "16px",
              lineHeight: "180%",
              maxWidth: "90%",
            }}
          >
            <span
              className="hidden md:inline"
              style={{ fontSize: "1.25vw", maxWidth: "38.4vw", fontFamily: "Minionpro" }}
            >
              Scalable, sustainable, and aligned with tomorrow’s health needs.
            </span>
            <span className="md:hidden block" style={{ fontFamily: "Minionpro" }}>
              Scalable, sustainable, and aligned with tomorrow’s health needs.
            </span>
          </p>
        </div>

        {/* Scroll Indicator - Only visible on large screens */}
        <div className="scroll-indicator hidden lg:block">
          <div className="mouse">
            <div className="scroll-line"></div>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="first" style={{ backgroundColor: "#ffffff" }}>
        <div className="container-fluid mt-5 mb-5 flex justify-center">
          <div className="w-full max-w-[1168px] p-2">
            <div className="row justify-content-center">
              <div className="col-12">
                <div
                  className="card"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "none",
                    width: "100%",
                  }}
                >
                  <div className="card-body p-3">
                    <h4 className="form-heading text-primary text-start text-[34px] mt-3 mb-8" style={{ fontFamily: "ROGBold" }}>
                      REPORTS
                    </h4>
                    {faqs.map((faq) => (
                      <AccordionItem
                        key={faq.id}
                        active={active}
                        handleToggle={handleToggle}
                        faq={faq}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewFooter />
    </>
  );
};

export default Accordionweb;

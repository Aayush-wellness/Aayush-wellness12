import React, { useState, useEffect } from "react";
import "./Stackimage.css";
import BlurText from "./BlurText";
import { motion, AnimatePresence } from "framer-motion";

const sectionsData = [
  {
    videoSrc: "https://cdn.shopify.com/videos/c/o/v/adf5809e8ccd460cbbf92b9c9de4103c.mp4", // Unique video link for Gummies
    imageSrc: null,
    title: "SLEEP PEACEFULLY, GLOW NATURALLY",
    description: `Wake up refreshed and radiant with our expertly crafted Sleep & Beauty Gummies. Infused with powerful ingredients to support deep sleep and enhance natural beauty from within.
        <br/>
        <div><br/><b>Melatonin & Chamomile</b> – Promotes restful sleep & relaxation</div>
        <div><b>Glutathione & Biotin</b> – Enhances skin glow & strengthens hair</div>
        <div><b>Hyaluronic Acid & Collagen</b> – Boosts hydration & skin elasticity</div>`,
    link: "https://aayushlife.com/",
    linkText: "Explore Gummies",
  },
  {
    videoSrc: "https://cdn.shopify.com/videos/c/o/v/9ae83fdffa0e4715b186839c452deadd.mp4", // Unique video link for Pan Masala
    imageSrc: null,
    title: "PREMIUM BLEND, AUTHENTIC FLAVOR",
    description: `Crafted with the finest ingredients, our Pan Masala delivers an exquisite taste and rich aroma. Experience tradition with every bite, enhanced by a perfect balance of flavors.
        <br/>
        <div><br/><b>Authentic Spices</b> – A signature blend for a refreshing taste</div>
        <div><b>Premium Ingredients</b> – Handpicked for superior quality</div>`,
    link: "https://aayushveda.in/",
    linkText: "Discover More",
  },
  {
    videoSrc: "https://cdn.shopify.com/videos/c/o/v/813b7c6a2fb54179886893f2b4086b5f.mp4", // Unique video link for new product 1
    imageSrc: null,
    title: "Healthcare at Your Fingertips", // Changed name
    description: `
Book health checkups anytime, anywhere with Aayush Labs your trusted online health platform. Enjoy free home sample collection, fast reports, and doctor consultations all from the comfort of your home.

        <br/>
         <div><br/Free Home Sample Collection – No need to step out, we come to you</div>
      
         <div><b>12-Hour Digital Reports</b> – Get results delivered straight to your phone</div>
         <div><b>Fast Service</b> – From Sample to Report in Hours</div>
        <div><b>Doctor Consultations</b> – Speak with our experts from home</div>`,

    link: "https://aayushlabs.com/collections/our-doctors",
    linkText: "Discover Aayush Labs",
  },
  // {
  //   videoSrc: "https://www.aayushwellness.com/9bb64947-9ecf-439e-ba6e-529d76ecbaad", // Unique video link for new product 2
  //   imageSrc: null,
  //   title: "NEW PRODUCT SECTION B", // Changed name
  //   description: `This is the second of the two new product sections. It cycles with New Product Section A.`,
  //   link: "#",
  //   linkText: "Check B",
  // },
];

const StackImage = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0); // 0 for Sleep Gummies, 1 for Pan Masala, 2 for New A, 3 for New B

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveContentIndex((prevIndex) => (prevIndex + 1) % sectionsData.length);
    }, 9000); // Change content every 9 seconds
    return () => clearInterval(interval);
  }, []);

  const currentSection = sectionsData[activeContentIndex];

  return (
    <div className={`Block_container__Nv4cD Block_isCream__VRtaMm StackedContent_container__DfJEU snipcss-YBdoL blocks ${activeContentIndex % 2 === 0 ? "active-background" : ""}`}>
      <div className="Container_container__NvvWg StackedContent_wrapper__2JCtc snipcss0-1-1-2 style-ee6GF" id="style-ee6GF">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeContentIndex} // Key changes when activeContentIndex changes, triggering re-render and animation
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="StackedContent_mediaContainer__5BNSM"
          >
            <div className={`StackedContent_mediaWrapper___gRyP StackedContent_isActive__U4mo3`}>
              <div>
                {currentSection.videoSrc ? (
                  <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    alt={currentSection.title}
                    loading="lazy"
                    width="1528"
                    height="1644"
                    decoding="async"
                    data-nimg="1"
                    className="StackedContent_media__haQuf style-mKRVT image-transition"
                    src={currentSection.videoSrc}
                  />
                ) : (
                  <img
                    alt={currentSection.title}
                    loading="lazy"
                    width="1528"
                    height="1644"
                    decoding="async"
                    data-nimg="1"
                    className="StackedContent_media__haQuf style-9BbQF image-transition"
                    src={currentSection.imageSrc}
                  />
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeContentIndex} // Key changes when activeContentIndex changes, triggering re-render and animation
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="StackedContent_contentWrapper__6MXgH snipcss0-2-2-10"
          >
            <div
              key={activeContentIndex}
              data-section-index={activeContentIndex}
              className={`StackedContent_content__QTFkv StackedContent_isActive__U4mo3`}
            >
              <BlurText
                text={currentSection.title}
                delay={150}
                animateBy="words"
                direction="top"
                className="md:text-6xl mb-8 text-[25px] font-bold text-white" style={{ fontFamily: "ROGBold" }}
              />
              <p className="text-[20px] text-white" style={{ fontFamily: "Minionpro" }} dangerouslySetInnerHTML={{ __html: currentSection.description }} />
              <a
                className="BaseButton_baseButton__gki38 BaseButton_isLushGreen__Of4fS BaseButton_hasOutline__IILGk StackedContent_cta__9aF3N"
                text="Learn more"
                href={currentSection.link}
              >
                <span className="text-[20px]" style={{ fontFamily: "Minionpro", color: "#000000" }}>{currentSection.linkText}</span>
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StackImage;

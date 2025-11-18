import { useState, useEffect, useRef } from "react";

const Slider = () => {
  const [current, setCurrent] = useState(1);
  const wrapperRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "",
      image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Artboard_5_Mobile_b.jpg?v=1763386069",
      desktopImage: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Blinkit_AWL_Website_Banner_05-11-2025_B.jpg?v=1763386054", // Desktop image URL - replace tomorrow
      buttonText: "SHOP NOW"
    },
    {
      id: 2,
      title: "Exhausted? Meet Your Sleep Buddy ",
      image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Artboard_1_Mobile.jpg?v=1762326373",
      desktopImage: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Gummies_Website_Banner_04-11-2025_n.jpg?v=1762240729", // Desktop image URL - replace tomorrow
      buttonText: "SHOP NOW",
    },
    {
      id: 3,
      title: "Tired Skin? Try This ",
      image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Artboard_2_Mobile.jpg?v=1762326361",
      desktopImage: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Gummies_Website_Banner_04-11-2025_B.jpg?v=1762240729", // Desktop image URL - replace tomorrow
      buttonText: "SHOP NOW",
    },
    {
      id: 4,
      title: "Herbal in Every Bite",
      image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Artboard_4_Mobile.jpg?v=1762347166",
      desktopImage: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Herbal_Website_Banner_05-11-2025_H_1.jpg?v=1762347166", // Desktop image URL - replace tomorrow
      buttonText: "SHOP NOW",
    },
    {
      id: 5,
      title: " Your Doctor, Just a Click Away",
      image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Artboard_3_Mobile_3.jpg?v=1762429458",
      desktopImage: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/lab_Website_Banner_04-11-2025_L_3.jpg?v=1762429462", // Desktop image URL - replace tomorrow
      buttonText: "SHOP NOW",
    },


  

  ];

  const loopSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const goNext = () => setCurrent((p) => p + 1);
  const goPrev = () => setCurrent((p) => p - 1);

  useEffect(() => {
    const interval = setInterval(goNext, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (current === loopSlides.length - 1) {
      setTimeout(() => {
        if (wrapperRef.current) wrapperRef.current.style.transition = "none";
        setCurrent(1);
        setTimeout(() => {
          if (wrapperRef.current)
            wrapperRef.current.style.transition =
              "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
        }, 20);
      }, 600);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <>
      <style>{`
        .container-hero {
          width: 100%;
          padding: 0 4%;
          
          overflow: hidden;
          position: relative;
          margin-top: 90px;
        }

        .hero-wrapper {
          display: flex;
          height: 100%;
          transition: transform .6s cubic-bezier(0.4,0,0.2,1);
        }

        .hero-slide {
          flex: 0 0 93%;
          margin: 0 0.5%;
          position: relative;
          opacity: 0.6;
          transform: scale(.94);
          transition: .4s;
          border-radius: 22px;
          overflow: hidden;
        }

        .hero-slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-img-desktop {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .hero-img-desktop {
            display: none;
          }
        }

        @media (min-width: 769px) {
          .hero-img {
            display: none;
          }
        }

        .text-content {
          position: absolute;
          bottom: 32%;
          left: 60px;
          color: #fff;
          z-index: 10;
        
        }

        .text-content h1 {
          font-size: 72px;
          font-weight: 900;
          line-height: 1.1;
          font-family: ROGBold;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          margin: 0;
        }

        .word {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          margin-right: 0.3em;
        }

        .hero-slide.active .word {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-slide.active .word:nth-child(1) { transition-delay: 0.2s; }
        .hero-slide.active .word:nth-child(2) { transition-delay: 0.4s; }
        .hero-slide.active .word:nth-child(3) { transition-delay: 0.6s; }
        .hero-slide.active .word:nth-child(4) { transition-delay: 0.8s; }
        .hero-slide.active .word:nth-child(5) { transition-delay: 1.0s; }
        .hero-slide.active .word:nth-child(6) { transition-delay: 1.2s; }
        .hero-slide.active .word:nth-child(7) { transition-delay: 1.4s; }
        .hero-slide.active .word:nth-child(8) { transition-delay: 1.6s; }

        .shop-btn {
          position: absolute;
          right: 60px;
          bottom: 34%;
          background: #33CCCC;
          color: #000;
          padding: 16px 42px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.2s;
        }

        .hero-slide.active .shop-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .divider-line {
          position: absolute;
          right: 60px;
          bottom: 38%;
          width: 150px;
          height: 3px;
          background: #fff;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.4s;
        }

        .hero-slide.active .divider-line {
          opacity: 1;
          transform: translateY(0);
        }

        .dots-row {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .dot:hover {
          background: rgba(255, 255, 255, 0.7);
          border-color: rgba(255, 255, 255, 0.6);
          transform: scale(1.2);
        }
        
        .dot.active { 
          background: #fff;
          border-color: #fff;
          transform: scale(1.3);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
        }

        .arrow-left, .arrow-right {
          position: absolute;
          bottom: 90px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 60px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arrow-left:hover, .arrow-right:hover {
          transform: scale(1.1);
        }

        .arrow-left { 
          left: 20%;
          transform: translateX(-60px);
        }
        .arrow-right { 
          right: 20%;
          transform: translateX(60px);
        }

        .arrow-left:hover {
          transform: translateX(-60px) scale(1.1);
        }
        .arrow-right:hover {
          transform: translateX(60px) scale(1.1);
        }

        .custom-arrow {
          position: relative;
          width: 35px;
          height: 2px;
          background: #fff;
          transition: all 0.3s ease;
        }

        .custom-arrow::before {
          content: '';
          position: absolute;
          width: 12px;
          height: 2px;
          background: #fff;
          transition: all 0.3s ease;
        }

        .custom-arrow::after {
          content: '';
          position: absolute;
          width: 12px;
          height: 2px;
          background: #fff;
          transition: all 0.3s ease;
        }

        .arrow-left .custom-arrow::before {
          left: 0;
          top: -1px;
          transform: rotate(35deg);
          transform-origin: left center;
        }

        .arrow-left .custom-arrow::after {
          left: 0;
          top: 1px;
          transform: rotate(-35deg);
          transform-origin: left center;
        }

        .arrow-right .custom-arrow::before {
          right: 0;
          top: -1px;
          transform: rotate(-35deg);
          transform-origin: right center;
        }

        .arrow-right .custom-arrow::after {
          right: 0;
          top: 1px;
          transform: rotate(35deg);
          transform-origin: right center;
        }

        /* Responsive font sizes for different screen sizes */
        @media (min-width: 1024px) and (max-width: 1366px) {
          .text-content h1 {
            font-size: 58px;
          }
        }

        @media (min-width: 1367px) and (max-width: 1920px) {
          .text-content h1 {
            font-size: 65px;
          }
        }

        @media (min-width: 1921px) {
          .text-content h1 {
            font-size: 78px;
          }
        }

        /* Tablet font sizes */
        @media (min-width: 769px) and (max-width: 1023px) {
          .text-content h1 {
            font-size: 52px;
          }
        }

        @media (max-width: 768px) {
          .container-hero {
         
            padding: 0 1%;
         
            width: 100%;
          }

          .hero-slide {
            flex: 0 0 94%;
            margin: 0 3%;
            opacity: 1;
            transform: scale(1);
          }

          .hero-slide.active {
            opacity: 1;
            transform: scale(1);
          }

          .text-content {
            bottom: 20%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            width: 190%;
          }

          .text-content h1 {
            font-size: 42px;
            line-height: 1.2;
            margin-bottom: 40px;
          }

          .shop-btn {
            left: 50%;
            transform: translateX(-50%);
            bottom: 15%;
            right: auto;
            padding: 14px 28px;
            font-size: 15px;
          }

          .divider-line {
            left: 50%;
            transform: translateX(-50%);
            bottom: 20%;
            right: auto;
            width: 100px;
            height: 3px;
          }

          .dots-row {
            bottom: 30px;
            gap: 10px;
          }

          .dot {
            width: 10px;
            height: 10px;
            border: 1.5px solid rgba(255, 255, 255, 0.4);
          }

          .dot.active {
            transform: scale(1.2);
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
          }

          .arrow-left, .arrow-right {
            bottom: 60px;
            width: 50px;
            height: 30px;
          }

          .arrow-left { 
            left: 25%;
            transform: translateX(-50px);
          }
          .arrow-right { 
            right: 25%;
            transform: translateX(50px);
          }

          .arrow-left:hover {
            transform: translateX(-50px) scale(1.1);
          }
          .arrow-right:hover {
            transform: translateX(50px) scale(1.1);
          }

          .custom-arrow {
            width: 30px;
            height: 2px;
          }

          .custom-arrow::before,
          .custom-arrow::after {
            width: 10px;
            height: 2px;
          }
        }
          
      `}
      </style>

      <div className="container-hero">
        <div
          ref={wrapperRef}
          className="hero-wrapper"
          style={{ transform: window.innerWidth <= 768 ? `translateX(-${current * 100}%)` : `translateX(-${current * 94 - 1.5}%)` }}
        >
          {loopSlides.map((s, i) => (
            <div key={i} className={`hero-slide ${i === current ? "active" : ""}`}>
              {/* Image for Desktop */}
              <img src={s.desktopImage} className="hero-img-desktop" alt={s.title} />

              {/* Image for Mobile */}
              <img src={s.image} className="hero-img" alt={s.title} />

              <div className="text-content">
                <h1>
                  {s.title.split(' ').map((word, wordIndex) => (
                    <span key={wordIndex} className="word">{word}</span>
                  ))}
                </h1>
              </div>
           
              <button className="shop-btn">{s.buttonText}</button>
            </div>
          ))}
        </div>

        <div className="dots-row">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`dot ${current === i + 1 ? "active" : ""}`}
              onClick={() => setCurrent(i + 1)}
            ></div>
          ))}
        </div>
        <button className="arrow-left" onClick={goPrev}>
          <div className="custom-arrow"></div>
        </button>
        <button className="arrow-right" onClick={goNext}>
          <div className="custom-arrow"></div>
        </button>
      </div>
    </>
  );
};

export default Slider;

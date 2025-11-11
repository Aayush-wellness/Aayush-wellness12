import React, { useState } from "react";
import "./Homedoctor.css";

const Homedoctor = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: "style-B65FD11",
      quote: "Booking an online consultation was quick and easy. The doctor was very understanding and provided me with a personalized treatment plan. I feel much healthier and more confident now!",
      name: "Rohit, 35",
      product: "Online Consultation"
    },
    {
      id: "style-RAU56",
      quote: "I was struggling with constant fatigue, but after getting my blood test and consulting with the specialists, I finally got the right vitamins and lifestyle recommendations. Now, I feel more energetic than ever!",
      name: "Sachin, 40",
      product: "Wellness & Nutrition Plan"
    },
    {
      id: "style-Xrq8z",
      quote: "I had been ignoring my skin issues for a while, but this platform made it so easy to get expert advice. The prescribed skincare routine worked wonders, and my skin has never been clearer!",
      name: "Kajal, 28",
      product: "Dermatology Consultation"
    },
    {
      id: "style-LY4J2",
      quote: "After struggling with anxiety for years, I finally decided to try online therapy. My therapist has been incredibly supportive, and I’ve learned techniques that help me stay calm and focused every day.",
      name: "Dev, 38",
      product: "Mental Health Therapy"
    },
    {
      id: "style-l637p",
      quote: "I was worried about my high cholesterol levels, but the doctors provided me with a clear plan, including diet and medication options. Now, my health is back on track, and I feel so much better!",
      name: "Shreya, 50",
      product: "Heart Health Program"
    }
  ];


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };


  return (
    <div className="homedoctor-container blocks">
      <div className="shortOffset-tilesstyle__OffsetTilesComponentHeadline-sc-ams4gs-1 kptVHS snipcss-YosCm">
        <span className=" md:text-6xl text-[35px] leading-[1.2] md:leading-[1.2]  !text-white  font-[500]   uppercase" style={{ fontFamily: "ROGBold" }}>
          Expert-approved solutions,{" "}
          <div className="shortOffset-tilesstyle__HighlightText-sc-ams4gs-5 dICZFB" style={{ fontFamily: "ROGBold", color: "#33cccc" }}>
            personalized to your health.
          </div>
        </span>
      </div>

      <div className="shortOffset-tilesstyle__InnerTileContainer-sc-ams4gs-2 gkoHKP snipcss-sYH3A">
        <div className="shortOffset-tilesstyle__OffsetTileContainer-sc-ams4gs-0 bpBxoP">
          <div className="shortOffset-tilesstyle__TileCopyContainer-sc-ams4gs-6 dEcTFg">
            <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva !text-black" style={{ fontFamily: "ROGBold", letterSpacing: "1.1px", color: "black" }}>
              Book Health Packages Online
            </span>
            {/* <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva ">
              <div className="shortOffset-tilesstyle__HighlightText-sc-ams4gs-5 dICZFB">
                your schedule
              </div>
            </span> */}
            <p className="typographystyle__Typography-sc-1r2rdgq-1 shortOffset-tilesstyle__SubTextTypography-sc-ams4gs-3 dJKpaf dnlbgo !pb-0" style={{ fontFamily: "Minionpro" }}>
              Choose from full-body checkups & specialized tests with free home sample collection and digital reports.
            </p>

          </div>
          <a rel="" tabIndex={-1} className="cAOSLu hlVOrJ" href="https://aayushlabs.com/">
            <button className="cAruRV dOQfTS" type="button">
              <span className="dKfXOG"> Book Now</span>
            </button>
          </a>
          <div className="shortOffset-tilesstyle__MediaContainer-sc-ams4gs-4 jFQpTd">
            <span className="picturestyle__LazyLoadPictureWrapper-sc-yn6p7g-1 fBgVUB">
              <picture className="picturestyle__PictureWrapper-sc-yn6p7g-0 jIQBvI">
                <img
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WhatsApp_Image_2025-10-08_at_3.30.38_PM.jpg?v=1759917962"
                  alt="Picture of cards depicting losing weight"
                />
              </picture>
            </span>
          </div>
        </div>
        <div className="shortOffset-tilesstyle__OffsetTileContainer-sc-ams4gs-0 bpBxoP">
          <div className="shortOffset-tilesstyle__TileCopyContainer-sc-ams4gs-6 dEcTFg">
            <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva " style={{ fontFamily: "ROGBold", letterSpacing: "1.1px" }}>
              Continuous Medical Support
            </span>
            {/* <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva">
              <div className="shortOffset-tilesstyle__HighlightText-sc-ams4gs-5 dICZFB">
                licensed providers
              </div>
            </span> */}
            <p className="typographystyle__Typography-sc-1r2rdgq-1 shortOffset-tilesstyle__SubTextTypography-sc-ams4gs-3 dJKpaf dnlbgo !pb-0" style={{ fontFamily: "Minionpro" }}>
              Stay connected with follow-up consultations for long-term health and better recovery.
            </p>

          </div>
          <a rel="" tabIndex={-1} className="cAOSLu hlVOrJ" href="https://aayushlabs.com/collections/our-doctors" >
            <button className="cAruRV dOQfTS" type="button">
              <span className="dKfXOG" style={{ fontFamily: "Minionpro" }}> Consult Now</span>
            </button>
          </a>
          <div className="shortOffset-tilesstyle__MediaContainer-sc-ams4gs-4 jFQpTd">
            <span className="picturestyle__LazyLoadPictureWrapper-sc-yn6p7g-1 fBgVUB">
              <picture className="picturestyle__PictureWrapper-sc-yn6p7g-0 jIQBvI">
                <img
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/homepage_card_med_1_08cf0cff-98ef-4826-8012-9ea2934aa601.png?v=1742033047"
                  alt="Image"
                />
              </picture>
            </span>
          </div>
        </div>
        <div className="shortOffset-tilesstyle__OffsetTileContainer-sc-ams4gs-0 bpBxoP">
          <div className="shortOffset-tilesstyle__TileCopyContainer-sc-ams4gs-6 dEcTFg">
            <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva" style={{ fontFamily: "ROGBold", letterSpacing: "1.1px" }}>
              Your Health, Your Schedule
            </span>
            {/* <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva">
              <div className="shortOffset-tilesstyle__HighlightText-sc-ams4gs-5 dICZFB">
                proven ingredients
              </div>
            </span> */}
            <p className="typographystyle__Typography-sc-1r2rdgq-1 shortOffset-tilesstyle__SubTextTypography-sc-ams4gs-3 dJKpaf dnlbgo !pb-0" style={{ fontFamily: "Minionpro" }}>
              Book anytime, get reports within 12 hours, and track your health from the comfort of home.
            </p>

          </div>
          <a rel="" tabIndex={-1} className="cAOSLu hlVOrJ" href="https://aayushlabs.com/collections/tests">
            <button className="cAruRV dOQfTS" type="button">
              <span className="dKfXOG" style={{ fontFamily: "Minionpro" }}>Our Packages</span>
            </button>
          </a>
          <div className="shortOffset-tilesstyle__MediaContainer-sc-ams4gs-4 jFQpTd">
            <span className="picturestyle__LazyLoadPictureWrapper-sc-yn6p7g-1 fBgVUB">
              <picture className="picturestyle__PictureWrapper-sc-yn6p7g-0 jIQBvI">
                <img
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/homepage_doc_image_2.png?v=1741700486"
                  alt="Image"
                />
              </picture>
            </span>
          </div>
        </div>
        <div className="shortOffset-tilesstyle__OffsetTileContainer-sc-ams4gs-0 bpBxoP">
          <div className="shortOffset-tilesstyle__TileCopyContainer-sc-ams4gs-6 dEcTFg">
            <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva" style={{ fontFamily: "ROGBold", letterSpacing: "1.1px" }}>
              Consult Top Doctors Online
            </span>
            {/* <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva">
              <div className="shortOffset-tilesstyle__HighlightText-sc-ams4gs-5 dICZFB">
                pharmacies
              </div>
            </span> */}
            <p className="typographystyle__Typography-sc-1r2rdgq-1 shortOffset-tilesstyle__SubTextTypography-sc-ams4gs-3 dJKpaf dnlbgo !pb-0" style={{ fontFamily: "Minionpro" }}>
              Get expert advice, prescriptions, and treatment plans through secure video or audio calls.
            </p>

          </div>
          <a rel="" tabIndex={-1} className="cAOSLu hlVOrJ" href="/healthcare">
            <button className="cAruRV dOQfTS" type="button">
              <span className="dKfXOG" style={{ fontFamily: "Minionpro" }}>Book My Consultation</span>
            </button>
          </a>

          <div className="testimonial-cardstyle__SlideOuterWrapper-sc-1f80141-1 eiAZRs" style={{ position: 'relative' }}>
            {/* Video Element - Stays fixed at the top-left */}
            <video
              className="testimonial-video"
              src="https://cdn.shopify.com/videos/c/o/v/a11eabec21b44e4aaf7ede428f75cca4.mp4" // Replace with your video URL

              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'relative',
                top: '10px',
                left: '150px',
                width: '90px', // Adjust size as needed
                height: 'auto',
                borderRadius: '10px', // Optional: Adds rounded corners
                zIndex: 10, // Ensures the video stays on top
              }}
            />

            <div className="testimonial-cardstyle__SlideWrapper-sc-1f80141-2 ljFWsD keen-slider">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-cardstyle__SlideItemWrapper-sc-1f80141-5 cSThpo keen-slider__slide ${index === currentIndex ? 'active' : 'hidden'
                    }`}
                  id={testimonial.id}
                  style={{
                    display: index === currentIndex ? 'flex' : 'none',
                    justifyContent: 'left',
                    alignItems: 'center',
                    textAlign: 'left',
                    height: '100%',
                    paddingTop: '10px',
                  }}
                >
                  <div
                    className="testimonial-cardstyle__SlideItem-sc-1f80141-6 dIMjIe"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'left',
                      alignItems: 'left',
                      width: '100%',
                    }}
                  >
                    <p className="testimonial-cardstyle__Quote-sc-1f80141-8 bshcsw" style={{ fontFamily: "Minionpro", color: "black" }}>{testimonial.quote}</p>
                    <div className="testimonial-cardstyle__UserDetailWrapper-sc-1f80141-10 jGXlEb">
                      <h3 className="!text-black" style={{ fontFamily: "ROGBold" }}>{testimonial.name}</h3>
                      <h3 className="!text-black" style={{ fontFamily: "Minionpro" }}>{testimonial.product}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Buttons */}
            <button className="testimonial-cardstyle__SlideNavigationButton-sc-1f80141-3 jPltbT" onClick={prevSlide}>
              &#10094;
            </button>
            <button className="testimonial-cardstyle__SlideNavigationButton-sc-1f80141-3 gSCsvg" onClick={nextSlide}>
              &#10095;
            </button>

            {/* Slider Dots */}
            <div className="testimonial-cardstyle__Footer-sc-1f80141-11 ObQZJ">
              <div className="testimonial-cardstyle__SlideIndicatorOuterWrapper-sc-1f80141-12 koQJgw">
                <div className="testimonial-cardstyle__SlideIndicatorWrapper-sc-1f80141-13 MZjm">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`testimonial-cardstyle__SlideIndicator-sc-1f80141-15 knJYxX ${index === currentIndex ? 'active' : 'small'
                        }`}
                      onClick={() => setCurrentIndex(index)}
                    >
                      <span className="testimonial-cardstyle__SlideIndicatorDot-sc-1f80141-14 lklafC" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Homedoctor;

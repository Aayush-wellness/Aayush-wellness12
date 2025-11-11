import { useState, useRef, useEffect } from "react";
import { Plus, ChevronLeft, ChevronRight, Minus } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import NewFooter from './NewFooter';
import {
  Leaf,
  ShieldCheck,
  PackageCheck,
  Vegan,
  Microscope,
  FlaskConical,
  Moon,
  Flag
} from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const ProductPageBrain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSidebar, setActiveSidebar] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const contentRef = useRef(null);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const contentItems = useRef([]);
  const progressLineRef = useRef(null);

  const images = [
   "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WhatsApp_Image_2025-07-16_at_7.16.35_PM.jpg?v=1752673729",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WhatsApp_Image_2025-07-16_at_7.39.14_PM.jpg?v=1752675049",
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // For more complex routing scenarios, you might need this alternative approach:
    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 0);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleSidebar = (section) => {
    if (activeSidebar === section) {
      setActiveSidebar(null);
    } else {
      setActiveSidebar(section);
    }
  };

  // Handle sticky behavior for desktop
  useEffect(() => {
    const handleScroll = () => {
      if (
        !carouselRef.current ||
        !contentRef.current ||
        !containerRef.current ||
        window.innerWidth < 768
      )
        return;

      const carouselHeight = carouselRef.current.offsetHeight;
      const contentHeight = contentRef.current.offsetHeight;
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;
      const contentBottom = contentRef.current.offsetTop + contentHeight;

      // Make carousel sticky until content is fully scrolled
      if (
        containerTop <= 0 &&
        scrollPosition + carouselHeight < contentBottom
      ) {
        carouselRef.current.style.position = "sticky";
        carouselRef.current.style.top = "0";
        carouselRef.current.style.right = "0";
      } else if (scrollPosition + carouselHeight >= contentBottom) {
        carouselRef.current.style.position = "sticky";
        carouselRef.current.style.top = `${contentHeight - carouselHeight}px`;
        carouselRef.current.style.right = "0";
      } else {
        carouselRef.current.style.position = "static";
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial positioning
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const faqItems = [
    {
      question: "What kind of testing do you do?",
      answer: 
        
          
          
          "We ensure the highest quality by conducting rigorous in-house and third-party testing on every batch of our Sleep Gummies. While third-party testing isn't always required, we believe in complete transparency so you know exactly what you're consuming. "
         
        
          
        
      ,
    },
    {
      question: "How and when should I take Sleep Gummies?",
      answer: "For best results, take one gummy 30–60 minutes before bedtime. Make sure to chew it thoroughly before swallowing. Avoid consuming more than the recommended dosage. If you're new to melatonin or have any medical conditions, consult your doctor before use.",
    },
    {
      question: "How does the Sleep Gummy technology work?",
      answer: "Our Sleep Gummies are formulated with advanced release technology to support a natural sleep cycle. They contain a precise blend of melatonin and soothing botanicals that help you relax, fall asleep faster, and wake up refreshed without grogginess.",
    },
    {
      question:
        "Why are Sleep Gummies formulated with X mg of melatonin?",
      answer: "Our gummies contain X mg of melatonin, a carefully selected dosage that aligns with scientific research to support healthy sleep patterns. This amount is effective in promoting relaxation while minimizing the risk of morning drowsiness.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  //scroll section
  const items = [
    {
    title: "Brahmi (Bacopa Monnieri – Leaf Extract) – 500mg",
    description:
      "Known for its cognitive-enhancing properties, Brahmi helps improve memory retention, concentration, and mental clarity. It also supports long-term brain health and reduces anxiety.",
  },
  {
    title: "Withania Somnifera (Ashwagandha Root Extract) – 500mg",
    description:
      "A powerful adaptogen that helps reduce stress and anxiety, Ashwagandha promotes emotional balance, enhances brain function, and supports a calm, focused mind.",
  },
  {
    title: "Curcuma Longa (Turmeric – Curcumin 95% Extract) – 100mg",
    description:
      "Rich in antioxidants, Curcumin helps protect brain cells from oxidative stress. It also supports anti-inflammatory responses and may improve mood and cognitive sharpness.",
  },
 
  {
    title: "Gotu Kola Extract (Centella Asiatica – Aerial Parts Extract) – 60mg",
    description:
      "Traditionally used to boost mental alertness, Gotu Kola enhances cognitive function, improves blood circulation to the brain, and supports focus and clarity.",
  },
  {
    title: "Ginkgo Biloba Extract (Dried Leaves of Ginkgo Biloba) – 240mg",
    description:
      "Ginkgo Biloba enhances memory, focus, and mental performance by improving blood flow to the brain. It also provides antioxidant protection for overall cognitive health.",
  },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateProgressLine = () => {
      const items = contentItems.current;
      if (!items.length) return;

      const viewportHeight = window.innerHeight;
      let totalVisible = 0;
      let lastVisibleIndex = -1;

      items.forEach((item, index) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const isVisible =
          rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2;

        if (isVisible) {
          totalVisible++;
          lastVisibleIndex = index;

          item.classList.add("opacity-100", "translate-y-0");
          item.classList.remove("opacity-0", "translate-y-8");

          const dot = item.querySelector(".timeline-dot");
          if (dot) {
            dot.classList.add("scale-125", "bg-[#260e1f]");
            dot.classList.remove("scale-100", "bg-gray-300");
          }
        } else {
          item.classList.remove("opacity-100", "translate-y-0");
          item.classList.add("opacity-0", "translate-y-8");

          const dot = item.querySelector(".timeline-dot");
          if (dot) {
            dot.classList.remove("scale-125", "bg-[#260e1f]");
            dot.classList.add("scale-100", "bg-gray-300");
          }
        }
      });

      if (progressLineRef.current) {
        if (lastVisibleIndex >= 0) {
          const progress = (lastVisibleIndex + 1) / items.length;
          progressLineRef.current.style.height = `${progress * 100}%`;
          progressLineRef.current.style.opacity = "1";
        } else {
          progressLineRef.current.style.height = "0%";
          progressLineRef.current.style.opacity = "0";
        }
      }
    };

    const onScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgressLine();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgressLine(); // Initial check

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <section className="relative bg-white md:pt-[90px]">
        <div
          ref={containerRef}
          className="container mx-auto px-4"
          style={{ maxWidth: "1903px", width: "100%" , marginTop: "90px"}}
        >
          {/* Mobile View - Swiper Carousel */}
          <div className="block md:hidden mb-8 pt-6">
            <Swiper slidesPerView={1.5} spaceBetween={10} className="w-full">
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Product Image ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex flex-col md:flex-row relative gap-[80px]">
            {/* Product Details Section - Left side */}
            <div
              ref={contentRef}
              className="w-full md:py-20 px-0 md:pl-[150px] max-w-[755px]"
            >
              <h1 className="text-[40px] md:text-[50px] font-bold text-[#420560] mb-1" style={{fontFamily: "ROGBold"}}>
              Brain Fuel
              </h1>
              <p className="text-base text-[#420560] mb-6 italic" style={{fontFamily: "Minionpro"}}>
                Aayush Wellness{" "}
              </p>

              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <p className="text-base text-gray-700 mb-4" style={{fontFamily: "Minionpro"}}>
               A powerful brain health formula by Aayush Wellness clinically crafted to boost memory, sharpen focus, and support mental clarity with science-backed ingredients.
                </p>
              </div>

              <div className="mb-8">
                

                <div className="space-y-4">
                  {/* <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full border border-[#420560] flex items-center justify-center mr-3">
                        <div className="w-3 h-3 rounded-full bg-[#420560]"></div>
                      </div>
                      <span className="font-medium" style={{fontFamily: "Minionpro"}}>Buy once</span>
                    </div>
                    <span className="font-bold text-[#420560]" style={{fontFamily: "Minionpro"}}>₹599</span>
                  </div> */}
                </div>
              </div>

              <div className="mb-8">
                <Link
                  // to="https://store.aayushwellness.com/collections/all/products/dreamy-sleep-gummies-1"
                  className="w-full"
                  style={{ display: "block" }}
                >
                  <button className="bg-[#420560] text-white text-[25px] py-3 px-6 rounded-lg w-full text-center font-semibold" style={{fontFamily: "Minionpro"}}>
                    Shop Now
                  </button>
                </Link>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-base text-gray-700 mb-4" style={{fontFamily: "Minionpro"}}>
                 Sharpen your focus and elevate your cognitive performance with Brain Fuel Capsules. Expertly formulated with brain-boosting botanicals like Brahmi, Ashwagandha, Ginkgo Biloba, and Turmeric (Curcumin), this powerful blend supports memory, mental clarity, and stress resilience. Combining ancient Ayurvedic wisdom with modern science, Brain Fuel helps you stay clear-headed, focused, and mentally energized—whether you're working, studying, or simply staying sharp every day.
                  </p>
                </div>

                {/* Accordion sections */}
               { /*<div className="border-t border-gray-200">
                  <button
                    className="w-full py-4 flex justify-between items-center"
                    onClick={() => toggleSidebar("supplement")}
                  >
                    <span className="font-semibold text-[#420560] text-[26px]" style={{fontFamily: "Minionpro"}}>
                      Supplement Facts
                    </span>
                    <Plus className="h-5 w-5 text-[#420560]" />
                  </button>
                </div>*/}

             {/*}   <div className="border-t border-gray-200">
                  <button
                    className="w-full py-4 flex justify-between items-center"
                    onClick={() => toggleSidebar("results")}
                  >
                    <span className="font-semibold text-[#420560] text-[26px]" style={{fontFamily: "Minionpro"}}>
                      Clinically-Proven Results
                    </span>
                    <Plus className="h-5 w-5 text-[#420560]" />
                  </button>
                </div>*/}

                <div className="border-t border-gray-200"></div>
              </div>
            </div>

            {/* Desktop View - Sticky Carousel */}
            <div
              // ref={carouselRef}
              className="hidden md:block md:w-1/2 md:pl-8 sticky top-0 left-0"
              style={{ height: "500px" }}
            >
              <div className="relative mx-auto h-full top-0">
                <div className="flex h-full">
                  <div className="w-[500px] h-full">
                    <img
                      src={images[currentIndex] || "/placeholder.svg"}
                      alt={`Product Image ${currentIndex + 1}`}
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div className="w-[10px]"></div>
                  <div className="w-[500px] h-full">
                    <img
                      src={
                        images[(currentIndex + 1) % images.length] ||
                        "/placeholder.svg"
                      }
                      alt={`Product Image ${
                        ((currentIndex + 1) % images.length) + 1
                      }`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-between w-[60px]">
                  <button
                    onClick={handlePrev}
                    className="bg-white rounded-full shadow-md p-1 hover:bg-gray-100"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-white rounded-full shadow-md p-1 hover:bg-gray-100"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Certification logos */}
              <div className="flex flex-wrap justify-between mt-8" style={{display: "none"}}>
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Non-GMO Verified"
                  className="h-10"
                />
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Certified"
                  className="h-10"
                />
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Carbon Free"
                  className="h-10"
                />
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Clean Label"
                  className="h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* scroll section */}
      <section className="py-20 px-4 max-w-7xl mx-auto" ref={sectionRef}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="lg:w-1/2 lg:sticky lg:top-20 lg:h-fit">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Brain_Fuel_Banner_1_1.jpg?v=1752674465"
                alt="Peaceful sleep environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-[48px] font-bold text-[#420560] mb-12" style={{fontFamily: "ROGBold", letterSpacing: "1px"}}>
             Ingredients Content
            </h2>
            {/* <p className="text-lg text-gray-700 mb-16" style={{fontFamily: "Minionpro"}}>
              Regain your rest with Aayush Wellness technology, designed to
              align with your body's natural sleep rhythm for deeper,
              restorative sleep.
            </p> */}
            {/* Timeline */}
            <div className="relative">
              {/* Single Progress Line */}
              <div
                ref={progressLineRef}
                className="absolute left-2.5 top-0 w-0.5 bg-[#420560] transition-all duration-1000 ease-in-out"
                style={{
                  height: "0%",
                  opacity: "0",
                }}
              />

              {/* Timeline Items */}
              <div className="space-y-16">
                {items.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => (contentItems.current[index] = el)}
                    className="relative pl-12 transition-all duration-1000 ease-in-out opacity-0 translate-y-8"
                  >
                    {/* Dot */}
                    <div className="timeline-dot absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 border-white shadow-md transition-all duration-1000 ease-in-out bg-[#420560]"></div>

                    {/* Content */}
                    <div className="transition-all duration-1000 ease-in-out">
                      <h3 className="text-[25px] font-semibold mb-2 text-[#420560] " style={{fontFamily: "ROGBold", letterSpacing: '1px'}}>
                        {item.title}
                      </h3>
                      <p className=" text-[20px] leading-relaxed text-gray-600" style={{fontFamily: "Minionpro"}}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Text Section */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-[40px] font-bold text-[#420560] mb-6" style={{fontFamily: "ROGBold", letterSpacing: "1px"}}>
Unlock Sharper Focus & Mental Clarity            </h2>
            <div className="w-24 h-1 bg-[#420560] mb-8"></div>
            <p className="text-lg text-gray-700" style={{fontFamily: "Minionpro"}}>
           Our advanced Brain Fuel Capsules are thoughtfully formulated to enhance memory, improve concentration, and support overall cognitive health. Powered by time-tested herbs and modern extracts, this blend works in harmony with your mind to promote clear thinking, mental energy, and long-term brain vitality so you stay sharp, focused, and balanced throughout the day.
            </p>
          </div>

          {/* Video Section */}
          {/* <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="w-full h-[500px] max-w-[500px] mx-auto">
              <video
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/477b7c8c59ea4160858117ef561e69b3.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div> */}
        </div>
      </section>

      {/* Sidebar for accordion content */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[455px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          activeSidebar ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[40px] font-bold text-[#420560]" style={{fontFamily: "ROGBold"}}>
              {activeSidebar === "supplement" && "Supplement Facts"}
              {activeSidebar === "use" && "How to Use"}
              {activeSidebar === "results" && "Clinically-Proven Results"}
            </h3>
            <button
              onClick={() => setActiveSidebar(null)}
              className="text-[#420560] "
            >
              ✕
            </button>
          </div>
          <div className="w-full h-1 bg-[#420560] mb-8"></div>

          {activeSidebar === "supplement" && (
            <div>
              {/* Certification Logos */}
              {/* <div className="flex justify-between items-center mb-6">
                <img
                  src="https://img.freepik.com/premium-vector/logo-care-child_1314744-24.jpg?uid=R186725298&ga=GA1.1.1002746497.1740224156&semt=ais_hybrid"
                  alt="Non-GMO Verified"
                  className="h-12"
                />
                <img
                  src="https://img.freepik.com/premium-vector/international-human-solidarity-day_1271759-1600.jpg?uid=R186725298&ga=GA1.1.1002746497.1740224156&semt=ais_hybrid"
                  alt="Certified"
                  className="h-12"
                />
                <img
                  src="https://img.freepik.com/premium-vector/international-human-solidarity-day_1271759-1600.jpg?uid=R186725298&ga=GA1.1.1002746497.1740224156&semt=ais_hybrid"
                  alt="Clean Label"
                  className="h-12"
                />
              </div> */}

              {/* Icon List */}
               <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Leaf className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700" style={{fontFamily: "Minionpro"}}>Plant-Based Formulation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FlaskConical className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700" style={{fontFamily: "Minionpro"}}>Clinically Researched Ingredients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700" style={{fontFamily: "Minionpro"}}>Non Habit-Forming </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Moon className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700" style={{fontFamily: "Minionpro"}}>
                  Supports Restful Sleep & Relaxation
                  </span>
                </div>
                <div className="flex items-center space-x-3" style={{fontFamily: "Minionpro"}}>
                  <Vegan className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700">100% Vegan & Gluten-Free</span>
                </div>
                <div className="flex items-center space-x-3" style={{fontFamily: "Minionpro"}}>
                  <Microscope className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700">
                  Lab-Tested for Purity & Quality
                  </span>
                </div>
                <div className="flex items-center space-x-3" style={{fontFamily: "Minionpro"}}>
                  <PackageCheck className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700">Non-GMO Certified </span>
                </div>
                <div className="flex items-center space-x-3" style={{fontFamily: "Minionpro"}}>
                  <Flag className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700">
                  Made in India, FSSAI Certified
                  </span>
                </div>
              </div>

              {/* Supplement Facts Box */}
              <div className="border border-gray-300 rounded-lg p-6 bg-gray-50 mb-8">
                <h3 className="text-[30px] text-[#420560]  mb-4" style={{fontFamily: "ROGBold"}}>
                  Supplement Facts
                </h3>
                <p className="text-md text-gray-600 mb-2" style={{fontFamily: "Minionpro"}}>
                  <strong>Serving Size:</strong> 2 Vegan Gummies
                </p>
                <p className="text-md text-gray-600 mb-4" style={{fontFamily: "Minionpro"}}>
                  <strong>Servings Per Container:</strong> 30
                </p>
                <p className="text-md text-gray-600 mb-4" style={{fontFamily: "Minionpro"}}>
                  <strong>Amount Per Serving:</strong> % DV
                </p>
                <p className="text-md text-gray-600 mb-4" style={{fontFamily: "Minionpro"}}>
                  <strong>Melatonin (as plant-based source):</strong> 5mg
                </p>
                <p className="text-md text-gray-600 mb-4" style={{fontFamily: "Minionpro"}}>
                  <strong>L-Theanine:</strong> 200mg
                </p>
                <p className="text-md text-gray-600 mb-4" style={{fontFamily: "Minionpro"}}>
                  <strong>Chamomile Extract:</strong> 150mg
                </p>
                <p className="text-md text-gray-600 mb-4" style={{fontFamily: "Minionpro"}}>
                  <strong>Lemon Balm Extract :</strong> 100mg
                </p>

                <div className="border-t border-b border-gray-300 py-4" style={{fontFamily: "Minionpro"}}>
                  <div className="text-md text-gray-500">
                    ** Daily Value (DV) not established.
                  </div>
                  <div className="text-sm text-gray-500" style={{fontFamily: "Minionpro"}}>*RDA of nutrients Daily Allowances as per Guidelines of indian Council of Medical Research(ICMR) 2020 Adult.</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4" style={{fontFamily: "Minionpro"}}>
                <strong>Other Ingredients:</strong>
                Sucrose, Gelling Agent(INS 406,440), Binding Agent(INS 407,412),Preservative(INS 202), Acidity Regulator(INS 330),Polysorbate(TWEEN 80), contains oermitted Synthetic Foof Colour (INS 133), and Added Flavour (Nature Identical Flavour Substance Blueberry)
              </p>
            </div>
          )}

          {activeSidebar === "use" && (
            <div>
              <ol className="list-decimal pl-5 mb-4 space-y-3">
                <li>
                  Take 2 gummies approximately 30 minutes before your desired
                  bedtime.
                </li>
                <li>
                  Allow the gummies to dissolve completely in your mouth before
                  swallowing.
                </li>
                <li>
                  Create a relaxing bedtime routine to maximize effectiveness.
                </li>
                <li>
                  Ensure your sleeping environment is dark, quiet, and
                  comfortable.
                </li>
                <li>For best results, use consistently every night.</li>
              </ol>
              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <h4 className="font-medium mb-2">Important Notes:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Do not exceed recommended dosage.</li>
                  <li>Not recommended for children under 18 years.</li>
                  <li>
                    Consult a healthcare professional if pregnant, nursing, or
                    taking medications.
                  </li>
                  <li>Store in a cool, dry place away from direct sunlight.</li>
                </ul>
              </div>
            </div>
          )}

          {activeSidebar === "results" && (
            <div>
              <p className="mb-4" style={{fontFamily: "Minionpro"}}>
                Our Sleep Gummies are clinically shown to support a
                faster onset of sleep and sustained restfulness throughout the
                night, helping you wake up refreshed.*†
              </p>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <h4 className="font-semibold mb-1 text-[#420560] text-[24px]" style={{fontFamily: "ROGBold"}}>
                    Clinically Studied Benefits:
                  </h4>
                  <ol className="text-medium" style={{fontFamily: "Minionpro"}}>
                    <li> Reduces time to fall asleep by 43% </li>
                    <li>
                      Promotes deeper and more restorative sleep patterns 
                    </li>
                    <li>Supports waking up refreshed and rested</li>
                  </ol>
                </div>
                <div className="border-b pb-3">
                  <h4 className="font-semibold mb-1 text-[#420560] text-[24px]" style={{fontFamily: "ROGBold"}}>
                  About Our Clinical Study
                  </h4>
                  <p className="text-medium" style={{fontFamily: "Minionpro"}}>
                  The Ritual Sleep  Gummies Pharmacokinetics Study and the 2-week supplementation study were conducted in partnership with a leading research institution. Designed as a randomized, double-blind, placebo-controlled trial, this study follows the gold standard in human research, ensuring scientific credibility and measurable results.
                  </p>
                </div>
                
              </div>
              <p className="mt-4 text-sm italic">
                *Time x Treatment: p=0.01 (statistically significant impact on sleep onset and duration).
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {activeSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setActiveSidebar(null)}
        ></div>
      )}
  
  
  
  {/*ADDed FAQ section here  */}

      <NewFooter />
    </>
  );
};

export default ProductPageBrain;

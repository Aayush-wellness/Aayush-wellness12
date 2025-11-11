import React, { useState, useEffect, useRef } from 'react';
import './AwCard.css';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample data for cards
const cardData = [
  // Healthcare
  { 
    id: 1, 
    title: 'Full-Body Checkups Made Easy',
    description: 'Get precise tests & treatments recommendations at your fingertips.',
   
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/1_2.png?v=1758719275',
    category: 'Healthcare'
  },
  { 
    id: 2, 
    title: ' Get Clear Health Answers',
    description: 'Book full-body checkups with free home sample collection & online reports.',
  
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Gemini_Generated_Image_w1wzlow1wzlow1wz.png?v=1758715400',
    category: 'Healthcare'
  },
  { 
    id: 3, 
    title: 'Track & Improve Your Wellness',
    description: 'Track your wellness goals with easy, reliable diagnostics.',
  
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-09-24_174517.png?v=1758716191',
    category: 'Healthcare'
  },
  { 
    id: 4, 
    title: ' Complete Mind-Body Care',
    description: ' Access holistic health solutions for total well-being.',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-09-24_174532.png?v=1758716191',
    category: 'Healthcare'
  },
  
  // Herbal
 
  { 
    id: 5, 
    title: 'The Herbal Switch',
    description: 'Enjoy tobacco-free, Ayurvedic pan masala in 3 authentic flavors.',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/5..png?v=1758719275',
    category: 'Herbal'
  },
  { 
    id: 6, 
    title: 'Upgrade Your Habit',
    description: 'Crafted with premium herbs like Ashwagandha, Mulethi & Kaunch Beej.',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/6..png?v=1758719275',
    category: 'Herbal'
  },
  { 
    id: 7, 
    title: 'Powered by Ayurveda',
    description: 'Beat sugar & spice cravings with herbal alternatives.',
    
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Gemini_Generated_Image_ataxsnataxsnatax.png?v=1758713967',
    category: 'Herbal'
  },
  { 
    id: 8, 
    title: 'Cravings Under Control',
    description: 'Satisfy your taste buds without harmful tobacco or supari.',
  
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/8..png?v=1758719276',
    category: 'Herbal'
  },
  
  // Nutraceuticals


  { 
    id: 9, 
    title: '  Drift into Dreamy Sleep',
    description: 'Natural blend to promote restful, non-addictive sleep.',
    
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/9..png?v=1758719275',
    category: 'Nutraceuticals'
  },
  { 
    id: 10, 
    title: 'Wake Up Refreshed',
    description: 'Reduce stress & improve sleep quality night after night',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/10..png?v=1758719275',
    category: 'Nutraceuticals'
  },
  { 
    id: 11, 
    title: 'Glow From Within',
    description: 'Supports healthy skin, hair & nails with essential vitamins.',
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/11..png?v=1758719275',
    category: 'Nutraceuticals'
  },
  { 
    id: 12, 
    title: 'Daily Beauty Ritual',
    description: 'One tasty gummy a day for radiant confidence.',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-09-24_165618.png?v=1758713260',
    category: 'Nutraceuticals'
  },


  // Doctor Consultation
  { 
    id: 13, 
    title: 'Expert Doctors, Anytime',
    description: 'Get trusted advice from qualified doctors online.',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/13..png?v=1758719275',
    category: 'Doctor Consultation'
  },
  { 
    id: 14, 
    title: 'Personalized Care',
    description: 'Discuss your symptoms & get the right guidance.',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-09-24_174555.png?v=1758716191',
    category: 'Doctor Consultation'
  },
  { 
    id: 15, 
    title: 'Convenient Consults',
    description: 'Book video/audio consultations in just a few taps.',
  
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/15..png?v=1758719275',
    category: 'Doctor Consultation'
  },
  { 
    id: 16, 
    title: 'Follow-Up Support',
    description: 'Continuous care for better health outcomes.',
   
    image: ' https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Gemini_Generated_Image_9vo32n9vo32n9vo3.png?v=1758713966',
   
    category: 'Doctor Consultation'
  },

  
  // Health Supplements
  { 
    id: 17, 
    title: 'Startup Growth & Innovation',
    description: 'Complete daily nutrition in one tablet',
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/17..png?v=1758719275',
    category: 'Health Supplement'
  },
  { 
    id: 18, 
    title: 'Herbal Supplements',
    description: 'Natural supplements for vitality',
    image: 'https://images.unsplash.com/photo-1591343396623-8c4ffb3ba7b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Health Supplement'
  },
  { 
    id: 19, 
    title: 'Investment & Growth in Wellness Ecosystem',
    description: 'Support for healthy weight goals',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Health Supplement'
  },
  { 
    id: 20, 
    title: 'Focus on Innovation, Technology & Wellness Products',
    description: 'Strengthen your immune system',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Health Supplement'
  },
  


  // Accelerator
  { 
    id: 21, 
    title: 'Fostering Startup Growth',
    description: 'Supporting innovation across wellness & health tech.',
    
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/16..png?v=1758719276',
    category: 'Accelerator'
  },
  { 
    id: 22, 
        title: 'Tech-Driven Wellness',
        description: 'Building future-ready solutions for preventive health.',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/17..png?v=1758719275',
    category: 'Accelerator'
  },
  { 
    id: 23, 
      title: 'Scaling the Ecosystem',
      description: 'Driving sustainable growth in the wellness industry.',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Gemini_Generated_Image_mmmdx8mmmdx8mmmd.png?v=1758713966',
    category: 'Accelerator'
  },
  { 
    id: 24, 
    title: 'Shaping the Future of Wellness',
    description: 'Driving breakthroughs that redefine health & wellbeing for tomorrow.',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Gemini_Generated_Image_41etrv41etrv41et.png?v=1758713966',
    category: 'Accelerator'
  }
];

const AwCard = () => {
  const categories = ['Healthcare', 'Herbal', 'Nutraceuticals', 'Doctor Consultation',  'Accelerator'];
  const [activeFilter, setActiveFilter] = useState(categories[0]);
  const [filteredCards, setFilteredCards] = useState(cardData.filter(card => card.category === categories[0]));
  const [flippedCard, setFlippedCard] = useState(null);
  const swiperRef = useRef(null);

  // Filter cards based on active filter
  useEffect(() => {
    setFilteredCards(cardData.filter(card => card.category === activeFilter));
    setFlippedCard(null);
  }, [activeFilter]);

  // Toggle card flip
  const toggleFlip = (cardId, e) => {
    e.stopPropagation();
    setFlippedCard(flippedCard === cardId ? null : cardId);
  };

  // Handle filter change from Swiper
  const handleFilterChange = (swiper) => {
    setActiveFilter(categories[swiper.activeIndex]);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const getCardVariants = (index) => {
    const position = index % 3;
    return {
      hidden: { 
        opacity: 0,
        rotateY: position === 0 || position === 1 ? -90 : 90,
        x: position === 0 ? -100 : position === 2 ? 100 : 0,
        perspective: 1000,
      },
      show: {
        opacity: 1,
        rotateY: 0,
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
          duration: 0.8
        }
      }
    };
  };

  return (
    <div className="aw-container">
      <div className="section-header">
        <h1 className="section-title">PERSONALIZED WELLNESS, POWERED BY NATURE</h1>
        <p className="section-description">
          Aayush Wellness blends Ayurveda with modern science to bring you innovative, high-quality health solutions.
        </p>
      </div>

      {/* Desktop Filter Buttons */}
      <div className="filter-container hidden-mobile">
        <div className="filter-scroll">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Swiper Filter */}
      <div className="mobile-filter-container hidden-desktop">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={'auto'}
          centeredSlides={false}
          onSlideChange={handleFilterChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mobile-filter-swiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={category} className="swiper-slide">
              <button
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(category);
                  swiperRef.current.slideTo(index);
                }}
              >
                {category}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Cards Grid */}
      <motion.div 
        className="cards-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence>
          {filteredCards.map((card, index) => {
            const position = index % 3;
            const isFlipped = flippedCard === card.id;
            
            return (
              <motion.div
                key={card.id}
                className={`card ${isFlipped ? 'flipped' : ''}`}
                variants={getCardVariants(index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  cursor: 'default',
                }}
                whileHover={{ 
                  y: -10,
                  transition: { type: 'spring', stiffness: 300 }
                }}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-image">
                      <img src={card.image} alt={card.title} />
                    </div>
                    <div className="card-content">
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </div>
                  <div className="card-back">
                    <h3>More About {card.title}</h3>
                    <p>Discover more about this product and how it can benefit your health and wellness journey.</p>
                    <button 
                      className="learn-more-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add navigation or other action here
                      }}
                    >
                      Learn More
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AwCard;

import { useState, useEffect, useRef } from 'react';
import './GummyProductSlider.css';

const products = [
  {
    id: 1,
    title: 'Aayush Herbal Masala',
    subtitle: (
      <div className="price-container">
        <span className="price-label">FROM</span>
        <span className="old-price">Rs. 900.00</span>
        <span className="new-price">Rs. 649.00</span>
      </div>
    ),
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-10-13_130425.png?v=1760340913",
    link: "https://store.aayushwellness.com/collections/all/products/aayush-herbal-pan-masala",
  },

    {
    id: 2,
    title: 'Aayush Herbal Masala New',
    subtitle: (
      <div className="price-container">
        <span className="price-label">FROM</span>
        <span className="old-price">Rs. 1035.00</span>
        <span className="new-price">Rs. 799.00</span>
      </div>
    ),
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-10-13_132413.png?v=1760342080",
    link: "https://store.aayushwellness.com/collections/all/products/aayush-herbal-pan-masala1",
  },
  {
    id: 3,
    title: 'Dreamy Sleep Gummies',
    subtitle: (
      <div className="price-container">
        <span className="price-label">FROM</span>
        <span className="old-price">Rs. 999.00</span>
        <span className="new-price">Rs. 599.00</span>
      </div>
    ),
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-10-13_132355.png?v=1760342080",
     link: "https://store.aayushwellness.com/collections/all/products/dreamy-sleep-gummies-1",
  },
  {
    id: 4,
    title: 'Beauty Vitamin Gummies',
    subtitle: (
      <div className="price-container">
        <span className="price-label">FROM</span>
        <span className="old-price">Rs. 11,900.00</span>
        <span className="new-price">Rs. 649.00</span>
      </div>
    ),
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-10-13_132332.png?v=1760342080",
     link: "https://store.aayushwellness.com/collections/all/products/beauty-vitamin-gummies-1",
  },
  {
    id: 5,
    title: 'Aayush Brain Fuel Capsules',
    subtitle: (
      <div className="price-container">
        <span className="price-label">FROM</span>
        <span className="old-price">Rs. 1,999.00</span>
        <span className="new-price">Rs. 999.00</span>
      </div>
    ),
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-10-13_132314.png?v=1760342080",
     link: "https://store.aayushwellness.com/collections/all/products/brain-fuel-capsules",
  },
  {
    id: 6,
    title: 'Aayush Immune Care Tablets',
    subtitle: (
      <div className="price-container">
        <span className="price-label">FROM</span>
        <span className="old-price">Rs. 1,399.00</span>
        <span className="new-price">Rs. 699.00</span>
      </div>
    ),
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-10-13_132301.png?v=1760342080",
     link: "https://store.aayushwellness.com/collections/all/products/immune-care-tablets",
  },
  {
    id: 7,
    title: 'Aayush Dia Shield Tablets',
    subtitle: (
      <div className="price-container">
        <span className="price-label">FROM</span>
        <span className="old-price">Rs. 1,500.00</span>
        <span className="new-price">Rs. 1,099.00</span>
      </div>
    ),
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-10-13_132246.png?v=1760342080",
     link: "https://store.aayushwellness.com/collections/all/products/dia-shield-tablets",
  },
];

const GummyProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Adjust items per view based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) setItemsPerView(1);
      else if (width < 768) setItemsPerView(2);
      else if (width < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % products.length);
    }, 10000); // 10s
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => setCurrentIndex(index);

  // Transform value for track
  const getTransformValue = () => {
    return `translateX(-${currentIndex * (100 / itemsPerView)}%)`;
  };

  // Clone first few cards to create seamless infinite loop
  const visibleProducts = [...products, ...products.slice(0, itemsPerView)];

  return (
    <section className="gummy-slider-section">
      <div className="gummy-slider-container">
        <h2 className="gummy-slider-title">OUR PRODUCTS</h2>

        <div className="gummy-slider-wrapper">
          <div 
            className="gummy-slider-track"
            style={{ transform: getTransformValue(), transition: 'transform 0.5s ease-in-out' }}
          >
            {visibleProducts.map((product, index) => (
              <div 
                key={index} 
                className="gummy-card"
                onClick={() => product.link && window.open(product.link, "_blank")}
                style={{ cursor: 'pointer' }} // 👈 makes it clickable
              >
                <div className="gummy-card-image-wrapper">
                  <img src={product.image} alt={product.title} className="gummy-card-image" />
                </div>
                <div className="gummy-card-content">
                  <div className="gummy-card-accent-line"></div>
                  <h3 className="gummy-card-title">{product.title}</h3>
                  <p className="gummy-card-subtitle">{product.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gummy-slider-dots">
          {products.map((_, index) => (
            <button
              key={index}
              className={`gummy-dot ${index === currentIndex ? 'gummy-dot-active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GummyProductSlider;

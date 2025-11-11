import React, { useState, useEffect } from 'react';
import { FaHeartbeat, FaUserMd, FaChartLine, FaShieldAlt, FaCalendarCheck, FaStethoscope, FaClinicMedical, FaArrowRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './HealthCheck.css';
import Header from './Header';
import NewFooter from './NewFooter';

// Schema.org structured data for Medical Test Panel
const healthCheckSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTestPanel",
  "name": "Comprehensive Health Check-up Package",
  "description": "Complete health screening package including blood tests, vital checks, and doctor consultation for preventive healthcare.",
  "medicalSpecialty": "Preventive Medicine",
  "recognizingAuthority": {
    "@type": "MedicalOrganization",
    "name": "Aayush Wellness"
  },
  "code": {
    "@type": "MedicalCode",
    "code": "CHCP-001",
    "codingSystem": "Aayush Wellness Internal Code"
  },
  "usedToDiagnose": [
    "Diabetes",
    "Hypertension",
    "Cholesterol Disorders",
    "Liver Function",
    "Kidney Function",
    "Thyroid Disorders"
  ],
  "normalRange": "Results within specified reference ranges",
  "signDetected": ["Vital Signs", "Blood Markers", "Body Composition"]
};

// WebPage schema
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Health Check-up Services | Aayush Wellness | Preventive Healthcare",
  "description": "Comprehensive health check-ups at Aayush Wellness for early detection and prevention of diseases. Book your preventive health screening today.",
  "publisher": {
    "@type": "MedicalOrganization",
    "name": "Aayush Wellness",
    "url": "https://www.aayush.health",
    "logo": "https://www.aayush.health/logo.png"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.aayush.health/health-check"
  },
  "inLanguage": "en-IN"
};

// Breadcrumb schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://www.aayush.health/"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Health Check-up Services",
    "item": "https://www.aayush.health/health-check"
  }]
};

const HealthCheck = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('preventive');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className={`health-check-page transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Helmet>
        <title>Health Check-up Services | Aayush Wellness | Preventive Healthcare</title>
        <meta 
          name="description" 
          content="Comprehensive health check-ups at Aayush Wellness for early detection and prevention of diseases. Our preventive healthcare packages include full body checkup, blood tests, and doctor consultation. Book your health screening today." 
        />
        <meta name="keywords" content="health check-up, preventive healthcare, full body checkup, medical tests, Aayush Wellness, health screening, diagnostic tests, preventive medicine" />
        <meta property="og:title" content="Comprehensive Health Check-up Services | Aayush Wellness" />
        <meta property="og:description" content="Early detection saves lives. Book your comprehensive health check-up at Aayush Wellness for complete peace of mind and preventive healthcare solutions." />
        <meta property="og:url" content="https://www.aayush.health/health-check" />
        <meta property="og:type" content="website" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(healthCheckSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Hidden SEO Headers */}
      <h1 style={{ display: 'none' }}>Health Check-up Services | Aayush Wellness | Preventive Healthcare</h1>
      <h2 style={{ display: 'none' }}>Comprehensive Health Screenings & Preventive Care Solutions</h2>
      
      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden mt-0">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center px-6 md:px-4 transform translate-y-[-20px] md:translate-y-[-40px]">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Your Health, Our Priority
            </h1>
            <p className="text-xl md:text-3xl text-white/90 max-w-2xl mx-auto font-light px-2">
              Comprehensive Health Screenings for a Better Tomorrow
            </p>
            <button className="mt-8 bg-[#d1a272] hover:bg-[#b38a5c] text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-300">
              Book Your Check-up <FaArrowRight className="inline ml-2" />
            </button>
          </div>
        </div>
        <img 
          src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/How_Power_BI_Applications_Are_Reshaping_The_Healthcare_Industry_-_DataScienceCentral_com.jpg?v=1757676639"
          alt="Professional doctors in a hospital setting"
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'brightness(0.7) contrast(1.1) saturate(1.2)',
            transform: 'scale(1.1)',
            objectPosition: 'center 35%',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0
          }}
        />
      </div>

      {/* Content Section */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="content-card">
            <h2>Preventive Health Check-ups in India</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4 text-gray-700">
                  In India, preventive health check-ups are becoming increasingly recognized as a vital component of healthcare. 
                  With the rising burden of non-communicable diseases (NCDs) like diabetes, hypertension, and cardiovascular diseases, 
                  early detection through regular health screenings can significantly improve health outcomes.
                </p>
                <p className="text-gray-700">
                  Our comprehensive health check-up packages are designed to detect potential health issues before they become serious, 
                  allowing for timely intervention and better management of health conditions.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Pleading_for_Medical_Intelligence.jpg?v=1757410440" 
                  alt="Comprehensive health screening" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="content-card mt-8">
            <h2>Study Overview: Participation and Perceptions</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/The_Evolution_Of_Medical_Technology.jpg?v=1757676763" 
                  alt="Medical statistics and data analysis" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="mb-4 text-gray-700">
                  Our recent study on preventive health check-up participation revealed that only 35% of respondents had undergone 
                  a health check-up in the past year. The primary motivators included family history of diseases (42%), 
                  employer requirements (28%), and personal health concerns (30%).
                </p>
                <p className="text-gray-700">
                  However, significant barriers were identified, with 45% citing cost concerns, 30% reporting lack of time, 
                  and 25% expressing fear of discovering health issues. These findings highlight the need for more accessible 
                  and affordable preventive healthcare solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="content-card mt-8">
            <h2>Barriers to Preventive Health Check-ups</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <p className="mb-4 text-gray-700">
                  The study identified several barriers to preventive health check-ups, including a lack of awareness, laziness, and discomfort with medical procedures. This aligns with a broader trend in India, where many individuals do not seek preventive care unless prompted by illness or a doctor's recommendation. For example, a web report indicated that 75% of Indians never get diagnostic testing unless they are already ill. These barriers are significant, as they prevent early detection and management of diseases, leading to more severe health outcomes over time.
                </p>
                <p className="text-gray-700">
                  Aayush Wellness recognizes these challenges and is committed to overcoming them by raising awareness about the importance of preventive care. Through targeted health campaigns and accessible wellness products, we aim to make preventive health check-ups a more integral part of everyday life for individuals across India.
                </p>
              </div>
              <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Evaluacion_clinica.jpg?v=1757406967" 
                  alt="Overcoming healthcare challenges" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-16">
            Our <span className="text-primary">Approach</span> to Better Health
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaCalendarCheck className="text-4xl text-primary-500 mb-4" />,
                title: "Easy Scheduling",
                description: "Book appointments at your convenience with our online scheduling system"
              },
              {
                icon: <FaStethoscope className="text-4xl text-primary-500 mb-4" />,
                title: "Expert Consultation",
                description: "Access to experienced healthcare professionals for personalized advice"
              },
              {
                icon: <FaClinicMedical className="text-4xl text-primary-500 mb-4" />,
                title: "Comprehensive Care",
                description: "End-to-end healthcare services from diagnosis to treatment planning"
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-3 text-secondary">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewFooter />
    </div>
  );
};

export default HealthCheck;

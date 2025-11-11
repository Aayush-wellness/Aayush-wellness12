import React, { useEffect, useState } from 'react';
import SkeletonLoader from './SkeletonLoader';
import Header from './Header';
import NewFooter from './NewFooter';
import { Helmet } from 'react-helmet';
import './Malnutrition.css';

// Schema.org structured data for Health Topic with enhanced details
const malnutritionSchema = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "HealthTopicContent"],
  "@id": "https://www.aayush.health/malnutrition#webpage",
  "name": "Combating Malnutrition in India | Aayush Wellness",
  "headline": "Understanding and Addressing India's Nutritional Challenges",
  "description": "Aayush Wellness is committed to fighting malnutrition in India through education, awareness, and nutritional solutions. Learn about the causes, effects, and our initiatives to combat malnutrition across Indian communities.",
  "url": "https://www.aayush.health/malnutrition",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.aayush.health/malnutrition"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.aayush.health/#organization",
    "name": "Aayush Wellness",
    "url": "https://www.aayush.health",
    "logo": "https://www.aayush.health/logo.png"
  },
  "image": "https://www.aayush.health/images/malnutrition-awareness.jpg",
  "keywords": [
    "malnutrition in India",
    "nutritional health solutions",
    "child malnutrition prevention",
    "Aayush Wellness nutrition programs",
    "combating malnutrition",
    "nutritional deficiencies",
    "health and wellness India"
  ],
  "about": {
    "@type": "MedicalCondition",
    "name": "Malnutrition",
    "description": "Malnutrition refers to deficiencies, excesses or imbalances in a person's intake of energy and/or nutrients. It includes undernutrition, micronutrient-related malnutrition, and overweight/obesity.",
    "cause": [
      "Inadequate dietary intake",
      "Poverty and food insecurity",
      "Lack of breastfeeding",
      "Infectious diseases"
    ],
    "possibleTreatment": [
      "Nutritional supplements",
      "Dietary education",
      "Community nutrition programs",
      "Medical treatment for underlying conditions"
    ]
  },
  "audience": {
    "@type": "PeopleAudience",
    "suggestedGender": "Unisex",
    "suggestedMinAge": "18",
    "geographicArea": {
      "@type": "Country",
      "name": "India"
    }
  },
  "mentions": [
    {"@type": "Thing", "name": "Protein Energy Malnutrition"},
    {"@type": "Thing", "name": "Micronutrient Deficiency"},
    {"@type": "Thing", "name": "Nutrition Education"},
    {"@type": "Thing", "name": "Public Health India"}
  ],
  "datePublished": "2023-01-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "inLanguage": "en-IN"
};

// Breadcrumb schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.aayush.health/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Health Topics",
      "item": "https://www.aayush.health/health-topics"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Malnutrition in India",
      "item": "https://www.aayush.health/malnutrition"
    }
  ]
};

// Organization schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.aayush.health/#organization",
  "name": "Aayush Wellness",
  "url": "https://www.aayush.health",
  "logo": "https://www.aayush.health/logo.png",
  "description": "Aayush Wellness is dedicated to improving health and wellness through natural products, education, and community initiatives across India.",
  "sameAs": [
    "https://www.facebook.com/aayushwellness",
    "https://www.instagram.com/aayushwellness",
    "https://twitter.com/aayushwellness",
    "https://www.linkedin.com/company/aayushwellness"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service",
    "email": "info@aayush.health",
    "availableLanguage": ["English", "Hindi"]
  }
};

function Malnutrition() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);

    if (loading) {
        return <SkeletonLoader />;
    }
    
    return (
        <div className="malnutrition-page">
            <Helmet>
                <title>Combating Malnutrition in India | Aayush Wellness</title>
                <meta 
                    name="description" 
                    content="Aayush Wellness is committed to fighting malnutrition in India through education, awareness, and nutritional solutions. Learn about the causes, effects, and our initiatives to combat malnutrition across Indian communities." 
                />
                <meta name="keywords" content="malnutrition in India, nutritional health solutions, child malnutrition prevention, Aayush Wellness nutrition programs, combating malnutrition, nutritional deficiencies, health and wellness India" />
                <meta property="og:title" content="Combating Malnutrition in India | Aayush Wellness" />
                <meta property="og:description" content="Learn how Aayush Wellness is addressing India's malnutrition crisis through innovative nutritional solutions and community programs." />
                <meta property="og:url" content="https://www.aayush.health/malnutrition" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://www.aayush.health/images/malnutrition-awareness.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                
                {/* Schema.org JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify(malnutritionSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(organizationSchema)}
                </script>
            </Helmet>
            
            <Header />
            
            {/* Hidden SEO Headers */}
            <h1 style={{ display: 'none' }}>Combating Malnutrition in India | Aayush Wellness</h1>
            <h2 style={{ display: 'none' }}>Understanding and Addressing India's Nutritional Challenges</h2>
            
            {/* Hero Section */}
            <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden mt-16 md:mt-20">
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="text-center px-6 md:px-4 transform translate-y-[-20px] md:translate-y-[-40px]">
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                            Combating Malnutrition in India
                        </h1>
                        <p className="text-xl md:text-3xl text-white/90 max-w-2xl mx-auto font-light px-2">
                            Nourishing Communities, Building a Healthier Future
                        </p>
                    </div>
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Healthy food and nutrition"
                    className="w-full h-full object-cover object-center"
                    style={{
                        filter: 'brightness(0.7) contrast(1.1) saturate(1.2)',
                        transform: 'scale(1.1)'
                    }}
                />
            </div>

            {/* Introduction Section */}
            <section className="py-12 px-4 md:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2   className=" md:text-4xl font-bold text-gray-800 mb-4" 
  style={{ marginTop: "90px" }} >
                            India's Malnutrition Crisis
                        </h2>
                        <div className="w-24 h-1 bg-green-600 mx-auto"></div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                                <img 
                                    src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/016_20180919-8.webp?v=1757403049" 
                                    alt="Malnutrition in India" 
                                    className="rounded-lg shadow-md w-full h-auto"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="      font-bold text-gray-800 mb-4">
                                    India's Malnutrition Crisis and How Aayush Wellness is Treating It
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Malnutrition in India is a critical issue affecting a significant portion of the population, presenting challenges in both under-nutrition and over-nutrition. Despite economic growth, over one-third of the world's malnourished children live in India, making it a pressing concern that demands immediate attention.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Various factors contribute to this crisis, including economic inequality, poor dietary practices, lack of education, and inadequate healthcare infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Key Issues Section */}
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="      font-bold text-gray-800 mb-4">The Growing Concern of Over-nutrition</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Over-nutrition, though often overlooked, is equally concerning, especially in urban areas where obesity is on the rise. This dual burden of malnutrition—where both underweight and overweight individuals coexist—is driven by lifestyle changes, lack of physical activity, and unhealthy diets.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                At Aayush Wellness, we acknowledge this growing problem. Our health-focused products are crafted to offer balanced nutrition without excessive calories, aiming to prevent obesity-related conditions and promote a healthier lifestyle.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="      font-bold text-gray-800 mb-4">Recent Observations and Regional Variations</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Recent studies indicate significant variation in malnutrition rates across different Indian states. While more developed states show lower percentages of underweight children, the rates are still alarmingly high compared to global standards.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                This diversity in nutritional outcomes underscores the need for state-specific approaches. Our product range at Aayush Wellness is tailored to meet these unique nutritional needs, ensuring that both under-nutrition and over-nutrition are effectively addressed across various regions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-16 bg-green-700 text-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="   md:text-4xl font-bold mb-4" style={{color:"white"}}>
                            Management and Strategic Interventions
                        </h2>
                        <div className="w-24 h-1 bg-white mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="mb-6 leading-relaxed text-lg" style={{color:"#000000"}}>
                                India has implemented several programs to combat malnutrition, including the Integrated Child Development Services (ICDS) and the Midday Meal Scheme. These initiatives aim to improve child and maternal nutrition through supplementary feeding, health education, and pre-school education.
                            </p>
                            <p className="mb-6 leading-relaxed text-lg" style={{color:"#000000"}}>
                                However, challenges remain, such as inadequate coverage and poor service delivery. At Aayush Wellness, we complement these efforts by offering high-quality, nutritionally fortified products that can easily integrate into daily diets, enhancing the nutritional value of these government initiatives.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-2" >
                            <img 
                                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-09-09_125916.png?v=1757403064" 
                                alt="Nutrition Programs" 
                                className="rounded-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Long-term Solutions Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="   md:text-4xl font-bold text-gray-800 mb-4">
                            Long-term Solutions and Aayush Wellness's Role
                        </h2>
                        <div className="w-24 h-1 bg-green-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Addressing malnutrition in India requires a multifaceted approach, focusing on socioeconomic development, improving healthcare infrastructure, and enhancing public health interventions.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Aayush Wellness is committed to this vision by promoting the fortification of staple foods with essential nutrients and developing accessible wellness products. Moreover, we advocate for robust monitoring and evaluation systems to assess the impact of nutritional programs and ensure their effectiveness.
                            </p>
                        </div>
                        <div>
                            <h3 className="      font-bold text-gray-800 mb-4">Our Goal</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our goal is to reach the most vulnerable populations, providing them with the tools they need to overcome malnutrition. Through our efforts, we aim to significantly reduce malnutrition and improve the overall well-being of India's population.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="   font-bold text-gray-800 mb-6">Conclusion: A Path Forward</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Malnutrition remains a complex and pervasive issue in India, contributing to a significant health burden. However, with targeted interventions and comprehensive strategies, it is possible to address the root causes of malnutrition.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Aayush Wellness is dedicated to this mission, working to enhance public health interventions and ensure equitable access to nutritious food and healthcare. Through our efforts, we aim to significantly reduce malnutrition and improve the overall well-being of India's population.
                        </p>
                    </div>
                </div>
            </section>

            <NewFooter/>
        </div>
    );
}

export default Malnutrition;

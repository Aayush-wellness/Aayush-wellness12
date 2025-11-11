import React, { useState } from 'react';
import Header from './Header';
import NewFooter from './NewFooter';
import { Link } from 'react-router-dom';

// Import your assets or use placeholder images for now
// Replace these with your actual image imports
const doctorImage = 'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/portrait-beautiful-brunette-nurse-isolated-black.png?v=1753270913'; // Doctor image
const heartIcon = 'https://i.imgur.com/JWEuKlf.png'; // Placeholder for heart icon
const stethoscopeIcon = 'https://i.imgur.com/O5Ud0Ji.png'; // Placeholder for stethoscope icon
const ambulanceIcon = 'https://i.imgur.com/w86CUtJ.png'; // Placeholder for ambulance icon
const medicineIcon = 'https://i.imgur.com/AgCgqxz.png'; // Placeholder for medicine icon
const doctorIcon = 'https://i.imgur.com/8Roq42M.png'; // Placeholder for doctor icon
const labIcon = 'https://i.imgur.com/YFnpTlL.png'; // Placeholder for lab icon
const serviceImage1 = 'https://i.imgur.com/OzXrpB6.jpg'; // Placeholder for service image
const serviceImage2 = 'https://i.imgur.com/XVZVkbI.jpg'; // Placeholder for service image
const clientImage1 = 'https://i.imgur.com/8NXizbM.jpg'; // Placeholder for client image
const clientImage2 = 'https://i.imgur.com/EgPyUd0.jpg'; // Placeholder for client image
const partnersImage = 'https://i.imgur.com/FZg1WuD.png'; // Placeholder for partners image

const HealthCheckup = () => {
  // State to track which FAQ items are open
  const [openFAQ, setOpenFAQ] = useState(1); // Default to first item being open
  
  // Function to toggle FAQ items
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#F6F9FE] pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:pt-12 sm:pt-0 ">
            {/* Left Side - Text Content */}
            <div className="order-2 lg:order-1">
             
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-700 mb-6 leading-tight" style={{fontFamily: 'ROGBold, sans-serif'}}>
                Your Health Checkup <span className="text-blue-600">Starts Right Here</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>
                Book diagnostic tests from the comfort of your home or at your nearest Aayush Lab.
              </h2>
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed" style={{fontFamily: 'MinionPro, serif'}}>
                We offer trusted, doctor-approved health packages with 60–91+ parameters — including blood, thyroid, liver, kidney, sugar, vitamins & more. Our certified professionals ensure smooth, accurate sample collection and fast digital reports.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => window.open('https://aayushlabs.com/', '_blank')}
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-red-300/30" 
                  style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px'}}
                >
                  Book Health Checkup
                </button>
               
              </div>
              
              <div className="flex items-center mt-12 space-x-8">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-gray-900">10K+</span>
                  <span className="text-sm text-gray-500">Samples Tested</span>
                </div>
                
                <div className="w-px h-12 bg-gray-300"></div>
                
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-gray-900">100+</span>
                  <span className="text-sm text-gray-500">Health Parameters</span>
                </div>
                
                <div className="w-px h-12 bg-gray-300"></div>
                
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-gray-900">10+</span>
                  <span className="text-sm text-gray-500">Locations & Growing</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-70"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-100 rounded-full filter blur-3xl opacity-70"></div>
                
                <img 
                  src={doctorImage} 
                  alt="Doctor" 
                  className="w-full h-auto relative z-10 rounded-2xl"
                />
                
                {/* Floating Card 1 - Test Results */}
                <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-xl z-20 hidden lg:block">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Test Results</p>
                      <p className="font-medium text-gray-900">Available</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Card 2 - Health Score */}
                <div className="absolute bottom-10 -right-10 bg-white p-4 rounded-xl shadow-xl z-20 hidden lg:block">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Health Score</p>
                      <p className="font-medium text-gray-900">85/100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold !text-black mb-4" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px'}}>Why Choose Our Health Checkup Services?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto" style={{fontFamily: 'MinionPro, serif'}}>Comprehensive health assessments with state-of-the-art diagnostic technology and expert medical professionals to ensure your optimal health and wellbeing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 - Comprehensive Testing */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-700 mb-3 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Comprehensive Testing</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-2 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Complete Health Analysis</h4>
              <p className="text-gray-700 text-center" style={{fontFamily: 'MinionPro, serif'}}>Over 200+ test parameters covering all major health aspects including blood work, cardiac health, diabetes screening, and vital organ function assessment.</p>
            </div>
            
            {/* Feature 2 - Advanced Technology */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-red-700 mb-3 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Advanced Technology</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-2 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>State-of-the-Art Equipment</h4>
              <p className="text-gray-700 text-center" style={{fontFamily: 'MinionPro, serif'}}>Latest diagnostic equipment and laboratory technology ensuring accurate results with quick turnaround times and reliable health insights.</p>
            </div>
            
            {/* Feature 3 - Expert Analysis */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-red-700 mb-3 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Expert Analysis</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-2 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Professional Interpretation</h4>
              <p className="text-gray-700 text-center" style={{fontFamily: 'MinionPro, serif'}}>Detailed report analysis by qualified medical professionals with personalized recommendations for maintaining and improving your health.</p>
            </div>
            
            {/* Feature 4 - Convenient Service */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-red-700 mb-3 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Convenient Service</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-2 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Home Sample Collection</h4>
              <p className="text-gray-700 text-center" style={{fontFamily: 'MinionPro, serif'}}>Free home sample collection service with flexible scheduling and digital report delivery for your convenience and comfort.</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* Health Checkup Packages Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Health checkup image */}
              <div className="relative bg-blue-100 rounded-full w-96 h-96 mx-auto overflow-hidden">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/happy-lady-with-clipboard-looking-happy.png?v=1753270916" 
                  alt="Health checkup specialist" 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-full h-auto"
                />
                
                
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold !text-black mb-6" style={{fontFamily: 'ROGBold, sans-serif'}}>
                Complete Health Checkup Packages
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed" style={{fontFamily: 'MinionPro, serif'}}>
                Choose from our comprehensive health checkup packages designed to assess your overall health status and detect potential health issues early.
              </p>
              
              <div className="mb-6 space-y-2">
                <div className="flex items-center text-red-600">
                  <span className="mr-2">✔</span>
                  <span style={{fontFamily: 'MinionPro, serif'}}>Basic, Advanced & Premium packages available</span>
                </div>
                <div className="flex items-center text-red-600">
                  <span className="mr-2">✔</span>
                  <span style={{fontFamily: 'MinionPro, serif'}}>Free home sample collection</span>
                </div>
                <div className="flex items-center text-red-600">
                  <span className="mr-2">✔</span>
                  <span style={{fontFamily: 'MinionPro, serif'}}>Digital reports within 24 hours</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center" style={{fontFamily: 'ROGBold, sans-serif'}}>
                  Package Includes:
                </h3>
               
              </div>
              
              {/* Package Options */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <div className="w-5 h-5">
                    <input 
                      type="radio" 
                      id="homecare" 
                      name="package-type" 
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      defaultChecked
                    />
                  </div>
                  <label htmlFor="homecare" className="flex items-center justify-between w-full cursor-pointer">
                    <span className="text-gray-700">Aayush Homecare Basic</span>
                    <span className="font-bold text-red-600">₹399</span>
                  </label>
                </div>
                
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <div className="w-5 h-5">
                    <input 
                      type="radio" 
                      id="couple" 
                      name="package-type" 
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                  </div>
                  <label htmlFor="couple" className="flex items-center justify-between w-full cursor-pointer">
                    <span className="text-gray-700">Aayush Couple Wellness</span>
                    <span className="font-bold text-red-600">₹699</span>
                  </label>
                </div>
                
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <div className="w-5 h-5">
                    <input 
                      type="radio" 
                      id="suraksha" 
                      name="package-type" 
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                  </div>
                  <label htmlFor="suraksha" className="flex items-center justify-between w-full cursor-pointer">
                    <span className="text-gray-700">Aayush Suraksha Basic</span>
                    <span className="font-bold text-red-600">₹749</span>
                  </label>
                </div>
              </div>
              
              <button 
                onClick={() => window.open('https://aayushlabs.com/', '_blank')}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg" 
                style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px'}}
              >
                Book Health Checkup
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Health Checkup Specialities Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold !text-black mb-4 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px'}}>Our Diagnostic Specialties</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4 text-center" style={{fontFamily: 'ROGBold, sans-serif'}}>Affordable. Accurate. At Your Doorstep.</h3>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg text-center" style={{fontFamily: 'MinionPro, serif'}}>
              Choose from curated health packages designed by expert doctors and powered by NABL-certified labs. Get 60–91+ essential health parameters tested from the comfort of your home. Fast reports. Trusted results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Homecare Basic */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🩺</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Homecare Basic – ₹399</h3>
              <p className="text-gray-600 text-sm mb-3 text-center" style={{fontFamily: 'MinionPro, serif'}}>
                Get 91 essential health parameters including CBC, LFT, KFT, Thyroid, Lipid, and more — ideal for regular checkups.
              </p>
              <div className="flex items-center justify-center text-green-600 text-sm">
              
                <span style={{fontFamily: 'MinionPro, serif'}}>Includes Free Home Sample Collection</span>
              </div>
            </div>

            {/* Couple Wellness */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Couple Wellness Package – ₹699</h3>
              <p className="text-gray-600 text-sm mb-3 text-center" style={{fontFamily: 'MinionPro, serif'}}>
                Designed for partners who care for each other's health. Covers vital health markers for both men and women.
              </p>
              <div className="flex items-center justify-center text-blue-600 text-sm">
             
                <span style={{fontFamily: 'MinionPro, serif'}}>2 Reports Delivered in 6–8 Hours</span>
              </div>
            </div>

            {/* Suraksha Basic */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🛡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Suraksha Basic – ₹799</h3>
              <p className="text-gray-600 text-sm mb-3 text-center" style={{fontFamily: 'MinionPro, serif'}}>
                A preventive health package with 91 markers covering diabetes, thyroid, liver, kidney, blood, and more.
              </p>
              <div className="flex items-center justify-center text-purple-600 text-sm">
               
                <span style={{fontFamily: 'MinionPro, serif'}}>Early disease detection made affordable</span>
              </div>
            </div>

            {/* Vital Basic */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Vital Basic – ₹999</h3>
              <p className="text-gray-600 text-sm mb-3 text-center" style={{fontFamily: 'MinionPro, serif'}}>
                Tracks your key organ functions including liver, kidney, blood, thyroid, and lipid profile with added vitamins and minerals.
              </p>
              <div className="flex items-center justify-center text-orange-600 text-sm">
                
                <span style={{fontFamily: 'MinionPro, serif'}}>Great for health monitoring of working professionals</span>
              </div>
            </div>

            {/* Silver Shield */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Silver Shield – Men/Women – ₹1,199</h3>
              <p className="text-gray-600 text-sm mb-3 text-center" style={{fontFamily: 'MinionPro, serif'}}>
                Gender-specific packages focusing on hormonal, reproductive, and metabolic health, alongside full-body testing.
              </p>
              <div className="flex items-center justify-center text-indigo-600 text-sm">
                
                <span style={{fontFamily: 'MinionPro, serif'}}>Includes Iron, Calcium, Vitamin D, Testosterone/PCOD panels</span>
              </div>
            </div>

            {/* Gold Wellness */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Gold Wellness Package – ₹1,499</h3>
              <p className="text-gray-600 text-sm mb-3 text-center" style={{fontFamily: 'MinionPro, serif'}}>
                A complete premium diagnostic package covering 91+ parameters — perfect for annual checkups and deep diagnostics.
              </p>
              <div className="flex items-center justify-center text-yellow-600 text-sm">
                
                <span style={{fontFamily: 'MinionPro, serif'}}>Fast TAT (6–12 hrs), ideal for executives & families</span>
              </div>
            </div>
          </div>

         
          
        </div>
      </section>
      
    {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full mb-4">
              <span className="text-xl font-medium" style={{fontFamily: 'ROGBold, sans-serif'}}>Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold !text-black mb-4" style={{fontFamily: 'ROGBold, sans-serif'}}>What Our Customers Say</h2>
            <p className="text-gray-700 max-w-2xl mx-auto" style={{fontFamily: 'MinionPro, serif'}}>Hear from those who have experienced our comprehensive health checkup services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <img src="https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="Client" className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Amit Kumar</h4>
                  
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "The comprehensive health checkup package was excellent. The home collection service was convenient and the detailed report helped me understand my health status completely. The team was professional and results were accurate."
              </blockquote>
              
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <img src="https://plus.unsplash.com/premium_photo-1682092039530-584ae1d9da7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="Client" className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Sunita Sharma</h4>
                  
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "I'm impressed with their health checkup services. The comprehensive testing covered all my health concerns and the digital report was delivered quickly. The medical consultation after the results was very helpful for understanding my health better."
              </blockquote>
              
            </div>
          </div>
        </div>
      </section>
      
      
      
      <NewFooter />
    </>
  );
};

export default HealthCheckup;

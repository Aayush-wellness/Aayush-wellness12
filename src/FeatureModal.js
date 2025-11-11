import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const FeatureModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show modal on homepage
    if (location.pathname !== '/') {
      return;
    }

    // Check if user has seen the modal before (permanent)
    const hasSeenModal = localStorage.getItem('hasSeenFeatureModal');
    
    // Check if this is internal navigation (set by App.js)
    const isInternalNavigation = sessionStorage.getItem('internalNavigation') === 'true';
    
    // Show modal if:
    // 1. First time user (!hasSeenModal) OR
    // 2. NOT internal navigation (meaning it's a refresh, direct URL, or new tab)
    if (!hasSeenModal || !isInternalNavigation) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000); // 2 second delay

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setIsOpen(false);
    // Mark that user has seen the modal (for first-time visit tracking)
    localStorage.setItem('hasSeenFeatureModal', 'true');
  };

  const handleFeatureClick = (feature) => {
    handleClose();
    // Mark that we're doing internal navigation
    sessionStorage.setItem('internalNavigation', 'true');
    // Feature click will be handled by Link navigation
  };

  const handleBackdropClick = (e) => {
    // Only close if clicking the backdrop, not the modal content
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-3 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div 
  className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto relative overflow-hidden max-h-[70vh] h-[70vh] flex flex-col overflow-y-auto"
  style={{ minHeight: '0', marginTop: 'env(safe-area-inset-top, 0)' }}
  onClick={(e) => e.stopPropagation()}
>
   {/* X Button */}
  <button
    onClick={handleCloseClick}
    onTouchStart={handleCloseClick}
    className="absolute top-3 right-3 z-50 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full p-2 sm:p-3 transition-all duration-200 shadow-lg active:scale-95 touch-manipulation cursor-pointer"
    style={{ 
      WebkitTapHighlightColor: 'transparent',
      WebkitUserSelect: 'none',
      userSelect: 'none'
    }}
    type="button"
  >
    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>

  {/* ... */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
    {/* Feature 1 - Book Consultation */}
    <div className="relative p-4 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-100 group hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-25 transition-all duration-300 flex flex-col h-full min-h-0">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <img 
          src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/envato-labs-image-edit_1.png?v=1753250189" 
          alt="Medical consultation" 
          className="w-full h-full object-cover !pt-0"
        />
      </div>
      <div className="relative text-center flex-1 flex flex-col justify-center">
        {/* Feature Image */}
        <div className="mb-2 sm:mb-4 relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl overflow-hidden shadow-lg ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
            <img 
              src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/envato-labs-image-edit_1.png?v=1753250189" 
              alt="Doctor consultation" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 !pt-0"
            />
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2 group-hover:text-blue-800 transition-colors duration-300 text-center" style={{fontFamily: 'ROGBold, sans-serif'}}>
          Book Consultation
        </h3>
        <p className="hidden sm:block text-gray-600 mb-2 text-sm sm:text-base leading-relaxed px-2" style={{fontFamily: 'MinionPro, serif'}}>
          Connect with experienced doctors for personalized medical advice and treatment plans.
        </p>
        <div className="space-y-1 sm:space-y-2 mb-2">
          <div className="flex items-center justify-center text-xs sm:text-sm text-gray-600 bg-white/60 rounded-full py-1 px-3 sm:px-4">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span>Expert Medical Consultation</span>
          </div>
          <div className="flex items-center justify-center text-xs sm:text-sm text-gray-600 bg-white/60 rounded-full py-1 px-3 sm:px-4">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span>Online & In-Person Options</span>
          </div>
        </div>
      </div>
      <div className="relative mt-auto pt-2">
        <Link
          to="/consultation"
          onClick={() => handleFeatureClick('consultation')}
          className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base group"
          style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '2px'}}
        >
          <span>Book Consultation</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
    {/* Feature 2 - Book Health Checkup */}
    <div className="relative p-4 sm:p-6 lg:p-8 group hover:bg-gradient-to-br hover:from-red-50 hover:to-red-25 transition-all duration-300 flex flex-col h-full min-h-0">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <img 
          src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/happy-lady-with-clipboard-looking-happy.png?v=1753270916" 
          alt="Health checkup" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative text-center flex-1 flex flex-col justify-center">
        {/* Feature Image */}
        <div className="mb-2 sm:mb-4 relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl overflow-hidden shadow-lg ring-4 ring-red-100 group-hover:ring-red-200 transition-all duration-300">
            <img 
              src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/happy-lady-with-clipboard-looking-happy.png?v=1753270916" 
              alt="Health checkup specialist" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 !pt-0"
            />
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-2 group-hover:text-red-800 transition-colors duration-300 text-center" style={{fontFamily: 'ROGBold, sans-serif'}}>
          Health Checkup
        </h3>
        <p className="hidden sm:block text-gray-600 mb-2 text-sm sm:text-base leading-relaxed px-2" style={{fontFamily: 'MinionPro, serif'}}>
          Comprehensive health assessments with 91+ parameters and home sample collection.
        </p>
        <div className="space-y-1 sm:space-y-2 mb-2">
          <div className="flex items-center justify-center text-xs sm:text-sm text-gray-600 bg-white/60 rounded-full py-1 px-3 sm:px-4">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span>Free Home Collection</span>
          </div>
          <div className="flex items-center justify-center text-xs sm:text-sm text-gray-600 bg-white/60 rounded-full py-1 px-3 sm:px-4">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span>Digital Reports in 24hrs</span>
          </div>
        </div>
      </div>
      <div className="relative mt-auto pt-2">
        <Link
          to="/healthcheck"
          onClick={() => handleFeatureClick('healthcheck')}
          className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base group"
          style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '2px'}}
        >
          <span>Book Health Checkup</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default FeatureModal;

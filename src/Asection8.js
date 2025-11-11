import React, { useEffect } from 'react'

function Asection8() {
    
  // Load Elfsight script once
  useEffect(() => {
    // Load Elfsight script only once
    const existing = document.getElementById('elfsight-platform-script');
    if (!existing) {
      const script = document.createElement('script');
      script.id = 'elfsight-platform-script';
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    // 🧩 Hide the "Free Instagram Feed widget" badge dynamically
    const hideElfsightBadge = setInterval(() => {
      const badge = document.querySelector('.eapps-widget-toolbar, .eapps-link, a[href*="elfsight.com"]');
      if (badge) {
        badge.style.display = 'none';
        badge.style.opacity = '0';
        badge.style.visibility = 'hidden';
        badge.style.pointerEvents = 'none';
        clearInterval(hideElfsightBadge);
      }
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(hideElfsightBadge);
  }, []);

  return (
    <div className="Container_container__NvvWg" style={{ padding: '24px 0', display: 'contents' }}>

      {/* Responsive wrapper to control sizing */}
      <div className="insta-embed">
        <div className="elfsight-app-b9e8c0a0-dbfd-4ec2-9b3c-1ed6cd06377f" data-elfsight-app-lazy></div>
      </div>
     

    </div>
    
  )
  
}


export default Asection8




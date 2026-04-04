import React, { useState, useEffect } from 'react';

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  
  // WhatsApp number (replace with your actual number)
  const whatsappNumber = "+6584401039"; // Replace with your actual WhatsApp number
  
  // Show widget after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your SEO services. Can you help me?");
    window.open(`https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${message}`, '_blank');
  };
  
  return (
    <div 
      className={`whatsapp-widget ${isVisible ? 'visible' : ''}`}
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 9999,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
      }}
    >
      {/* Tooltip */}
      <div 
        className={`whatsapp-tooltip ${isTooltipVisible ? 'visible' : ''}`}
        style={{
          position: 'absolute',
          bottom: '70px',
          right: '0',
          background: '#25D366',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '8px',
          fontSize: '14px',
          fontFamily: 'Sora, sans-serif',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          opacity: isTooltipVisible ? 1 : 0,
          transform: isTooltipVisible ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        Chat with us on WhatsApp!
        <div 
          style={{
            position: 'absolute',
            bottom: '-6px',
            right: '20px',
            width: '0',
            height: '0',
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid #25D366',
          }}
        />
      </div>
      
      {/* WhatsApp Button */}
      <div 
        className="whatsapp-button"
        style={{
          width: '60px',
          height: '60px',
          background: '#25D366',
          borderRadius: '50%',
          border: '2px solid #ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 20px rgba(15, 23, 42, 0.22)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.06)';
          e.currentTarget.style.boxShadow = '0 12px 24px rgba(15, 23, 42, 0.28)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(15, 23, 42, 0.22)';
        }}
      >
        {/* WhatsApp Icon */}
        <svg 
          width="26" 
          height="26" 
          viewBox="0 0 448 512" 
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
        >
          <path 
            d="M380.9 97.1C339-6.8 198.1-33 102.1 47.4 21.8 114.7-2.3 229.3 43 321.8L0 480l162.5-42.6c91.7 50 208.8 20.5 264.2-66.6 59.6-93.8 42.6-216.8-45.8-273.7zm-146.2 271c-26.6 0-52.7-7.2-75.6-20.8l-5.4-3.2-96.4 25.3 25.8-94.2-3.5-5.6c-42.8-68.1-22.6-158 45.5-201.1 68.1-43.1 158-23.1 201.2 45 43.1 68.1 23 158-45.1 201.1-23.4 14.8-50.4 22.6-77.5 22.6zm89.5-121.8c-4.9-2.4-29-14.3-33.5-15.9-4.5-1.6-7.8-2.4-11.1 2.4-3.3 4.9-12.7 15.9-15.6 19.1-2.9 3.3-5.7 3.7-10.6 1.2-28.9-14.5-47.8-25.9-66.8-58.7-5-8.6 5-8 14.5-26.7 1.6-3.3.8-6.1-.4-8.6-1.2-2.4-11.1-26.8-15.2-36.7-3.9-9.5-7.9-8.2-11.1-8.4-2.9-.2-6.1-.2-9.4-.2s-8.6 1.2-13.1 6.1c-4.5 4.9-17.2 16.8-17.2 41 0 24.2 17.6 47.6 20.1 50.8 2.5 3.3 34.7 53 84.1 74.4 11.8 5.1 21 8.2 28.2 10.5 11.8 3.7 22.6 3.2 31.1 1.9 9.5-1.4 29-11.8 33.1-23.2 4.1-11.4 4.1-21.1 2.9-23.1-1.2-2-4.5-3.3-9.4-5.7z"
            fill="white"
          />
        </svg>
      </div>
      
      {/* Pulse Animation */}
      <style jsx>{`
        @media (max-width: 768px) {
          .whatsapp-widget {
            bottom: 20px !important;
            right: 20px !important;
          }
          
          .whatsapp-button {
            width: 50px !important;
            height: 50px !important;
          }
          
          .whatsapp-tooltip {
            font-size: 12px !important;
            padding: 6px 10px !important;
            bottom: 60px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppWidget;

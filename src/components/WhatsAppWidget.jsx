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
    const message = encodeURIComponent("Hi! I'm interested in your services. Can you help me?");
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
        <img
          src="/whatsapp-icon.webp"
          alt="WhatsApp"
          width="30"
          height="30"
          style={{ display: 'block' }}
        />
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

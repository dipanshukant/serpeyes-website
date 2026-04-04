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
          border: '3px solid #ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35), 0 0 0 6px rgba(255,255,255,0.65)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 10px 28px rgba(37, 211, 102, 0.45), 0 0 0 6px rgba(255,255,255,0.75)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.35), 0 0 0 6px rgba(255,255,255,0.65)';
        }}
      >
        {/* WhatsApp Icon */}
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 16 16" 
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
        >
          <path 
            d="M13.601 2.326A7.85 7.85 0 0 0 8 0a7.94 7.94 0 0 0-6.14 12.976L0 16l3.113-.817A7.9 7.9 0 0 0 8 16h.003A8 8 0 0 0 16 8a7.85 7.85 0 0 0-2.399-5.674M8 14.5a6.5 6.5 0 0 1-3.312-.908l-.237-.142-1.846.484.493-1.801-.155-.241A6.5 6.5 0 1 1 8 14.5m3.441-4.238c-.153-.076-.9-.443-1.04-.493-.138-.05-.24-.076-.342.076s-.393.493-.482.595c-.089.101-.178.114-.33.038-.153-.076-.643-.237-1.225-.757-.453-.404-.759-.902-.848-1.055-.089-.152-.01-.234.067-.31.07-.071.153-.178.228-.266.076-.089.102-.152.153-.254.05-.101.025-.19-.013-.266-.038-.076-.342-.823-.469-1.129-.123-.295-.248-.255-.342-.26l-.291-.006a.56.56 0 0 0-.406.19c-.14.152-.532.52-.532 1.268s.545 1.472.621 1.573c.076.102 1.066 1.627 2.584 2.282.361.156.643.249.863.319.363.115.693.099.954.06.291-.043.9-.368 1.028-.724.127-.356.127-.66.089-.723-.038-.064-.14-.102-.292-.178" 
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

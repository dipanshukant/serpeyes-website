import React, { useState, useEffect } from 'react';

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  
  // WhatsApp number (replace with your actual number)
  const whatsappNumber = "+6512345678"; // Replace with your actual WhatsApp number
  
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
          transition: 'all 0.3s ease',
          animation: 'pulse 2s infinite',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 25px rgba(37, 211, 102, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.3)';
        }}
      >
        {/* WhatsApp Icon */}
        <svg 
          width="30" 
          height="30" 
          viewBox="0 0 24 24" 
          fill="white"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.885-5.335 9.885-11.893a11.842 11.842 0 00-3.48-8.413Z"/>
        </svg>
      </div>
      
      {/* Pulse Animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        
        .whatsapp-widget:hover .whatsapp-button {
          animation: none;
        }
        
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

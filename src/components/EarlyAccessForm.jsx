import { useState } from 'react';
import { CTA_SECTION } from '../content/config.js';

export default function EarlyAccessForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '24px', color: 'white' }}>
        <div style={{ fontSize: 32, marginBottom: 8 }}>🎉</div>
        <p style={{ fontSize: 17, fontWeight: 600, margin: '0 0 8px' }}>{CTA_SECTION.successTitle}</p>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', margin: 0 }}>{CTA_SECTION.successSub}</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: 8, maxWidth: 460, margin: '0 auto', flexWrap: 'wrap' }}>
      <input
        type="email"
        placeholder={CTA_SECTION.placeholder}
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ flex: 1, minWidth: 220, padding: '14px 18px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: 15, outline: 'none' }}
        onFocus={e => e.target.style.borderColor = 'white'}
        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}
      />
      <button
        style={{ padding: '14px 24px', background: 'white', color: '#1B4FD8', border: 'none', borderRadius: 10, fontWeight: 600, fontSize: 15, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', transition: 'transform 0.15s ease' }}
        onClick={handleSubmit}
        onMouseEnter={e => e.target.style.transform = 'translateY(-1px)'}
        onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
      >
        {CTA_SECTION.btnLabel}
      </button>
    </div>
  );
}

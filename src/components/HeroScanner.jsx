import { useState, useEffect } from 'react';
import { SCAN_CHECKS, RESULT_STATS } from '../content/config.js';

export default function HeroScanner() {
  const [phase, setPhase] = useState('typing');
  const [typedUrl, setTypedUrl] = useState('');
  const [scanLine, setScanLine] = useState(0);
  const [visibleChecks, setVisibleChecks] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1200);
  const targetUrl = 'www.yoursingaporebusiness.sg';
  const isMobile = viewportWidth <= 1024;
  console.log('[HeroScanner] viewportWidth:', viewportWidth, 'isMobile:', isMobile);

  const resetAll = () => {
    setPhase('typing');
    setTypedUrl('');
    setScanLine(0);
    setVisibleChecks([]);
    setShowResults(false);
    setScoreCount(0);
  };

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      while (!cancelled) {
        // PHASE 1: typing
        setPhase('typing');
        setTypedUrl('');
        for (let i = 0; i <= targetUrl.length; i++) {
          if (cancelled) return;
          setTypedUrl(targetUrl.slice(0, i));
          await new Promise(r => setTimeout(r, 55 + Math.random() * 40));
        }
        await new Promise(r => setTimeout(r, 500));

        // PHASE 2: scanning beam
        if (cancelled) return;
        setPhase('scanning');
        setVisibleChecks([]);
        for (let i = 0; i <= 100; i++) {
          if (cancelled) return;
          setScanLine(i);
          if (i % 10 === 0 && i > 0) {
            const idx = Math.floor(i / 10) - 1;
            if (idx < SCAN_CHECKS.length) {
              setVisibleChecks(prev => [...prev, idx]);
            }
          }
          await new Promise(r => setTimeout(r, 22));
        }
        await new Promise(r => setTimeout(r, 300));

        // PHASE 3: results
        if (cancelled) return;
        setPhase('results');
        setShowResults(false);
        await new Promise(r => setTimeout(r, 200));
        setShowResults(true);
        for (let n = 0; n <= 61; n++) {
          if (cancelled) return;
          setScoreCount(n);
          await new Promise(r => setTimeout(r, 18));
        }
        await new Promise(r => setTimeout(r, 3200));

        // PHASE 4: reset pause
        if (cancelled) return;
        setPhase('done');
        await new Promise(r => setTimeout(r, 1200));
        if (!cancelled) resetAll();
      }
    };
    run();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const statusIcon = (status) => {
    if (status === 'pass') return <span style={{ color: '#059669', fontWeight: 700, fontSize: 13 }}>✓</span>;
    if (status === 'fail') return <span style={{ color: '#dc2626', fontWeight: 700, fontSize: 13 }}>✕</span>;
    if (status === 'warning') return <span style={{ color: '#d97706', fontWeight: 700, fontSize: 13 }}>!</span>;
  };

  const statusBg = (status) => {
    if (status === 'pass') return { bg: '#f0fdf4', border: '#bbf7d0', text: '#166534' };
    if (status === 'fail') return { bg: '#fef2f2', border: '#fecaca', text: '#991b1b' };
    if (status === 'warning') return { bg: '#fffbeb', border: '#fde68a', text: '#92400e' };
  };

  return (
    <div style={{ maxWidth: 940, margin: isMobile ? '32px auto 0' : '56px auto 0', padding: isMobile ? '0 10px' : '0 4px' }}>
      <div style={{ background: '#f8faff', borderRadius: 18, padding: isMobile ? 10 : 16, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <div style={{ background: 'white', borderRadius: 13, border: '1px solid #e8edf5', overflow: 'hidden' }}>

          {/* browser chrome */}
          <div style={{ background: '#f1f5f9', borderBottom: '1px solid #e2e8f0', padding: isMobile ? '8px 10px' : '10px 16px', display: 'flex', alignItems: 'center', gap: isMobile ? 6 : 10 }}>
            <div style={{ display: 'flex', gap: 5 }}>
              {['#ef4444', '#f59e0b', '#22c55e'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
            </div>
            {/* url bar */}
            <div style={{ flex: 1, minWidth: 0, background: 'white', border: '1px solid #e2e8f0', borderRadius: 7, padding: isMobile ? '4px 8px' : '5px 12px', display: 'flex', alignItems: 'center', gap: 8, maxWidth: isMobile ? 'none' : 420, margin: '0 auto' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="#94a3b8" strokeWidth="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: isMobile ? 11 : 12, color: '#475569', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {typedUrl}
                {phase === 'typing' && <span style={{ display: 'inline-block', width: 1, height: 12, background: '#1B4FD8', marginLeft: 1, animation: 'blink 1s step-end infinite', verticalAlign: 'middle' }}>|</span>}
              </span>
              {(phase === 'scanning' || phase === 'results' || phase === 'done') && (
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: phase === 'scanning' ? '#f59e0b' : '#22c55e', animation: phase === 'scanning' ? 'pulse-dot 1s ease-in-out infinite' : 'none' }} />
                  <span style={{ fontSize: 10, color: phase === 'scanning' ? '#d97706' : '#059669', fontWeight: 600 }}>
                    {phase === 'scanning' ? 'Scanning...' : 'Complete'}
                  </span>
                </div>
              )}
            </div>
            {!isMobile && (
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                {['#e2e8f0', '#e2e8f0', '#e2e8f0'].map((c, i) => <div key={i} style={{ width: 24, height: 8, background: c, borderRadius: 3 }} />)}
              </div>
            )}
          </div>

          {/* main content area */}
          <div style=   {{ display: 'grid', gridTemplateColumns: isMobile ? 'minmax(0, 1fr)' : '1fr 1fr', alignItems: 'start' }}>

            {/* LEFT: fake website being scanned */}
            <div style={{ borderRight: '1px solid #f1f5f9', borderBottom: 'none', position: 'relative', overflow: 'hidden', display: isMobile ? 'none' : 'block' }}>
              <div style={{ position: 'relative', overflow: 'hidden', height: '100%', background: 'white' }}>

                {/* actual fake website that looks real */}
                <div style={{
                  transform: `scale(${isMobile ? 0.5 : 0.62})`,
                  transformOrigin: 'top left',
                  width: isMobile ? '200%' : '161%',
                  marginBottom: isMobile ? '-118%' : '-64%',
                  fontFamily: 'DM Sans, sans-serif',
                  opacity: phase === 'typing' ? 0.25 : phase === 'scanning' ? 0.7 : 0.95,
                  transition: 'opacity 0.5s ease',
                }}>

                  {/* fake nav */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px', borderBottom: '1px solid #f1f5f9', background: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 28, height: 28, background: '#1B4FD8', borderRadius: 6 }} />
                      <span style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>CoolAirSG</span>
                    </div>
                    <div style={{ display: 'flex', gap: 20 }}>
                      {['Services', 'About', 'Pricing', 'Contact'].map(l => (
                        <span key={l} style={{ fontSize: 13, color: '#475569' }}>{l}</span>
                      ))}
                    </div>
                    <div style={{ background: '#1B4FD8', color: 'white', fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 6 }}>Get Quote</div>
                  </div>

                  {/* fake hero */}
                  <div style={{ padding: '28px 24px 20px', background: 'linear-gradient(180deg, #f8faff 0%, white 100%)' }}>
                    <div style={{ fontSize: 26, fontWeight: 700, color: '#0f172a', lineHeight: 1.2, marginBottom: 10 }}>
                      Aircon Servicing &<br />Installation in Singapore
                    </div>
                    <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, marginBottom: 16, maxWidth: 340 }}>
                      Trusted by 2,000+ Singapore homeowners. Fast, reliable aircon servicing with same-day appointments available.
                    </div>
                    <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                      <div style={{ background: '#1B4FD8', color: 'white', fontSize: 13, fontWeight: 600, padding: '8px 18px', borderRadius: 7 }}>Book Now</div>
                      <div style={{ background: 'white', color: '#1B4FD8', fontSize: 13, fontWeight: 600, padding: '8px 18px', borderRadius: 7, border: '1.5px solid #1B4FD8' }}>View Prices</div>
                    </div>
                    {/* trust signals row */}
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 20, padding: '4px 10px' }}>
                        <span style={{ fontSize: 11, color: '#16a34a', fontWeight: 600 }}>✓ WhatsApp Us</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 20, padding: '4px 10px' }}>
                        <span style={{ fontSize: 11, color: '#16a34a', fontWeight: 600 }}>✓ +65 9123 4567</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 20, padding: '4px 10px' }}>
                        <span style={{ fontSize: 11, color: '#ea580c', fontWeight: 600 }}>✕ Credentials Missing</span>
                      </div>
                    </div>
                  </div>

                  {/* fake services section */}
                  <div style={{ padding: '16px 24px', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 12 }}>Our Services</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                      {[
                        { name: 'Chemical Wash', price: 'From $45' },
                        { name: 'Gas Top Up', price: 'From $60' },
                        { name: 'Installation', price: 'From $280' },
                      ].map(s => (
                        <div key={s.name} style={{ background: '#f8faff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 12px' }}>
                          <div style={{ fontSize: 12, fontWeight: 600, color: '#0f172a', marginBottom: 3 }}>{s.name}</div>
                          <div style={{ fontSize: 11, color: '#1B4FD8', fontWeight: 600 }}>{s.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* fake missing meta description warning area */}
                  <div style={{ padding: '12px 24px', borderTop: '1px solid #f1f5f9', position: 'relative' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 6 }}>Page description (meta):</div>
                    <div style={{
                      fontSize: 12, color: '#cbd5e1', fontStyle: 'italic',
                      padding: '6px 10px', borderRadius: 6,
                      border: (phase === 'results' || phase === 'done') ? '1.5px dashed #ef4444' : '1.5px dashed #e2e8f0',
                      background: (phase === 'results' || phase === 'done') ? '#fef2f2' : '#f8faff',
                      transition: 'all 0.4s ease',
                    }}>
                      {(phase === 'results' || phase === 'done')
                        ? <span style={{ color: '#dc2626', fontSize: 11, fontWeight: 600 }}>✕ No meta description found — this hurts your Google rankings</span>
                        : 'No meta description set...'}
                    </div>
                  </div>

                  {/* fake reviews section */}
                  <div style={{ padding: '12px 24px', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>Customer Reviews</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span style={{ color: '#f59e0b', fontSize: 13 }}>★★★★★</span>
                        <span style={{ fontSize: 12, color: '#64748b', fontWeight: 600 }}>4.8 (127 reviews)</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {[
                        { name: 'Priya T.', text: 'Fast and professional service. Highly recommend!', stars: 5 },
                        { name: 'Kevin L.', text: 'Great pricing, came on time and very clean work.', stars: 5 },
                      ].map((r, i) => (
                        <div key={i} style={{ background: '#f8faff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '8px 12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                            <span style={{ fontSize: 12, fontWeight: 700, color: '#0f172a' }}>{r.name}</span>
                            <span style={{ color: '#f59e0b', fontSize: 11 }}>{'★'.repeat(r.stars)}</span>
                          </div>
                          <p style={{ fontSize: 11, color: '#64748b', margin: 0, lineHeight: 1.5 }}>{r.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* fake contact + footer */}
                  <div style={{ padding: '12px 24px', borderTop: '1px solid #f1f5f9', background: '#f8faff' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
                      <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 12px' }}>
                        <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 4 }}>Call Us</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>+65 9123 4567</div>
                      </div>
                      <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 12px' }}>
                        <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 4 }}>WhatsApp</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#22c55e' }}>Message Us</div>
                      </div>
                    </div>
                    <div style={{
                      background: (phase === 'results' || phase === 'done') ? '#fef2f2' : '#f1f5f9',
                      border: (phase === 'results' || phase === 'done') ? '1.5px dashed #ef4444' : '1.5px dashed #e2e8f0',
                      borderRadius: 8, padding: '8px 12px',
                      transition: 'all 0.4s ease',
                    }}>
                      <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 3 }}>Business Registration:</div>
                      {(phase === 'results' || phase === 'done')
                        ? <span style={{ fontSize: 11, color: '#dc2626', fontWeight: 600 }}>✕ Business credentials not visible — trust signals incomplete</span>
                        : <span style={{ fontSize: 11, color: '#cbd5e1' }}>Business credentials: not found</span>
                      }
                    </div>
                  </div>

                  {/* fake site footer */}
                  <div style={{ background: '#0f172a', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 3 }}>CoolAirSG</div>
                      <div style={{ fontSize: 10, color: '#475569' }}>Aircon specialists since 2010</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 10, color: '#475569', marginBottom: 2 }}>Serving all Singapore regions</div>
                      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                        {['Privacy', 'Terms', 'Contact'].map(l => (
                          <span key={l} style={{ fontSize: 10, color: '#334155' }}>{l}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* scan beam */}
                {phase === 'scanning' && (
                  <div style={{
                    position: 'absolute', left: 0, right: 0,
                    top: `${scanLine}%`,
                    height: 2,
                    background: 'linear-gradient(90deg, transparent, #1B4FD8, #60a5fa, transparent)',
                    boxShadow: '0 0 12px rgba(27,79,216,0.5)',
                    transition: 'top 0.02s linear',
                    pointerEvents: 'none',
                  }} />
                )}
                {phase === 'scanning' && (
                  <div style={{
                    position: 'absolute', left: 0, right: 0,
                    top: 0, height: `${scanLine}%`,
                    background: 'linear-gradient(180deg, rgba(27,79,216,0.04) 0%, transparent 100%)',
                    pointerEvents: 'none',
                  }} />
                )}

                {/* typing idle overlay */}
                {phase === 'typing' && (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.6)' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#eff4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <circle cx="11" cy="11" r="8" stroke="#1B4FD8" strokeWidth="2" />
                          <path d="M21 21l-4.35-4.35" stroke="#1B4FD8" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <p style={{ fontSize: 12, color: '#94a3b8', margin: 0 }}>Enter URL to scan</p>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* RIGHT: check results */}
            <div style={{ padding: isMobile ? '12px 12px 14px' : '16px 16px', display: 'flex', flexDirection: 'column', gap: 0, alignSelf: 'start', width: '100%', minWidth: 0 }}>
              {phase === 'typing' && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <p style={{ fontSize: 13, color: '#94a3b8', textAlign: 'center' }}>SerpEyes will check 40+ Singapore SEO signals</p>
                </div>
              )}

              {(phase === 'scanning' || phase === 'results' || phase === 'done') && !showResults && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <p style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 8px' }}>Running checks...</p>
                  {SCAN_CHECKS.map((check, i) => {
                    const visible = visibleChecks.includes(i);
                    const s = statusBg(check.status);
                    return (
                      <div key={i} style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        padding: '5px 8px', borderRadius: 6,
                        background: visible ? s.bg : '#f8faff',
                        border: `1px solid ${visible ? s.border : '#f1f5f9'}`,
                        opacity: visible ? 1 : 0.3,
                        transition: 'all 0.3s ease',
                        transform: visible ? 'translateX(0)' : 'translateX(-6px)',
                      }}>
                        <span style={{ width: 16, textAlign: 'center', flexShrink: 0 }}>
                          {visible ? statusIcon(check.status) : <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#e2e8f0' }} />}
                        </span>
                        <span style={{ fontSize: 11, color: visible ? s.text : '#94a3b8', fontWeight: visible ? 500 : 400 }}>{check.label}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* RESULTS panel */}
              {showResults && (
                <div style={{ animation: 'fadeSlideUp 0.4s ease forwards' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                    <p style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Scan Complete</p>
                    <span style={{ fontSize: 10, background: '#dcfce7', color: '#166534', fontWeight: 600, padding: '2px 8px', borderRadius: 100 }}>serpeyes.com</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
                    {RESULT_STATS.map((s, i) => (
                      <div key={i} style={{ background: s.bg, borderRadius: 9, padding: '10px 12px', animation: `fadeSlideUp 0.3s ease ${i * 0.08}s both` }}>
                        <p style={{ fontSize: 10, color: '#94a3b8', margin: '0 0 3px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</p>
                        <p style={{ fontSize: 20, fontWeight: 700, color: s.color, margin: 0, fontFamily: 'Sora, sans-serif', lineHeight: 1 }}>
                          {s.label === 'SEO Score' ? scoreCount : s.value}
                          <span style={{ fontSize: 10, fontWeight: 500, color: '#94a3b8' }}>{s.unit}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 9, padding: '10px 12px', marginBottom: 8 }}>
                    <p style={{ fontSize: 11, color: '#92400e', fontWeight: 700, margin: '0 0 4px' }}>Top Priority Fixes</p>
                    {['Add meta description (missing)', 'Missing business trust credentials', 'Fix schema markup errors'].map((fix, i) => (
                      <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: 3 }}>
                        <span style={{ color: '#dc2626', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>✕</span>
                        <span style={{ fontSize: 11, color: '#92400e' }}>{fix}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: '#1B4FD8', borderRadius: 8, padding: '9px 14px', textAlign: 'center', cursor: 'pointer' }}>
                    <p style={{ fontSize: 12, color: 'white', fontWeight: 600, margin: 0 }}>Generate Full Report &rarr;</p>
                  </div>

                  {/* quick wins section */}
                  <div style={{
                    background: '#f0fdf4', border: '1px solid #bbf7d0',
                    borderRadius: 9, padding: '10px 12px', marginTop: 8,
                    animation: 'fadeSlideUp 0.3s ease 0.32s both',
                  }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: '#166534', margin: '0 0 6px' }}>
                      Quick Wins (fix this week)
                    </p>
                    {[
                      'Add meta description to homepage',
                      'Add missing trust credentials',
                      'Fix local contact accessibility',
                    ].map((win, i) => (
                      <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: 4 }}>
                        <span style={{ color: '#16a34a', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>→</span>
                        <span style={{ fontSize: 11, color: '#166534', lineHeight: 1.5 }}>{win}</span>
                      </div>
                    ))}
                  </div>

                  {/* competitor comparison teaser */}
                  <div style={{
                    background: '#f8faff', border: '1px solid #e2e8f0',
                    borderRadius: 9, padding: '10px 12px', marginTop: 8,
                    animation: 'fadeSlideUp 0.3s ease 0.4s both',
                  }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>
                      Top Competitors Ranking Above You
                    </p>
                    {[
                      { name: 'coolbestaircon.sg', score: 89 },
                      { name: 'sgairconpro.com.sg', score: 76 },
                      { name: 'airconking.sg', score: 71 },
                    ].map((c, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                        <span style={{ fontSize: 11, color: '#475569' }}>{c.name}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <div style={{ width: 60, height: 4, background: '#e2e8f0', borderRadius: 2, overflow: 'hidden' }}>
                            <div style={{ width: `${c.score}%`, height: '100%', background: '#1B4FD8', borderRadius: 2 }} />
                          </div>
                          <span style={{ fontSize: 11, fontWeight: 700, color: '#1B4FD8', minWidth: 20 }}>{c.score}</span>
                        </div>
                      </div>
                    ))}
                    <p style={{ fontSize: 10, color: '#94a3b8', margin: '6px 0 0', fontStyle: 'italic' }}>
                      Full competitor report included in SerpEyes
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* bottom status bar */}
          <div style={{ background: '#f8faff', borderTop: '1px solid #f1f5f9', padding: isMobile ? '8px 10px' : '8px 16px', display: 'flex', flexWrap: isMobile ? 'wrap' : 'nowrap', alignItems: 'center', gap: isMobile ? 8 : 16 }}>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { label: 'Checks', val: phase === 'typing' ? '40+' : `${visibleChecks.length}/10`, color: '#1B4FD8' },
                { label: 'Passed', val: phase === 'results' || phase === 'done' ? '6' : '...', color: '#059669' },
                { label: 'Failed', val: phase === 'results' || phase === 'done' ? '3' : '...', color: '#dc2626' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontSize: 10, color: '#94a3b8' }}>{item.label}:</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: item.color }}>{item.val}</span>
                </div>
              ))}
            </div>
            <div style={{ marginLeft: isMobile ? 0 : 'auto', display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1B4FD8' }} />
              <span style={{ fontSize: 10, color: '#64748b', fontWeight: 500 }}>Powered by SerpEyes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

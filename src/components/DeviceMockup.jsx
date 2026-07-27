import { useEffect, useRef, useState } from 'react';

// Homepage hero mockup, ported from the Claude Design project
// "Homepage Mockup Animation". Cycles through five services with a dark
// glowing panel, sliding tab indicator, and gentle float animations.

const TABS = [
  {
    key: 'website', label: 'Website', accent: '#ea580c', badgeIcon: '↗',
    badgeText: 'This site: delivered in 6 weeks', urlSuffix: 'yourbusiness.com',
    headline: 'Built To Turn Visitors Into Customers',
    sub: 'A fast, modern website built to turn visitors into customers.',
    stat1: { icon: '✓', value: '98', label: 'Speed score' },
    stat2: { icon: '★', value: '4.9', label: 'Client rating' },
    phoneLabel: 'Website',
    phoneFeed: [
      { icon: '●', title: 'New enquiry', sub: '2 min ago' },
      { icon: '↑', title: 'Traffic up 24%', sub: 'This week' },
      { icon: '✓', title: 'Site live', sub: 'Deployed' },
    ],
  },
  {
    key: 'app', label: 'App', accent: '#059669', badgeIcon: '↗',
    badgeText: 'Live on the App Store and Google Play', urlSuffix: 'yourbusiness.com/app',
    headline: 'Your Business, In Their Pocket',
    sub: 'Native and cross platform apps built around real user behaviour.',
    stat1: { icon: '★', value: '4.8', label: 'App rating' },
    stat2: { icon: '✓', value: '12k', label: 'Downloads' },
    phoneLabel: 'App',
    phoneFeed: [
      { icon: '●', title: 'New install', sub: '1 min ago' },
      { icon: '↑', title: 'Sessions up 31%', sub: 'This week' },
      { icon: '✓', title: 'Build shipped', sub: 'v2.4 live' },
    ],
  },
  {
    key: 'seo', label: 'SEO', accent: '#1B4FD8', badgeIcon: '↗',
    badgeText: 'Ranked page one in 90 days', urlSuffix: 'yourbusiness.com/seo',
    headline: 'Page One Is The Only Page That Counts',
    sub: 'Technical, on-page and content SEO that grows your organic visibility.',
    stat1: { icon: '↑', value: '#1', label: 'Google ranking' },
    stat2: { icon: '★', value: '3.2x', label: 'Organic traffic' },
    phoneLabel: 'SEO',
    phoneFeed: [
      { icon: '●', title: 'Keyword ranked #1', sub: 'Just now' },
      { icon: '↑', title: 'Traffic up 41%', sub: 'This month' },
      { icon: '✓', title: 'Report ready', sub: 'Monthly audit' },
    ],
  },
  {
    key: 'aeo', label: 'AEO', accent: '#db2777', badgeIcon: '↗',
    badgeText: 'Now visible inside ChatGPT', urlSuffix: 'yourbusiness.com/aeo',
    headline: 'Built For The Way People Search Now',
    sub: 'Show up inside ChatGPT, Perplexity and AI Overviews.',
    stat1: { icon: '✓', value: '6', label: 'AI engines covered' },
    stat2: { icon: '↑', value: '3.4x', label: 'Citation rate' },
    phoneLabel: 'AEO',
    phoneFeed: [
      { icon: '●', title: 'Cited by ChatGPT', sub: 'Just now' },
      { icon: '↑', title: 'AI mentions up', sub: 'This week' },
      { icon: '✓', title: 'Answer verified', sub: 'Perplexity' },
    ],
  },
  {
    key: 'marketing', label: 'Marketing', accent: '#ca8a04', badgeIcon: '↗',
    badgeText: '12 campaigns running on one dashboard', urlSuffix: 'yourbusiness.com/marketing',
    headline: 'Marketing That Moves Metrics',
    sub: 'Social, content strategy and campaigns tied to real revenue.',
    stat1: { icon: '↑', value: '3.4x', label: 'Return on ad spend' },
    stat2: { icon: '★', value: '26k', label: 'Leads generated' },
    phoneLabel: 'Marketing',
    phoneFeed: [
      { icon: '●', title: 'Campaign live', sub: 'Just launched' },
      { icon: '↑', title: 'Leads up 18%', sub: 'This week' },
      { icon: '✓', title: 'Budget optimised', sub: 'Auto-bid' },
    ],
  },
];

const ADVANCE_MS = 4200;
const FADE_MS = 260;
const CANVAS_W = 720;
const CANVAS_H = 800;

export default function DeviceMockup() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [scale, setScale] = useState(1);
  const timerRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => advance(), ADVANCE_MS);
    return () => {
      clearInterval(timerRef.current);
      clearTimeout(fadeTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(entries => {
      const w = entries[0].contentRect.width;
      if (w > 0) setScale(Math.min(1, w / CANVAS_W));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const advance = () => {
    setFading(true);
    fadeTimerRef.current = setTimeout(() => {
      setIndex(i => (i + 1) % TABS.length);
      setFading(false);
    }, FADE_MS);
  };

  const goTo = (i) => {
    if (i === index) return;
    clearInterval(timerRef.current);
    setFading(true);
    clearTimeout(fadeTimerRef.current);
    fadeTimerRef.current = setTimeout(() => {
      setIndex(i);
      setFading(false);
    }, FADE_MS);
  };

  const active = TABS[index];
  const accent = active.accent;
  const contentOpacity = fading ? 0 : 1;
  const contentShift = fading ? 'translateY(6px)' : 'translateY(0)';
  const fontStack = { sora: "'Sora', sans-serif", dm: "'DM Sans', sans-serif" };

  return (
    <div ref={wrapperRef} style={{ width: '100%', maxWidth: CANVAS_W, margin: '0 auto' }}>
      <style>{`
        @keyframes dmFloatLaptop { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes dmFloatPhone { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        @keyframes dmFloatBadge { 0%,100% { transform: translateY(0) rotate(3deg); } 50% { transform: translateY(-8px) rotate(1deg); } }
        @keyframes dmDrift { 0%,100% { transform: translate(0,0); } 50% { transform: translate(20px,-16px); } }
      `}</style>

      <div style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        <div style={{ width: CANVAS_W, height: CANVAS_H, position: 'relative', overflow: 'hidden', background: 'radial-gradient(120% 100% at 20% 10%, #111634 0%, #0a0d1f 55%, #070912 100%)', borderRadius: 24, fontFamily: fontStack.dm }}>

          {/* Glow blobs */}
          <div style={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%', top: -60, left: -80, background: accent, opacity: 0.22, filter: 'blur(70px)', transition: 'background 0.6s ease', animation: 'dmDrift 9s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', bottom: -60, right: -60, background: accent, opacity: 0.16, filter: 'blur(80px)', transition: 'background 0.6s ease', animation: 'dmDrift 11s ease-in-out infinite reverse' }} />

          {/* Badge */}
          <div style={{ position: 'absolute', top: 80, left: 44, zIndex: 5, display: 'flex', alignItems: 'center', gap: 10, padding: '11px 20px 11px 12px', borderRadius: 999, background: accent, boxShadow: '0 14px 30px -8px rgba(0,0,0,0.55)', animation: 'dmFloatBadge 5s ease-in-out infinite', transition: 'background 0.6s ease' }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{active.badgeIcon}</div>
            <div style={{ color: '#fff', fontFamily: fontStack.dm, fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap', opacity: contentOpacity, transform: contentShift, transition: 'opacity 0.3s ease, transform 0.3s ease' }}>{active.badgeText}</div>
          </div>

          {/* Laptop */}
          <div style={{ position: 'absolute', top: 150, left: 44, width: 560, transform: 'rotate(4deg)', transformOrigin: 'top left' }}>
            <div style={{ animation: 'dmFloatLaptop 6s ease-in-out infinite' }}>
              <div style={{ background: 'linear-gradient(180deg, #2b2f3a, #15171d)', borderRadius: 18, padding: '14px 14px 26px', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.65)' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3a3d46', margin: '0 auto 10px' }} />
                <div style={{ background: '#f8faff', borderRadius: 8, overflow: 'hidden' }}>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderBottom: '1px solid #e2e8f0', background: '#fff' }}>
                    <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                    </div>
                    <div style={{ flex: 1, background: '#f1f5f9', borderRadius: 999, padding: '6px 14px', fontSize: 12, color: '#475569', fontFamily: fontStack.dm }}>{active.urlSuffix}</div>
                  </div>

                  <div style={{ position: 'relative', display: 'flex', margin: '14px 18px 10px' }}>
                    <div style={{ position: 'absolute', top: 0, bottom: -4, left: `${index * 20}%`, width: '20%', background: accent, borderRadius: 999, transition: 'left 0.4s cubic-bezier(.4,0,.2,1), background 0.6s ease', zIndex: 0 }} />
                    {TABS.map((t, i) => (
                      <button
                        key={t.key}
                        onClick={() => goTo(i)}
                        style={{ flex: 1, position: 'relative', zIndex: 1, border: 'none', background: 'transparent', padding: '7px 4px', borderRadius: 999, fontFamily: fontStack.dm, fontWeight: 700, fontSize: 13, cursor: 'pointer', color: i === index ? '#ffffff' : '#64748b', transition: 'color 0.3s ease' }}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>

                  <div style={{ padding: '26px 30px 30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 26 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                        <div style={{ width: 22, height: 22, borderRadius: 7, background: '#1B4FD8', position: 'relative', flexShrink: 0 }}>
                          <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', background: '#fff', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                        </div>
                        <div style={{ fontFamily: fontStack.sora, fontWeight: 700, fontSize: 15, color: '#0f172a' }}>YourBrand</div>
                      </div>
                      <div style={{ display: 'flex', gap: 22, fontFamily: fontStack.dm, fontWeight: 500, fontSize: 13, color: '#475569' }}>
                        <div>Services</div><div>Work</div><div>Contact</div>
                      </div>
                    </div>

                    <div style={{ opacity: contentOpacity, transform: contentShift, transition: 'opacity 0.3s ease, transform 0.3s ease' }}>
                      <div style={{ fontFamily: fontStack.sora, fontWeight: 800, fontSize: 32, lineHeight: 1.15, color: '#0f172a', marginBottom: 12, letterSpacing: '-0.01em' }}>{active.headline}</div>
                      <div style={{ fontFamily: fontStack.dm, fontSize: 15, lineHeight: 1.55, color: '#475569', maxWidth: 400, marginBottom: 26 }}>{active.sub}</div>

                      <div style={{ display: 'flex', gap: 12, marginBottom: 26 }}>
                        <div style={{ background: accent, color: '#fff', fontFamily: fontStack.dm, fontWeight: 700, fontSize: 14, padding: '12px 22px', borderRadius: 10, transition: 'background 0.6s ease' }}>Get Started</div>
                        <div style={{ border: `1.5px solid ${accent}`, color: accent, fontFamily: fontStack.dm, fontWeight: 700, fontSize: 14, padding: '11px 22px', borderRadius: 10, transition: 'border-color 0.6s ease, color 0.6s ease' }}>Learn More</div>
                      </div>

                      <div style={{ display: 'flex', gap: 12 }}>
                        <div style={{ flex: 1, background: '#f1f5f9', borderRadius: 12, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
                          <div style={{ width: 34, height: 34, borderRadius: 9, background: accent, opacity: 0.14, position: 'absolute' }} />
                          <div style={{ width: 34, height: 34, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, fontWeight: 700, fontSize: 16, transition: 'color 0.6s ease' }}>{active.stat1.icon}</div>
                          <div>
                            <div style={{ fontFamily: fontStack.sora, fontWeight: 700, fontSize: 17, color: '#0f172a' }}>{active.stat1.value}</div>
                            <div style={{ fontFamily: fontStack.dm, fontSize: 12, color: '#94a3b8' }}>{active.stat1.label}</div>
                          </div>
                        </div>
                        <div style={{ flex: 1, background: '#f1f5f9', borderRadius: 12, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{ width: 34, height: 34, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, fontWeight: 700, fontSize: 16, transition: 'color 0.6s ease' }}>{active.stat2.icon}</div>
                          <div>
                            <div style={{ fontFamily: fontStack.sora, fontWeight: 700, fontSize: 17, color: '#0f172a' }}>{active.stat2.value}</div>
                            <div style={{ fontFamily: fontStack.dm, fontSize: 12, color: '#94a3b8' }}>{active.stat2.label}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div style={{ position: 'absolute', bottom: 6, right: 44, width: 200, transform: 'rotate(6deg)', zIndex: 6 }}>
            <div style={{ animation: 'dmFloatPhone 5.5s ease-in-out infinite' }}>
              <div style={{ background: 'linear-gradient(180deg, #2b2f3a, #15171d)', borderRadius: 30, padding: 10, boxShadow: '0 24px 50px -16px rgba(0,0,0,0.6)' }}>
                <div style={{ background: '#f8faff', borderRadius: 22, overflow: 'hidden', padding: '16px 14px 18px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 52, height: 16, background: '#15171d', borderRadius: '0 0 10px 10px' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '14px 0 16px' }}>
                    <div style={{ width: 18, height: 18, borderRadius: 6, background: '#1B4FD8', flexShrink: 0 }} />
                    <div style={{ fontFamily: fontStack.sora, fontWeight: 700, fontSize: 13, color: '#0f172a', opacity: contentOpacity, transition: 'opacity 0.3s ease' }}>{active.phoneLabel}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: contentOpacity, transform: contentShift, transition: 'opacity 0.3s ease, transform 0.3s ease' }}>
                    {active.phoneFeed.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f1f5f9', borderRadius: 9, padding: '8px 10px' }}>
                        <div style={{ width: 22, height: 22, borderRadius: 7, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 700, flexShrink: 0, transition: 'background 0.6s ease' }}>{item.icon}</div>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontFamily: fontStack.dm, fontWeight: 700, fontSize: 10.5, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</div>
                          <div style={{ fontFamily: fontStack.dm, fontSize: 9.5, color: '#94a3b8' }}>{item.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 14 }}>
                    <div style={{ width: 20, height: 5, borderRadius: 999, background: accent, transition: 'background 0.6s ease' }} />
                    <div style={{ width: 5, height: 5, borderRadius: 999, background: '#cbd5e1' }} />
                    <div style={{ width: 5, height: 5, borderRadius: 999, background: '#cbd5e1' }} />
                    <div style={{ width: 5, height: 5, borderRadius: 999, background: '#cbd5e1' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

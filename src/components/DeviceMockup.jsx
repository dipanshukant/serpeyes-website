import { useEffect, useRef, useState } from 'react';

// Rotating browser + phone mockup for the homepage hero. Cycles through the
// five services so the hero never reads as SEO-only, with a crossfade
// instead of a hard cut so nothing pops.

const PHASES = [
  {
    key: 'website',
    label: 'Website',
    accent: '#1B4FD8',
    tint: '#eff4ff',
    badgeIcon: '🚀',
    badgeText: 'This site: delivered in 6 weeks',
    tagline: 'A fast, modern website built to turn visitors into customers.',
    stats: [
      { icon: '⚡', value: '98', label: 'Speed score' },
      { icon: '★', value: '4.9', label: 'Client rating' },
    ],
    appRows: [
      { icon: '💬', title: 'New enquiry', sub: '2 min ago' },
      { icon: '📈', title: 'Traffic up 24%', sub: 'This week' },
      { icon: '✅', title: 'Site live', sub: 'Deployed' },
    ],
  },
  {
    key: 'app',
    label: 'App',
    accent: '#059669',
    tint: '#f0fdf4',
    badgeIcon: '📱',
    badgeText: 'This app: live on both stores',
    tagline: 'A native app your customers actually want to open.',
    stats: [
      { icon: '⬇️', value: '2.4k', label: 'Downloads' },
      { icon: '★', value: '4.8', label: 'App rating' },
    ],
    appRows: [
      { icon: '🔔', title: 'Push sent', sub: 'Just now' },
      { icon: '⚡', title: 'Crash-free', sub: '99.9%' },
      { icon: '🆕', title: 'v2.1 shipped', sub: 'This week' },
    ],
  },
  {
    key: 'seo',
    label: 'SEO',
    accent: '#ea580c',
    tint: '#fff7ed',
    badgeIcon: '🔍',
    badgeText: 'Ranking #3 for target keywords',
    tagline: 'Search rankings that keep climbing, not a one-month spike.',
    stats: [
      { icon: '📊', value: '+64%', label: 'Organic traffic' },
      { icon: '🏆', value: '#3', label: 'Google ranking' },
    ],
    appRows: [
      { icon: '🔗', title: 'New backlink', sub: 'From a DA 62 site' },
      { icon: '📝', title: 'Article published', sub: 'Today' },
      { icon: '📈', title: 'Rank up 4 spots', sub: 'This week' },
    ],
  },
  {
    key: 'aeo',
    label: 'AEO',
    accent: '#db2777',
    tint: '#fdf2f8',
    badgeIcon: '🤖',
    badgeText: 'Recommended by ChatGPT',
    tagline: 'Found and recommended inside AI answers, not just search results.',
    stats: [
      { icon: '💬', value: '12', label: 'AI mentions' },
      { icon: '🎯', value: 'Top 3', label: 'Perplexity answer' },
    ],
    appRows: [
      { icon: '✨', title: 'Cited by ChatGPT', sub: '2 hrs ago' },
      { icon: '🔎', title: 'Answer box hit', sub: 'Google AI Overview' },
      { icon: '📣', title: 'Perplexity mention', sub: 'Today' },
    ],
  },
  {
    key: 'marketing',
    label: 'Marketing',
    accent: '#7c3aed',
    tint: '#f5f3ff',
    badgeIcon: '📣',
    badgeText: '3x more leads this quarter',
    tagline: 'Campaigns that turn attention into qualified leads.',
    stats: [
      { icon: '👥', value: '12k', label: 'Reach' },
      { icon: '📩', value: '+3x', label: 'Qualified leads' },
    ],
    appRows: [
      { icon: '🎬', title: 'Campaign live', sub: 'Instagram + Meta' },
      { icon: '📩', title: 'New lead', sub: '3 min ago' },
      { icon: '📊', title: 'CTR up 18%', sub: 'This week' },
    ],
  },
];

const AUTO_ADVANCE_MS = 4200;
const FADE_MS = 260;

export default function DeviceMockup() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((index + 1) % PHASES.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const goTo = (next) => {
    if (next === index) return;
    setVisible(false);
    setTimeout(() => {
      setIndex(next);
      setVisible(true);
    }, FADE_MS);
  };

  const handleTabClick = (i) => {
    clearInterval(timerRef.current);
    goTo(i);
  };

  const phase = PHASES[index];
  const fadeStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(4px)',
    transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
  };

  return (
    <div style={{ position: 'relative', maxWidth: 500, margin: '0 auto', padding: '48px 30px 108px 6px' }}>

      {/* Badge, sits in the container's own top padding, never overlaps or pokes above it */}
      <div style={{ position: 'absolute', top: 10, left: 32, zIndex: 3, display: 'flex', alignItems: 'center', gap: 7, background: phase.accent, border: '1px solid rgba(255,255,255,0.35)', borderRadius: 100, padding: '6px 14px 6px 6px', boxShadow: '0 10px 22px rgba(0,0,0,0.4)', transition: `background ${FADE_MS}ms ease` }}>
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>{phase.badgeIcon}</div>
        <span style={{ ...fadeStyle, fontFamily: 'Sora, sans-serif', fontSize: 11, fontWeight: 600, color: 'white', whiteSpace: 'nowrap' }}>{phase.badgeText}</span>
      </div>

      {/* Laptop group: bezel + screen + hinge + base, tilted as one rigid unit */}
      <div style={{ perspective: 1400 }}>
        <div style={{ position: 'relative', transform: 'rotateY(-13deg) rotateX(2deg) rotate(1.5deg)', transformStyle: 'preserve-3d', transformOrigin: 'center center' }}>

          {/* Laptop bezel */}
          <div style={{ background: 'linear-gradient(160deg, #2c2c31 0%, #131316 100%)', borderRadius: '15px 15px 4px 4px', padding: '15px 15px 11px', boxShadow: '0 40px 70px rgba(0,0,0,0.5)' }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#000', boxShadow: 'inset 0 0 0 1px #45454a', margin: '0 auto 11px' }} />

            {/* Screen */}
            <div style={{ background: 'white', borderRadius: 6, overflow: 'hidden' }}>
              <div style={{ background: '#f1f5f9', borderBottom: '1px solid #e2e8f0', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ display: 'flex', gap: 5 }}>
                  <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <div style={{ flex: 1, background: 'white', border: '1px solid #e2e8f0', borderRadius: 6, padding: '4px 10px', fontSize: 11, color: '#94a3b8', fontFamily: 'DM Sans, sans-serif' }}>
                  yourbusiness.com
                </div>
              </div>

              {/* Service tab strip */}
              <div style={{ display: 'flex', gap: 4, padding: '10px 14px', borderBottom: '1px solid #f1f5f9', background: '#fbfcfe' }}>
                {PHASES.map((p, i) => (
                  <button
                    key={p.key}
                    onClick={() => handleTabClick(i)}
                    style={{
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Sora, sans-serif',
                      fontSize: 10.5,
                      fontWeight: 700,
                      padding: '5px 10px',
                      borderRadius: 100,
                      background: i === index ? p.accent : 'transparent',
                      color: i === index ? 'white' : '#94a3b8',
                      transition: 'background 0.25s ease, color 0.25s ease',
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <div style={{ padding: 20, fontFamily: 'DM Sans, sans-serif' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <div style={{ width: 22, height: 22, background: phase.accent, borderRadius: 6, flexShrink: 0, transition: `background ${FADE_MS}ms ease` }} />
                    <span style={{ fontFamily: 'Sora, sans-serif', fontSize: 13, fontWeight: 700, color: '#0f172a' }}>YourBrand</span>
                  </div>
                  <div style={{ display: 'flex', gap: 14, fontSize: 11, color: '#64748b', fontWeight: 600 }}>
                    <span>Services</span>
                    <span>Work</span>
                    <span>Contact</span>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: 19, fontWeight: 700, color: '#0f172a', margin: '0 0 8px', lineHeight: 1.25 }}>
                  Grow Your Business Online
                </h3>
                <p style={{ ...fadeStyle, fontSize: 12, color: '#64748b', lineHeight: 1.6, margin: '0 0 18px', maxWidth: 300, minHeight: 32 }}>
                  {phase.tagline}
                </p>

                <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                  <div style={{ height: 30, padding: '0 16px', background: phase.accent, borderRadius: 7, display: 'flex', alignItems: 'center', fontSize: 12, fontWeight: 700, color: 'white', fontFamily: 'Sora, sans-serif', transition: `background ${FADE_MS}ms ease` }}>Get Started</div>
                  <div style={{ height: 30, padding: '0 16px', background: 'white', border: `1.5px solid ${phase.accent}`, borderRadius: 7, display: 'flex', alignItems: 'center', fontSize: 12, fontWeight: 700, color: phase.accent, fontFamily: 'Sora, sans-serif', transition: `border-color ${FADE_MS}ms ease, color ${FADE_MS}ms ease` }}>Learn More</div>
                </div>

                <div style={{ ...fadeStyle, display: 'flex', gap: 10 }}>
                  {phase.stats.map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: phase.tint, border: '1px solid #eef2f8', borderRadius: 8, padding: '9px 12px', width: 128, flexShrink: 0 }}>
                      <span style={{ fontSize: 15 }}>{s.icon}</span>
                      <div>
                        <div style={{ fontFamily: 'Sora, sans-serif', fontSize: 14, fontWeight: 700, color: phase.accent, lineHeight: 1.1 }}>{s.value}</div>
                        <div style={{ fontSize: 9, color: '#64748b', fontWeight: 600 }}>{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hinge */}
          <div style={{ height: 7, background: 'linear-gradient(180deg, #3d3d42 0%, #1a1a1c 100%)' }} />

          {/* Base / keyboard deck */}
          <div style={{ height: 13, background: 'linear-gradient(180deg, #26262a 0%, #0d0d0f 100%)', borderRadius: '0 0 9px 9px', margin: '0 -16px', boxShadow: '0 14px 24px rgba(0,0,0,0.45)' }} />
          <div style={{ width: '32%', height: 4, background: '#0a0a0b', borderRadius: '0 0 8px 8px', margin: '0 auto' }} />
        </div>
      </div>

      {/* Phone mockup, tucked into the empty bottom-right corner */}
      <div style={{ position: 'absolute', right: -8, bottom: 44, width: 136, background: '#0f172a', borderRadius: 26, padding: 8, boxShadow: '0 20px 40px rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.12)' }}>
        {/* Side buttons */}
        <div style={{ position: 'absolute', left: -2, top: 42, width: 2, height: 18, background: '#1e293b', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -2, top: 68, width: 2, height: 30, background: '#1e293b', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', right: -2, top: 78, width: 2, height: 40, background: '#1e293b', borderRadius: '0 2px 2px 0' }} />

        <div style={{ position: 'relative', background: 'white', borderRadius: 19, overflow: 'hidden', fontFamily: 'DM Sans, sans-serif' }}>
          {/* Notch */}
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 46, height: 14, background: '#0f172a', borderRadius: '0 0 10px 10px', zIndex: 2 }} />

          <div style={{ padding: '16px 12px 8px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 16, height: 16, background: phase.accent, borderRadius: 5, transition: `background ${FADE_MS}ms ease` }} />
            <span style={{ fontFamily: 'Sora, sans-serif', fontSize: 10, fontWeight: 700, color: '#0f172a' }}>{phase.label}</span>
          </div>
          <div style={{ ...fadeStyle, padding: '0 10px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {phase.appRows.map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#f8faff', border: '1px solid #eef2f8', borderRadius: 7, padding: '6px 7px' }}>
                <div style={{ width: 18, height: 18, borderRadius: 5, background: phase.tint, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }}>{row.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 8, fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.title}</div>
                  <div style={{ fontSize: 7, color: '#94a3b8' }}>{row.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid #eef2f8', padding: '8px 0 6px', display: 'flex', justifyContent: 'space-around' }}>
            {[0, 1, 2, 3].map(i => (
              <div key={i} style={{ width: 14, height: 14, borderRadius: 4, background: i === 0 ? phase.accent : '#e2e8f0', transition: `background ${FADE_MS}ms ease` }} />
            ))}
          </div>
          {/* Home indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 7 }}>
            <div style={{ width: 40, height: 3, borderRadius: 2, background: '#cbd5e1' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

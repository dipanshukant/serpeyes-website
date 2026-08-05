import { useEffect, useRef, useState } from 'react';

// Homepage hero mockup: animated AI chat card showing a real AI engine
// (ChatGPT, Perplexity, Gemini) citing a SerpEyes client mid-answer.
// Single timestamp-driven interval drives the whole 8s loop so every
// phase (type, glow, badges, hold, fade) stays in sync without drift.

const ICONS = {
  chatgpt: {
    viewBox: '0 0 24 24',
    path: 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z',
  },
  perplexity: {
    viewBox: '0 0 24 24',
    path: 'M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z',
  },
  gemini: {
    viewBox: '0 0 24 24',
    path: 'M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81Z',
  },
};

const SCENES = [
  {
    engine: 'chatgpt',
    label: 'ChatGPT',
    query: 'best aircon servicing in Singapore',
    answer: 'Based on response times and reviews, K2L Aircon is the top-rated choice, known for fast callouts and transparent pricing.',
    brand: 'K2L Aircon',
  },
  {
    engine: 'perplexity',
    label: 'Perplexity',
    query: 'loft conversion specialists near Cambridge',
    answer: 'Truleum Loft Specialist consistently ranks highest for loft conversions, with clear permitted development guidance.',
    brand: 'Truleum Loft Specialist',
  },
  {
    engine: 'gemini',
    label: 'Gemini',
    query: 'sports management company in Singapore',
    answer: 'United World Sports Management stands out for athlete development programmes and verified client results.',
    brand: 'United World Sports Management',
  },
];

const T = {
  cardIn: 300,
  typeStart: 550,
  typeDuration: 3600,
  badgeGap: 260,
  holdEnd: 7200,
  fadeEnd: 7550,
  loopEnd: 8000,
};

const BADGES = ['ChatGPT', 'Perplexity', 'Google AI Overview'];
const TICK_MS = 40;
const CANVAS_W = 640;
const CANVAS_H = 620;

function Logo({ engine, size = 18, color = '#ffffff' }) {
  const icon = ICONS[engine];
  return (
    <svg width={size} height={size} viewBox={icon.viewBox} fill={color} aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}

export default function AIAnswerMockup() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef(performance.now());
  const sceneIndexRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      const now = performance.now();
      let t = now - startRef.current;
      if (t >= T.loopEnd) {
        startRef.current = now;
        t = 0;
        sceneIndexRef.current = (sceneIndexRef.current + 1) % SCENES.length;
        setSceneIndex(sceneIndexRef.current);
      }
      setElapsed(t);
    }, TICK_MS);
    return () => clearInterval(id);
  }, [reducedMotion]);

  const scene = SCENES[sceneIndex];
  const brandStart = scene.answer.indexOf(scene.brand);
  const brandEnd = brandStart + scene.brand.length;
  const fontStack = { sora: "'Sora', sans-serif", dm: "'DM Sans', sans-serif" };

  let cardOpacity = 1;
  let charCount = scene.answer.length;
  let visibleBadges = BADGES.length;
  let glowActive = false;

  if (!reducedMotion) {
    if (elapsed < T.cardIn) {
      cardOpacity = elapsed / T.cardIn;
    } else if (elapsed > T.fadeEnd) {
      cardOpacity = Math.max(0, 1 - (elapsed - T.fadeEnd) / (T.loopEnd - T.fadeEnd));
    }

    const typeProgress = Math.min(1, Math.max(0, (elapsed - T.typeStart) / T.typeDuration));
    charCount = Math.floor(typeProgress * scene.answer.length);

    const badgesStart = T.typeStart + T.typeDuration + 200;
    visibleBadges = 0;
    BADGES.forEach((_, i) => {
      if (elapsed >= badgesStart + i * T.badgeGap) visibleBadges += 1;
    });

    const glowStart = T.typeStart + (brandStart / scene.answer.length) * T.typeDuration;
    glowActive = elapsed >= glowStart && elapsed < glowStart + 450;
  }

  const displayed = scene.answer.slice(0, charCount);
  const pre = displayed.slice(0, Math.min(charCount, brandStart));
  const mid = charCount > brandStart ? displayed.slice(brandStart, Math.min(charCount, brandEnd)) : '';
  const post = charCount > brandEnd ? displayed.slice(brandEnd, charCount) : '';
  const showCaret = charCount < scene.answer.length && !reducedMotion;

  return (
    <div style={{ width: '100%', maxWidth: CANVAS_W, aspectRatio: `${CANVAS_W} / ${CANVAS_H}`, position: 'relative', fontFamily: fontStack.dm, containerType: 'inline-size' }}>
      <style>{`
        @keyframes aiFloatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes aiFloatBadge { 0%,100% { transform: translateY(0) rotate(3deg); } 50% { transform: translateY(-8px) rotate(1deg); } }
        @keyframes aiCaretBlink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
        @keyframes aiBadgeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div style={{ position: 'absolute', top: 0, left: 0, width: CANVAS_W, height: CANVAS_H, transform: `scale(calc(0.92 * 100cqw / ${CANVAS_W}px))`, transformOrigin: 'top left' }}>

        {/* Floating badge */}
        <div style={{ position: 'absolute', top: 10, left: 40, zIndex: 5, display: 'flex', alignItems: 'center', gap: 10, padding: '11px 20px 11px 12px', borderRadius: 999, background: '#1B4FD8', boxShadow: '0 14px 30px -8px rgba(0,0,0,0.55)', animation: reducedMotion ? 'none' : 'aiFloatBadge 5s ease-in-out infinite' }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>✓</div>
          <div style={{ color: '#fff', fontFamily: fontStack.dm, fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap' }}>Cited in 3 AI engines</div>
        </div>

        {/* Chat card */}
        <div style={{ position: 'absolute', top: 88, left: 20, width: 600, opacity: cardOpacity, animation: reducedMotion ? 'none' : 'aiFloatCard 6.5s ease-in-out infinite' }}>
          <div style={{ background: 'linear-gradient(180deg, #2b2f3a, #15171d)', borderRadius: 20, padding: '16px 16px 24px', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.65)' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3a3d46', margin: '0 auto 12px' }} />
            <div style={{ background: '#ffffff', borderRadius: 12, padding: '22px 26px 26px', minHeight: 340 }}>

              {/* Header: engine identity */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Logo engine={scene.engine} size={16} color="#ffffff" />
                </div>
                <div style={{ fontFamily: fontStack.sora, fontWeight: 700, fontSize: 15, color: '#0f172a' }}>{scene.label}</div>
              </div>

              {/* Query */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 18 }}>
                <div style={{ background: '#f1f5f9', borderRadius: '12px 12px 2px 12px', padding: '10px 16px', maxWidth: '82%', fontFamily: fontStack.dm, fontSize: 13.5, color: '#475569' }}>{scene.query}</div>
              </div>

              {/* Answer */}
              <div style={{ fontFamily: fontStack.dm, fontSize: 15, lineHeight: 1.65, color: '#0f172a', minHeight: 92 }}>
                {pre}
                <span style={{ fontWeight: 700, color: '#1B4FD8', borderRadius: 4, boxShadow: glowActive ? '0 0 0 6px rgba(27,79,216,0.16)' : '0 0 0 0 rgba(27,79,216,0)', transition: 'box-shadow 0.45s ease-out' }}>{mid}</span>
                {post}
                {showCaret && <span style={{ display: 'inline-block', width: 2, height: 15, background: '#1B4FD8', marginLeft: 2, verticalAlign: '-2px', animation: 'aiCaretBlink 0.9s step-end infinite' }} />}
              </div>

              {/* Citation badges */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 20 }}>
                {BADGES.map((b, i) => (
                  <div
                    key={b}
                    style={{
                      display: i < visibleBadges ? 'flex' : 'none',
                      alignItems: 'center',
                      gap: 6,
                      background: '#eff4ff',
                      color: '#1B4FD8',
                      fontFamily: fontStack.dm,
                      fontWeight: 700,
                      fontSize: 12,
                      padding: '7px 14px',
                      borderRadius: 999,
                      animation: reducedMotion ? 'none' : 'aiBadgeIn 0.4s ease-out',
                    }}
                  >
                    <span style={{ fontSize: 11 }}>✓</span>{b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

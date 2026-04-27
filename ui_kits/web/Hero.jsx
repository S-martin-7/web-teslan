function Hero() {
  return (
    <section style={heroStyles.wrap}>
      <div style={heroStyles.bg} />
      <div style={heroStyles.wash} />
      <HeroNetwork />
      <div style={heroStyles.inner}>
        <div style={heroStyles.content}>
          <div style={heroStyles.eyebrow}>Norte de Chile · Proyectos en terreno</div>
          <h1 style={heroStyles.h1}>
            Infraestructura y <span style={heroStyles.gradient}>despliegue técnico</span> para proyectos en terreno
          </h1>
          <p style={heroStyles.lead}>
            Teslan desarrolla soluciones de infraestructura física, conectividad y seguridad para plantas, recintos, bodegas, faenas y sitios remotos del norte de Chile. Ejecutamos proyectos de montaje, torres, cableado estructurado, CCTV y enlaces multi-sitio.
          </p>
          <div style={heroStyles.ctas}>
            <button style={heroStyles.primary}>Solicitar evaluación técnica →</button>
            <button style={heroStyles.secondary}>Ver servicios</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroNetwork() {
  const nodes = [
    [800, 90], [980, 170], [1110, 300], [900, 430], [690, 320], [1060, 70],
  ];
  return (
    <svg className="hero-network" viewBox="0 0 1200 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="heroSignal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2BC4D9" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#9AD3F4" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#E87824" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="heroNode" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#2BC4D9" />
          <stop offset="100%" stopColor="#2BC4D9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d="M690 320 C780 190 880 120 980 170 S1100 260 1110 300 S980 430 900 430 S770 380 690 320" fill="none" stroke="url(#heroSignal)" strokeWidth="1.6" />
      <path d="M800 90 C880 120 930 140 980 170 C1030 205 1075 250 1110 300" fill="none" stroke="url(#heroSignal)" strokeWidth="1.2" />
      <path d="M1060 70 C1045 120 1020 150 980 170" fill="none" stroke="url(#heroSignal)" strokeWidth="1.2" />
      {nodes.map(([x, y], i) => (
        <g key={`${x}-${y}`}>
          <circle className="signal-ring" cx={x} cy={y} r="14" fill="none" stroke="#2BC4D9" strokeWidth="1" style={{animationDelay: `${i * 0.35}s`}} />
          <circle cx={x} cy={y} r="8" fill="url(#heroNode)" />
          <circle cx={x} cy={y} r="2.4" fill="#fff" />
        </g>
      ))}
    </svg>
  );
}

const heroStyles = {
  wrap: { position: 'relative', minHeight: 560, overflow: 'hidden', color: '#fff' },
  bg: { position: 'absolute', inset: 0, backgroundImage: "url('https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=1800')", backgroundSize: 'cover', backgroundPosition: 'center' },
  wash: { position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(10,42,107,0.92) 0%, rgba(27,82,194,0.75) 55%, rgba(43,196,217,0.4) 100%)' },
  inner: { position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '96px 24px 80px' },
  content: { maxWidth: 640 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: 16 },
  h1: { fontSize: 52, lineHeight: 1.08, margin: '0 0 18px', fontWeight: 800, letterSpacing: '-0.02em' },
  gradient: { background: 'linear-gradient(90deg, #FFFFFF 0%, #9AD3F4 55%, #2BC4D9 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' },
  lead: { fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.88)', margin: '0 0 28px', maxWidth: 560 },
  ctas: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  primary: { background: 'var(--accent-orange-600)', color: '#fff', border: 0, padding: '14px 26px', borderRadius: 999, fontWeight: 600, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit', boxShadow: 'var(--sh-cta)' },
  secondary: { background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.45)', padding: '14px 26px', borderRadius: 999, fontWeight: 600, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit' },
};

Object.assign(window, { Hero, HeroNetwork });

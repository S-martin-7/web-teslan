function CoverageMap() {
  const cities = ['Arica', 'Iquique', 'Tocopilla', 'Calama', 'Antofagasta'];
  const pills = [
    { icon: 'building-2', label: 'Recintos' },
    { icon: 'map-pin', label: 'Sitios remotos' },
    { icon: 'wifi', label: 'Enlaces' },
    { icon: 'share-2', label: 'Operación multi-sitio' },
  ];
  return (
    <section style={cmStyles.wrap}>
      <div style={cmStyles.mapBg} />
      <div style={cmStyles.wash} />
      <div style={cmStyles.inner}>
        <div style={cmStyles.left}>
          <h2 style={cmStyles.h2}>
            Capacidad de despliegue<br/>en distintos puntos del <span style={cmStyles.gradient}>norte de Chile</span>
          </h2>
          <p style={cmStyles.lead}>Teslan desarrolla proyectos para recintos, plantas, estaciones y sitios remotos, integrando infraestructura física, conectividad y seguridad operacional en una misma solución.</p>
          <div style={cmStyles.pillRow}>
            {pills.map(p => (
              <div key={p.label} style={cmStyles.pill}>
                <i data-lucide={p.icon} style={{width: 16, height: 16}}></i>
                <span>{p.label}</span>
              </div>
            ))}
          </div>
          <button style={cmStyles.primary}>Ver cobertura y proyectos →</button>
        </div>
        <div style={cmStyles.right}>
          <svg viewBox="0 0 260 360" style={{width: '100%', maxWidth: 260, height: 'auto'}}>
            {/* vertical Chile-ish coast line */}
            <path d="M130,10 Q150,90 135,170 Q120,250 145,350" stroke="rgba(43,196,217,0.35)" strokeWidth="1.5" fill="none" strokeDasharray="2 4"/>
            {cities.map((c, i) => {
              const y = 40 + i * 60;
              const x = 130 + (i % 2 === 0 ? -4 : 6);
              return (
                <g key={c}>
                  <circle cx={x} cy={y} r="5" fill="#2BC4D9" />
                  <circle cx={x} cy={y} r="12" fill="none" stroke="rgba(43,196,217,0.3)" />
                  <line x1={x+14} y1={y} x2={x+40} y2={y} stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
                  <text x={x+46} y={y+4} fill="#fff" fontSize="13" fontWeight="600">{c}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}

const cmStyles = {
  wrap: { position: 'relative', background: 'var(--bg-dark)', color: '#fff', overflow: 'hidden' },
  mapBg: { position: 'absolute', inset: 0, backgroundImage: "url('https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=1800')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.22 },
  wash: { position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(10,42,107,0.92) 0%, rgba(15,19,32,0.95) 100%)' },
  inner: { position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'center' },
  left: {},
  h2: { fontSize: 36, fontWeight: 800, letterSpacing: '-0.015em', lineHeight: 1.1, margin: '0 0 16px', color: '#fff' },
  gradient: { background: 'linear-gradient(90deg, #9AD3F4, #2BC4D9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' },
  lead: { fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', maxWidth: 540, margin: '0 0 24px' },
  pillRow: { display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 },
  pill: { display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '8px 14px', borderRadius: 999, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.9)' },
  primary: { background: 'var(--accent-orange-600)', color: '#fff', border: 0, padding: '12px 22px', borderRadius: 999, fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', boxShadow: 'var(--sh-cta)' },
  right: { display: 'flex', justifyContent: 'center' },
};

Object.assign(window, { CoverageMap });

function FeatureBar() {
  const features = [
    { icon: 'map-pin', label: 'Cobertura en el norte de Chile' },
    { icon: 'file-text', label: 'Infraestructura física y conectividad' },
    { icon: 'share-2', label: 'Proyectos multi-sitio' },
    { icon: 'hard-hat', label: 'Ejecución en terreno' },
  ];
  return (
    <section style={fbStyles.wrap}>
      <div style={fbStyles.inner}>
        {features.map(f => (
          <div key={f.label} style={fbStyles.cell}>
            <div style={fbStyles.iconWrap}><i data-lucide={f.icon} style={{width: 22, height: 22}}></i></div>
            <div style={fbStyles.label}>{f.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const fbStyles = {
  wrap: { background: 'var(--bg-dark)', color: '#fff' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '28px 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 },
  cell: { display: 'flex', alignItems: 'center', gap: 14 },
  iconWrap: { width: 44, height: 44, borderRadius: 10, background: 'rgba(43,196,217,0.12)', color: 'var(--teslan-cyan-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  label: { fontSize: 14, fontWeight: 500, lineHeight: 1.3, color: 'rgba(255,255,255,0.92)' },
};

Object.assign(window, { FeatureBar });

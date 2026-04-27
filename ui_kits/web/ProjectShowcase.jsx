function ProjectShowcase() {
  const projects = [
    { img: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Topología e integración entre recintos', body: 'Diseñamos topologías robustas que integran plantas, bodegas y estaciones bajo una misma operación.' },
    { img: 'https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Ubicación de equipos y cobertura por sectores', body: 'Planificación de cámaras y cobertura para sectores productivos continuos y sensibles.' },
    { img: 'https://images.pexels.com/photos/45170/kahle-alps-mountains-dish-antenna-45170.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Enlaces y conectividad entre sitios', body: 'Implementación de enlaces punto a punto y multipunto para conectar múltiples ubicaciones.' },
  ];
  return (
    <section style={psStyles.wrap}>
      <div style={psStyles.inner}>
        <div style={psStyles.head}>
          <h2 style={psStyles.h2}>Experiencia en proyectos de <span style={psStyles.gradient}>infraestructura y despliegue técnico</span></h2>
          <p style={psStyles.lead}>Teslan aborda proyectos que combinan infraestructura física, cobertura, conectividad y seguridad, integrando distintos puntos dentro de una misma operación.</p>
        </div>
        <div style={psStyles.grid}>
          {projects.map(p => (
            <article key={p.title} style={psStyles.card}>
              <div style={{...psStyles.img, backgroundImage: `url(${p.img})`}} />
              <div style={psStyles.body}>
                <h3 style={psStyles.title}>{p.title}</h3>
                <p style={psStyles.copy}>{p.body}</p>
                <a href="#" style={psStyles.more}>Ver caso →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const psStyles = {
  wrap: { background: '#fff' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '80px 24px' },
  head: { textAlign: 'center', maxWidth: 720, margin: '0 auto 40px' },
  h2: { fontSize: 34, fontWeight: 800, letterSpacing: '-0.015em', margin: '0 0 10px', lineHeight: 1.15, color: 'var(--fg-strong)' },
  gradient: { background: 'var(--teslan-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' },
  lead: { fontSize: 15, color: 'var(--fg-muted)', margin: 0, lineHeight: 1.55 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 },
  card: { background: '#fff', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' },
  img: { height: 180, backgroundSize: 'cover', backgroundPosition: 'center' },
  body: { padding: 22 },
  title: { fontSize: 16, fontWeight: 700, margin: '0 0 8px', color: 'var(--fg-strong)', lineHeight: 1.3 },
  copy: { fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.55, margin: '0 0 14px' },
  more: { fontSize: 12, fontWeight: 600, color: 'var(--teslan-blue-700)', textDecoration: 'none' },
};

Object.assign(window, { ProjectShowcase });

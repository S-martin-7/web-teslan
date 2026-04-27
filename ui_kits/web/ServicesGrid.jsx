function ServicesGrid() {
  const services = [
    { img: 'https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Infraestructura y montaje', body: 'Montaje de torres, estructuras, soportes, gabinetes y canalización.' },
    { img: 'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Cableado y fibra óptica', body: 'Cableado estructurado, tendido de fibra, fusiones y terminaciones.' },
    { img: 'https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'CCTV y seguridad en recintos', body: 'Cámaras, NVR, perímetros y zonas críticas.' },
    { img: 'https://images.pexels.com/photos/45170/kahle-alps-mountains-dish-antenna-45170.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Enlaces y despliegue multi-sitio', body: 'Enlaces inalámbricos, nodos, repetidores e integración entre recintos.' },
  ];
  return (
    <section style={sgStyles.wrap}>
      <div style={sgStyles.inner}>
        <div style={sgStyles.head}>
          <h2 style={sgStyles.h2}>Servicios principales</h2>
          <p style={sgStyles.lead}>Soluciones diseñadas para proyectos que requieren infraestructura, cobertura y continuidad operacional.</p>
        </div>
        <div style={sgStyles.grid}>
          {services.map(s => (
            <article key={s.title} style={sgStyles.card}>
              <div style={{...sgStyles.img, backgroundImage: `url(${s.img})`}} />
              <div style={sgStyles.body}>
                <h3 style={sgStyles.cardTitle}>{s.title}</h3>
                <p style={sgStyles.cardBody}>{s.body}</p>
                <a href="#" style={sgStyles.more}>Más información →</a>
              </div>
            </article>
          ))}
        </div>
        <div style={{textAlign: 'center', marginTop: 32}}>
          <button style={sgStyles.ghost}>Conocer todos los servicios →</button>
        </div>
      </div>
    </section>
  );
}

const sgStyles = {
  wrap: { background: 'var(--bg-soft)' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '80px 24px' },
  head: { textAlign: 'center', maxWidth: 640, margin: '0 auto 40px' },
  h2: { fontSize: 34, fontWeight: 800, margin: '0 0 10px', letterSpacing: '-0.015em', color: 'var(--fg-strong)' },
  lead: { fontSize: 16, color: 'var(--fg-muted)', margin: 0, lineHeight: 1.55 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 },
  card: { background: '#fff', borderRadius: 14, overflow: 'hidden', border: '1px solid var(--border)', position: 'relative', transition: 'box-shadow var(--dur-med) var(--ease-standard)' },
  img: { height: 150, backgroundSize: 'cover', backgroundPosition: 'center' },
  body: { padding: 20, position: 'relative' },
  cardTitle: { fontSize: 15, fontWeight: 700, margin: '0 0 8px', color: 'var(--fg-strong)', lineHeight: 1.3 },
  cardBody: { fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5, margin: '0 0 14px' },
  more: { fontSize: 12, fontWeight: 600, color: 'var(--accent-orange-600)', textDecoration: 'none' },
  ghost: { background: 'transparent', border: '1.5px solid var(--teslan-blue-700)', color: 'var(--teslan-blue-700)', padding: '12px 24px', borderRadius: 999, fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' },
};

Object.assign(window, { ServicesGrid });

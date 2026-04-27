function Footer() {
  return (
    <footer style={ftStyles.wrap}>
      <div style={ftStyles.inner}>
        <div>
          <img src="../../assets/logo-teslan.png" alt="Teslan" style={{height: 36, filter: 'brightness(1.15)'}} />
          <p style={ftStyles.desc}>Infraestructura, conectividad y seguridad para proyectos en terreno del norte de Chile.</p>
        </div>
        <div>
          <h5 style={ftStyles.h5}>Enlaces rápidos</h5>
          {['Inicio','Servicios','Proyectos','Cobertura','Marketplace','Nosotros'].map(l => (
            <a key={l} href="#" style={ftStyles.link}>{l}</a>
          ))}
        </div>
        <div>
          <h5 style={ftStyles.h5}>Servicios</h5>
          {['Infraestructura y montaje','Cableado y fibra óptica','CCTV y seguridad en recintos','Enlaces y despliegue multi-sitio','Proyectos multi-sitio'].map(l => (
            <a key={l} href="#" style={ftStyles.link}>{l}</a>
          ))}
        </div>
        <div>
          <h5 style={ftStyles.h5}>Contacto</h5>
          <div style={ftStyles.contact}><i data-lucide="map-pin" style={{width:14,height:14}}></i> Antofagasta, Chile</div>
          <div style={ftStyles.contact}><i data-lucide="phone" style={{width:14,height:14}}></i> +56 9 1234 5678</div>
          <div style={ftStyles.contact}><i data-lucide="mail" style={{width:14,height:14}}></i> contacto@teslan.cl</div>
        </div>
      </div>
      <div style={ftStyles.bottom}>
        <span>© 2025 Teslan SpA. Todos los derechos reservados.</span>
        <span style={{marginLeft: 'auto'}}>Política de privacidad · Términos y condiciones</span>
      </div>
    </footer>
  );
}

const ftStyles = {
  wrap: { background: '#0B1020', color: '#fff' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '56px 24px 28px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1.2fr 1.1fr', gap: 40 },
  desc: { fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginTop: 14, maxWidth: 280 },
  h5: { fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--teslan-cyan-500)', margin: '0 0 12px' },
  link: { display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.78)', textDecoration: 'none', marginBottom: 8 },
  contact: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.78)', marginBottom: 8 },
  bottom: { maxWidth: 1200, margin: '0 auto', padding: '18px 24px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', fontSize: 12, color: 'rgba(255,255,255,0.5)' },
};

Object.assign(window, { Footer });

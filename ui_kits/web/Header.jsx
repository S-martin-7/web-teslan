const { useState } = React;

function Header() {
  const [open, setOpen] = useState(false);
  const nav = ['Inicio', 'Servicios', 'Proyectos', 'Cobertura', 'Nosotros', 'Contacto'];
  return (
    <header style={headerStyles.wrap}>
      <div style={headerStyles.inner}>
        <a href="#" style={headerStyles.brand}>
          <img src="../../assets/logo-teslan.png" alt="Teslan" style={{height: 40, display: 'block'}} />
        </a>
        <nav style={headerStyles.nav}>
          {nav.map((n, i) => (
            <a key={n} href="#" style={{...headerStyles.navLink, ...(i===0 ? headerStyles.navActive : {})}}>{n}</a>
          ))}
        </nav>
        <div style={headerStyles.ctas}>
          <button style={headerStyles.primary}>Solicitar evaluación</button>
          <button style={headerStyles.whatsapp}>
            <WaIcon /> WhatsApp
          </button>
        </div>
      </div>
    </header>
  );
}

function WaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 3.8A11.2 11.2 0 0 0 12 .5a11.4 11.4 0 0 0-9.7 17.4L.5 23.5l5.8-1.5a11.4 11.4 0 0 0 5.7 1.5A11.4 11.4 0 0 0 20 3.8zm-7.9 17.7h-.1a9.4 9.4 0 0 1-4.8-1.3l-.3-.2-3.5.9.9-3.4-.2-.4A9.5 9.5 0 1 1 12.1 21.5z"/>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.5-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.2 2.8 1.2 2.8.8 3.3.8.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z"/>
    </svg>
  );
}

const headerStyles = {
  wrap: { position: 'sticky', top: 0, background: 'rgba(255,255,255,0.96)', backdropFilter: 'saturate(180%) blur(6px)', borderBottom: '1px solid var(--border)', zIndex: 50 },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 24 },
  brand: { flexShrink: 0 },
  nav: { display: 'flex', gap: 22, flex: 1, justifyContent: 'center' },
  navLink: { fontSize: 14, fontWeight: 500, color: 'var(--neutral-700)', textDecoration: 'none' },
  navActive: { color: 'var(--teslan-blue-700)', fontWeight: 600 },
  ctas: { display: 'flex', gap: 8 },
  primary: { background: 'var(--accent-orange-600)', color: '#fff', border: 0, padding: '10px 18px', borderRadius: 999, fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', boxShadow: 'var(--sh-cta)' },
  whatsapp: { background: 'var(--support-green-600)', color: '#fff', border: 0, padding: '10px 16px', borderRadius: 999, fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'inherit' },
};

Object.assign(window, { Header, WaIcon });

function CtaBanner() {
  return (
    <section style={cbStyles.wrap}>
      <div style={cbStyles.bg} />
      <div style={cbStyles.wash} />
      <div style={cbStyles.inner}>
        <div style={cbStyles.content}>
          <h2 style={cbStyles.h2}>
            ¿Necesitas ejecutar un proyecto en terreno o conectar <span style={cbStyles.gradient}>múltiples ubicaciones</span>?
          </h2>
          <p style={cbStyles.lead}>Conversemos sobre tu requerimiento y evaluemos una solución de infraestructura, conectividad y seguridad alineada a tu operación.</p>
          <div style={cbStyles.ctas}>
            <button style={cbStyles.primary}>Solicitar cotización</button>
            <button style={cbStyles.whatsapp}><WaIcon /> Hablar por WhatsApp</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const cbStyles = {
  wrap: { position: 'relative', color: '#fff', overflow: 'hidden' },
  bg: { position: 'absolute', inset: 0, backgroundImage: "url('https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=1800')", backgroundSize: 'cover', backgroundPosition: 'center' },
  wash: { position: 'absolute', inset: 0, background: 'linear-gradient(95deg, rgba(10,42,107,0.94) 0%, rgba(27,82,194,0.82) 60%, rgba(43,196,217,0.55) 100%)' },
  inner: { position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '72px 24px' },
  content: { maxWidth: 720 },
  h2: { fontSize: 32, fontWeight: 800, letterSpacing: '-0.015em', lineHeight: 1.15, margin: '0 0 14px', color: '#fff' },
  gradient: { background: 'linear-gradient(90deg, #FFFFFF, #9AD3F4, #2BC4D9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' },
  lead: { fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 620 },
  ctas: { display: 'flex', gap: 10, flexWrap: 'wrap' },
  primary: { background: 'var(--accent-orange-600)', color: '#fff', border: 0, padding: '12px 22px', borderRadius: 999, fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', boxShadow: 'var(--sh-cta)' },
  whatsapp: { background: 'var(--support-green-600)', color: '#fff', border: 0, padding: '12px 20px', borderRadius: 999, fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 8 },
};

Object.assign(window, { CtaBanner });

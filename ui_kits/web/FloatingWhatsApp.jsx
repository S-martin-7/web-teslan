function FloatingWhatsApp() {
  return (
    <a href="#" style={fwStyles.bubble} aria-label="Hablar por WhatsApp">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M20 3.8A11.2 11.2 0 0 0 12 .5a11.4 11.4 0 0 0-9.7 17.4L.5 23.5l5.8-1.5a11.4 11.4 0 0 0 5.7 1.5A11.4 11.4 0 0 0 20 3.8zm-7.9 17.7h-.1a9.4 9.4 0 0 1-4.8-1.3l-.3-.2-3.5.9.9-3.4-.2-.4A9.5 9.5 0 1 1 12.1 21.5z"/><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.5-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.2 2.8 1.2 2.8.8 3.3.8.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z"/></svg>
    </a>
  );
}
const fwStyles = {
  bubble: { position: 'fixed', bottom: 24, right: 24, width: 56, height: 56, borderRadius: '50%', background: 'var(--support-green-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 24px rgba(31,168,85,0.4)', zIndex: 100, textDecoration: 'none' },
};
Object.assign(window, { FloatingWhatsApp });

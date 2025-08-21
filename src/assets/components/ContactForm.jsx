export default function ContactForm() {
  return (
    <section className="contact-section">
      <h2>Si quieres trabajar en la Ciberseguridad de tu empresa ¡Contáctanos!</h2>
      <form>
        <input type="text" placeholder="Empresa *" required />
        <input type="text" placeholder="Nombre *" required />
        <input type="tel" placeholder="Teléfono *" required />
        <input type="email" placeholder="Email *" required />
        <textarea placeholder="Comentario o mensaje" required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
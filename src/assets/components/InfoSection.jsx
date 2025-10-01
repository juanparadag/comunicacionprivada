export default function InfoSection({ title, children }) {
  return (
    <section className="info-section">    {/* sección de la información */}
      <h2>{title}</h2>
      <div className="content">
        {children}
      </div>
    </section>
  );
}
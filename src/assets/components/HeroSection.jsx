export default function HeroSection() {
     const handleScroll = () => {
    const target = document.getElementById("about-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Protege tu Empresa con Confianza</h1>
        <p>
          Soluciones avanzadas en ciberseguridad diseñadas para garantizar tu
          privacidad y la de tu organización.
        </p>
        <button className="hero-button" onClick={handleScroll}>Conoce más</button>
      </div>
    </section>
  );
}

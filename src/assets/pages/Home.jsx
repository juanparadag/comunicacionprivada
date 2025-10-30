//importaciones
import "../stylesheets/Home.css"; // separar estilos
import Contactform from "../components/Contactform";
import ExclusiveAppSection from "../components/ExclusiveAppSection";
import InfoSection from "../components/InfoSection";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";

// Definición del componente funcional "Home"
function Home() {
  return (
     // Contenedor principal de toda la página de inicio
    <div className="home-page">
      <HeroSection />

      <InfoSection title="Sobre Nosotros">
        <p>
          Somos una empresa dedicada a ofrecer comunicaciones privadas y
          seguras, diseñadas para quienes valoran la confidencialidad, la
          confianza y la estabilidad. Nuestro sistema ha sido creado para
          garantizar un entorno robusto, confiable y adaptado a las necesidades
          modernas de privacidad, tanto para individuos como para
          organizaciones.
        </p>
      </InfoSection>

      <InfoSection title="Nuestros Servicios">
         {/* Contenedor que agrupa las tarjetas de servicios */}
        <div className="cards-container">
          <div className="card">
            <img className="round-image"
              src="https://trueconf.com/images/encryption/server.png"
              alt="Servicio 1"
            />
            <p>
              Comunicaciones seguras y privadas: Mensajería y llamadas
              protegidas bajo un entorno confiable.
            </p>
          </div>
          <div className="card">
            <img className="round-image"
              src="https://www.ufinet.com/wp-content/uploads/2025/06/Image_fx1371.jpg"
              alt="Servicio 2"
            />
            <p>
              Plataforma robusta y eficiente: Infraestructura estable, rápida y optimizada
              para ofrecer rendimiento empresarial continuo, incluso en entornos exigentes o remotos.
            </p>
          </div>
          <div className="card">
            <img  className="round-image" 
              src="https://static.vecteezy.com/system/resources/previews/039/302/910/non_2x/experience-concept-line-icon-simple-element-illustration-experience-concept-outline-symbol-design-vector.jpg"
              alt="Servicio 3"
            />
            <p>
              Experiencia sencilla: Todo diseñado para que el uso sea rápido,
              práctico y sin complicaciones técnicas..
            </p>
          </div>
        </div>
      </InfoSection>
      <Contactform /> {/* Formulario de contacto */}
      <AboutSection />{/* Sección de informacion */}
      {/* <ExclusiveAppSection /> {/* Sección exclusiva de la app */}
      <Footer /> {/* Footer */}

    </div>
  );
}

export default Home;

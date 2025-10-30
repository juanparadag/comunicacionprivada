import "../stylesheets/InfoSection.css";
import img1 from "../images/00.png";
import img2 from "../images/01.png";
import img3 from "../images/02.png";
import img4 from "../images/03.png";
import InfoSection from "./InfoSection";

export default function AboutSection() {
  return (
    <section className="info-section" id="about-section">
      <div className="info-container">
        <h2>Seguridad segura con control total</h2>
        <p>
          En un mundo donde la información se ha convertido en el recurso más
          valioso, Monocles Chat ofrece una nueva forma de comunicación
          empresarial: privada, confiable y totalmente bajo control. Diseñada
          para organizaciones que valoran la seguridad, esta integración permite
          proteger cada mensaje, llamada y archivo compartido dentro de su
          entorno corporativo.
        </p>
        <InfoSection title="¿Por qué elegir nuestro Sistema?">
          {/* Contenedor que agrupa las tarjetas de servicios */}
          <div className="cards-container">
            <div className="card">
              <img
                className="round-image"
                src="https://png.pngtree.com/png-vector/20220821/ourlarge/pngtree-capital-icon-trade-reserve-donate-vector-png-image_19628232.jpg"
                alt="Servicio 1"
              />
              <p>
                <strong>Precios accesibles y competitivos:</strong> Solución económica que
                elimina costos de licencias externas, ofreciendo un servicio
                seguro y eficiente ajustado a cada empresa.
              </p>
            </div>
            <div className="card">
              <img
                className="round-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnE-KmhsZS2Mcim3KjJYIis9y3KACbAZBpA&s"
              />
              <p>
                <strong>Adaptabilidad a cualquier entorno empresarial:</strong> Sistema flexible
                y escalable que se ajusta al tamaño y necesidades de cada
                organización, garantizando integración fluida y segura.
              </p>
            </div>
            <div className="card">
              <img
                className="round-image"
                src="https://img.freepik.com/vector-gratis/soporte-empresarial-liderazgo-consultoria-asesoramiento-personaje-dibujos-animados-masculino-circulo-inflable-elemento-diseno-plano-lider-empresa_335657-2670.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Servicio 3"
              />
              <p>
                <strong>Control total y protección de datos:</strong> Gestión interna de la
                información con cifrado avanzado y servidores propios para
                asegurar privacidad y control absoluto.
              </p>
            </div>
          </div>
        </InfoSection>

        <div className="info-block">
          <img src={img1} alt="Comunicación Segura" />
          <div>
            <h3>Privacidad sin compromisos</h3>
            <p>
              Con Monocles Chat, su empresa mantiene la propiedad total de las
              comunicaciones. Toda la información permanece dentro de un entorno
              privado, eliminando riesgos de filtraciones y asegurando que
              ningún tercero acceda a los datos corporativos. Es la manera más
              eficaz de garantizar la confidencialidad absoluta en las
              operaciones diarias.
            </p>
          </div>
        </div>

        <div className="info-block reverse">
          <img src={img2} alt="Gestión Empresarial" />
          <div>
            <h3>Comunicación segura y eficiente</h3>
            <p>
              La integración con nuestro sistema de seguridad privada convierte
              a Monocles Chat en una herramienta estratégica: permite que los
              equipos se comuniquen, coordinen tareas y compartan información de
              forma discreta, cifrada y estable, tanto en oficinas como en
              entornos remotos.
            </p>
          </div>
        </div>

        <div className="info-block">
          <img src={img3} alt="Confianza Organizacional" />
          <div>
            <h3>Confianza para su organización</h3>
            <p>
              Esta solución está diseñada para organizaciones que exigen
              confianza y control total sobre sus comunicaciones. Al integrar
              Monocles Chat, su empresa no solo mejora la eficiencia de sus
              procesos internos, sino que también refuerza la protección de su
              información estratégica frente a amenazas externas.
            </p>
          </div>
        </div>

        <div className="info-block reverse">
          <img src={img4} alt="Sectores Empresariales" />
          <div>
            <h3>Ideal para sectores que exigen discreción</h3>
            <p>
              Ideal para empresas, instituciones financieras, firmas legales,
              entidades de salud y organismos públicos, Monocles Chat se adapta
              a cada estructura organizacional, garantizando una experiencia
              segura, moderna y funcional que consolida la identidad digital de
              su compañía.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

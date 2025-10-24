import React from "react";
import "../stylesheets/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo + descripción */}
        <div className="footer-info">
          <h3>Comunicaciones Seguras</h3>
          <p>
            Proveemos soluciones robustas en comunicaciones seguras para proteger a su empresa
            de las amenazas digitales. Su privacidad y confianza son nuestra prioridad.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-section">
          <h4>Nuestros Servicios</h4>
          <ul>
            <li><a href="#">Mensajería Segura</a></li>
            <li><a href="#">Reuniones Seguras</a></li>
            <li><a href="#">Respuesta a Incidentes</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-section">
          <h4>Contáctanos</h4>
          <p>📞 +57 322 360 3288</p>
          <p>✉️ soporteti@bmstecnology.com</p>
          <p>📍 Bogotá, D.C., Colombia</p>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h4>Información Legal</h4>
          <ul>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Aviso Legal</a></li>
          </ul>
        </div>

       
      </div>

      {/* Línea inferior */}
      <div className="footer-bottom">
        <p className="footer-copy">© 2025 Comunicaciones Seguras — Todos los derechos reservados.</p>
        <p>Construido con tecnología segura y cifrada 🔐</p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import "../stylesheets/Footer.css";

   {/* contenedor del footer */}
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo + descripción */}
        <div className="footer-info">
          <h3>CiberGuard</h3>
          <p>
            Proveemos soluciones robustas en ciberseguridad para proteger a su empresa de las amenazas digitales.
          </p>
          <p>© 2025 CiberGuard - Todos los derechos reservados.</p>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-links">
          <h4>Nuestros Servicios</h4>
          <ul>
            <li><a href="#">Análisis de Vulnerabilidades</a></li>
            <li><a href="#">Gestión de Riesgos</a></li>
            <li><a href="#">Respuesta a Incidentes</a></li>
            <li><a href="#">Auditoría de Seguridad</a></li>
            <li><a href="#">Formación en Ciberseguridad</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-contact">
          <h4>Contáctanos</h4>
          <p>+57 320 000 0000</p>
          
          <p>contacto@ciberseguridad.com</p>
          <p>Bogotá, D.C., Colombia</p>
        </div>

        {/* Sección Legal */}
        <div className="footer-legal">
          <h4>Información Legal</h4>
          <ul>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Aviso Legal</a></li>
          </ul>
        </div>
        
        {/* Sección de Socios o Certificaciones */}
        <div className="footer-partners">
          <h4>Nuestros Socios</h4>
          <ul>
            <li><a href="#">Certificaciones ISO 27001</a></li>
            <li><a href="#">Partners de Seguridad</a></li>
            <li><a href="#">Entidades Reguladoras</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
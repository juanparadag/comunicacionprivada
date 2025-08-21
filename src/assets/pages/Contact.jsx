import React from 'react';
import '../stylesheets/Contact.css'; // estilos separados

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contáctanos</h1>
      <p>
        Si deseas más información sobre nuestros servicios de ciberseguridad,
        no dudes en comunicarte con nosotros.
      </p>

      <div className="contact-info">
        <h3>Información de Contacto</h3>
        <p><strong>Teléfono:</strong> +57 320 000 0000</p>
        <p><strong>Email:</strong> contacto@ciberseguridad.com</p>
        <p><strong>Dirección:</strong> Bogotá, Colombia</p>
      </div>

      <div className="contact-map">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
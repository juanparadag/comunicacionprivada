import React from "react";
import { Link } from 'react-router-dom'; // Importa Link
import "../stylesheets/Contactform.css";

export default function ContactForm() {
  return (
    <section className="contact-section">
      <h2>Únete a nuestra plataforma</h2>
      <p>
        Para empezar a proteger tu empresa, regístrate en nuestra plataforma.
      </p>
      <Link to="/signup"> {/* Usa Link para navegar a /signup */}
        <button className="register-button">Deseo registrarme</button>
      </Link>
    </section>
  );
}